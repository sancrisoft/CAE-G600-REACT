import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineAcInput1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'RUN-OFF SWITCH CMD', statuses: ['OFF', 'OFF'], customSpan: 2 },
    { parameter: 'RUN-OFF SWITCH VOTER', statuses: [false, false], customSpan: 2 },
    { parameter: 'ENGINE START CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'START CMD VOTER', statuses: [false, false], customSpan: 2, repeatStatus: 3 },
    { parameter: 'ENGINE CRANK CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'ISOLATION VALVE CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'LEFT MPRSOV CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT MPRSOV CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'LEFT ECS BLEED CMD', statuses: [true, true], customSpan: 2 },
    { parameter: 'RIGHT ECS BLEED CMD ', statuses: [true, true], customSpan: 2 },
    { parameter: 'LEFT WAI BLEED CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT WAI BLEED CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'CDWL ANTI ICE COMMAND', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftengineacinput2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'732001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine a/c input eec echo'} right={'1/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineAcInput1;
