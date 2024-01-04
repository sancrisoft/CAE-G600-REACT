import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightIgnitionStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH b' }];

  const data = [
    { parameter: 'TGT', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'IGNITION COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'RUN/OFF SWITCH', statuses: ['OFF', 'OFF'], customSpan: 2 },
    { parameter: 'ENGINE START COMMANDED', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'NO LIGHT DURING START', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: 'HUNG START DETECTED', statuses: ['FALSE', 'FALSE'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'IGNITER A TEST COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITER B TEST COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITION A COMMANDED', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITION B COMMANDED', statuses: [false, false], customSpan: 2 },
    { parameter: 'A/C POWER FOR IGNITION', statuses: [true, true], customSpan: 2 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'741002'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine ignition status'} right={'1/1'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightIgnitionStatus;
