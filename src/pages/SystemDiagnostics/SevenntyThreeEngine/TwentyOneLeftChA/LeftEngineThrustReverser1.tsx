import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineThrustReverser1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'T/R INHIBITED COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R INHIBITED', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R CMD SWITCH1', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R CMD SWITCH2', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'LEFT WHEEL SPIN', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT WHEEL SPIN', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'LEFT MLG WOW', statuses: [true, true], customSpan: 2 },
    { parameter: 'RIGHT MLG WOW', statuses: [true, true], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftenginethrustreverser2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'703001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine thrust reverser status'} right={'1/3'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineThrustReverser1;
