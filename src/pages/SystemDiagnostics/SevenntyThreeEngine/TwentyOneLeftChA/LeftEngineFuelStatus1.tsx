import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineFuelStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'N1', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'N2', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'FMU FUEL TEMPERATURE', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'FUEL INLET PRESSURE', statuses: ['511.1 PSIG', '511.1 PSIG'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'FUEL FLOW (METER)', statuses: ['0 PPH', '0 PPH'], customSpan: 2 },
    { parameter: 'FUEL FLOW (LVDT)', statuses: ['0 PPH', '0 PPH'], customSpan: 2 },
    { parameter: 'FUEL METERING POSTN CMD', statuses: ['0 PPH', '0 PPH'], customSpan: 2 },
    { parameter: 'FUEL FLOW ON LVDT BKUP', statuses: [false, false], customSpan: 2 },
    { parameter: 'FUEL METERING T/M CMD', statuses: ['0.0 MA', '0.0 MA'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'HFRS A/C VALVE OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'EQUALIZATION VALVE CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'OVERSPEED CMD', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginefuelstatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'733001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine fuel system status'} right={'1/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineFuelStatus1;
