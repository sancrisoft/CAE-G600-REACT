import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const InboardBrakeStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data1 = [
    { parameter: 'L PILOT BRK PEDAL FAIL', status1: true, status2: true },
    { parameter: 'R PILOT BRK PEDAL FAIL', status1: true, status2: true },
    { parameter: 'L COPILOT BRK PEDAL FAIL', status1: true, status2: true },
    { parameter: 'R COPILOT BRK PEDAL FAIL', status1: true, status2: true },
    { parameter: 'LEFT BRAKE OVERHEAT', status1: true, status2: true },
    { parameter: 'RIGHT BRAKE OVERHEAT', status1: true, status2: true },
  ];

  const data2 = [
    { parameter: 'MAIN TIRE OVERSPEED', status1: true, status2: true },
    { parameter: 'SPINDOWN ACTIVE', status1: true, status2: true },
    { parameter: 'START-UP TEST ACTIVE', status1: true, status2: true },
    { parameter: 'BCU CONSOLIDATED WOW (GND)', status1: false, status2: false },
    { parameter: 'PARK INDICATION ON', status1: true, status2: true },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'Prev',
      onClick: () => {
        navigate(-1);
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/FortyFourBrakeControlInboard/inboardbrakestatus3',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324002'} right={['Select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'brake ctrl unit inboard sys status'} right={'2/4'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default InboardBrakeStatus2;
