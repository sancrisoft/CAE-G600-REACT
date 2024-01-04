import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightEngineStartStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'N2', statuses: ['0.0 %', '0.0 %'], customSpan: 2 },
    { parameter: 'TGT', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'FUEL FLOW', statuses: ['0 PPH', '0 PPH'], customSpan: 2 },
    { parameter: 'CHANNEL IN CONTROL', statuses: [false, true], customSpan: 2 },
    { parameter: 'START COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'RUN/OFF SWITCH', statuses: ['OFF', 'OFF'], customSpan: 2 },
    { parameter: 'ROTOR BOW PROTECTION', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITION COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'FUEL FLOW ENABLED', statuses: [false, false], customSpan: 2 },
    { parameter: 'START VALVE OPEN CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'START VALVE OPEN FDBK', statuses: [false, false], customSpan: 2 },
    { parameter: 'EQUALIZATION CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'HPC BOV CMD TO OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI CMD TO OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'CAI SOL ENERGIZED', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginestartstatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'801103'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine start status'} right={'1/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightEngineStartStatus1;
