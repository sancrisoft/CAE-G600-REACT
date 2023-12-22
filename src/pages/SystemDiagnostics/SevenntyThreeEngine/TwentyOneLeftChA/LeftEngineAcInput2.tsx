import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineAcInput2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'ALTER THRUST CTRL CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'N1 SYNC COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'ENGINE FIRE HANDLE', statuses: [false, false], customSpan: 2 },
    { parameter: 'FLAP HANDLE POSITION', statuses: ['0 DEG', '0 DEG'], customSpan: 2 },
    { parameter: 'HFRS A/C VALVE OPEN', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITER-A TEST CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'IGNITER-B TEST CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R CMD SWITCH 1', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R CDM SWITCH 2', statuses: [false, false], customSpan: 2 },
    { parameter: 'LEFT MLG WOW', statuses: [true, true], customSpan: 2 },
    { parameter: 'RIGHT MLG WOW', statuses: [true, true], customSpan: 2 },
    { parameter: 'LEFT WHEEL SPIN', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT WHEEL SPIN', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R ICV INHIBIT', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R MAINTENANCE SWITCH', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineacinput1',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'732002'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine a/c input eec echo'} right={'2/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineAcInput2;
