import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightCaiStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'N2', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'CAI PRESSURE', statuses: ['0.0 PSIG', '0.0 PSIG'], customSpan: 2 },
    { parameter: 'BURNER PRESSURE', statuses: ['14.8 PSIG', '14.8 PSIG'], customSpan: 2 },
    { parameter: 'AMBIENT PRESSURE', statuses: ['14.6 PSIA', '14.6 PSIA'], customSpan: 2 },
    { parameter: 'A/C CAI CMD OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI COMMANDED CLOSED', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI VALVE OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI LOCKED OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI PRESSURE HIGH', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: 'CAI PRESSURE LOW', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: 'CAI SENSOR FAIL', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: 'CAI VLV FAILED OPEN', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: 'CAI VLV FAILED CLOSE', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'300002'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine cai system status'} right={'1/1'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightCaiStatus;
