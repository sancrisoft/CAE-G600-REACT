import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';
import Legend from '../../../../components/Legend';

const OutboardBrakeStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data1 = [
    { parameter: 'THRUST REVERSER > 45 KTS', status1: true, status2: true },
    { parameter: 'SPOILER SPINUP > 50 KTS', status1: true, status2: true },
  ];

  const data2 = [
    { parameter: 'AUTOBRAKE FAIL', status1: true, status2: true },
    { parameter: 'AUTOBRAKE DISARMED', status1: true, status2: true },
    { parameter: 'AUTOBRAKE RTO', status1: true, status2: true },
    { parameter: 'AUTOBRAKE LO', status1: true, status2: true },
    { parameter: 'AUTOBRAKE MED', status1: true, status2: true },
    { parameter: 'AUTOBRAKE HI', status1: true, status2: true },
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
      href: '/systemdiagnostics/twentyeightfuel/fortyfourbrakecontroloutboard/outboardbrakestatus4',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324007'} right={['Select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'brake ctrl unit outboard sys status'} right={'3/4'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default OutboardBrakeStatus3;
