import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineFuelStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'N1', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'N2', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'FMU FUEL TEMPERATURE', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'FUEL INLET PRESSURE', statuses: ['511.1 PSIG', '511.1 PSIG'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'FUEL INLET PRESSR LOW', statuses: [false, false], customSpan: 2 },
    { parameter: 'FUEL INLET PRESSR HIGH', statuses: [false, false], customSpan: 2 },
    { parameter: 'FMU FUEL TEMP LOW', statuses: [false, false], customSpan: 2 },
    { parameter: 'FMU FUEL TEMP HIGH', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'FUEL FLTR DELTA PRESS', statuses: ['0.5 PSIG', '0.5 PSIG'], customSpan: 2 },
    { parameter: 'REPLCE FLTR IN XXX HRS', statuses: [false, false], customSpan: 2 },
    { parameter: 'FUEL FILTR IMPND BYPASS', statuses: [false, false], customSpan: 2 },
    { parameter: 'FUEL FILTR  BYPASS', statuses: [false, false], customSpan: 2 },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => {
        navigate('/systemdiagnostics');
      },
    },
    {
      text: 'prev',
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginefuelstatus',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'733002'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine fuel system status'} right={'2/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineFuelStatus2;
