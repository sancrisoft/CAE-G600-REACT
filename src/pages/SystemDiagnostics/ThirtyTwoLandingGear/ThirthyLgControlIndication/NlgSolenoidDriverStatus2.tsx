import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const Page = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SOLENOID POSITION' }, { title: 'CL1' }, { title: 'CL2' }];
  const data = [
    { parameter: 'MLG DOORS CLOSE HI', status1: true, status2: false },
    { parameter: 'MLG DOORS CLOSE LOW', status1: false, status2: true },
    { parameter: 'MLG DOORS OPEN HI', status1: false, status2: false },
    { parameter: 'MLG DOORS OPEN LOW', status1: false, status2: false },
    { parameter: 'MLG EXTEND HI', status1: true, status2: false },
    { parameter: 'MLG EXTEND LOW', status1: false, status2: true },
    { parameter: 'MLG RETRACT HI', status1: false, status2: false },
    { parameter: 'MLG RETRACT LOW', status1: false, status2: false },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323003'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'MLG SOLENOID DRIVER STATUS'} right={'2/2'} />
      <Legend title="on" title2="off" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default Page;
