import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineOilSystem = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'N1', statuses: ['0.0 %', '0.0 %'], customSpan: 2 },
    { parameter: 'N2', statuses: ['0.0 %', '0.0 %'], customSpan: 2 },
    { parameter: 'MAIN OIL TEMPERATURE ', statuses: ['28.1 DEGC', '28.1 DEGC'], customSpan: 2 },
    { parameter: 'MAIN OIL PRESSURE ', statuses: ['0.0 PSIG', '0.0 PSIG'], customSpan: 2 },
    { parameter: ' ', statuses: ['', ''], customSpan: 2 },
    { parameter: 'OIL TEMP EXCD HIGH ', statuses: [false, false], customSpan: 2 },
    { parameter: 'OIL TEMP EXCD LOW', statuses: [false, false], customSpan: 2 },
    { parameter: 'OIL PRESS EXCD HIGH', statuses: [false, false], customSpan: 2 },
    { parameter: 'OIL PRESS EXCD LOW', statuses: [false, false], customSpan: 2 },
    { parameter: ' ', statuses: ['', ''], customSpan: 2 },
    { parameter: 'OIL FILTR DELTA PRESS', statuses: ['0.7 PSIG', '0.7 PSIG'], customSpan: 2 },
    { parameter: 'OIL FILTR IMP BYPASS', statuses: [false, false], customSpan: 2 },
    { parameter: 'OIL FILTR BYPASS', statuses: [false, false], customSpan: 2 },
    { parameter: 'RPLCE FLTR IN XXX HR', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'793001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine oil system'} right={'1/1'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineOilSystem;
