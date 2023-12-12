import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const Page = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'IOGM DISCRETES' }, { title: 'IOGM3' }, { title: 'IOGM4' }];
  const data1 = [
    { parameter: 'FUEL INT. TANK OPEN', status1: false, status2: false },
    { parameter: 'FUEL INT. TANK CLOSED', status1: true, status2: true },
  ];

  const tableHeader2 = [{ title: 'IOGM DISCRETES' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data2 = [
    { parameter: 'R MAIN BOOST PUMP ON', status1: false, status2: false },
    { parameter: 'R MAIN FUEL SEL ON', status1: false, status2: false },
    { parameter: 'R ALT BOOST PUMP ON', status1: false, status2: false },
    { parameter: 'R ALT FUEL SEL ON', status1: false, status2: false },
    { parameter: 'L ALT BOOST PUMP ON', status1: false, status2: false },
    { parameter: 'L ALT FUEL SEL ON', status1: false, status2: false },
  ];

  const tableHeader3 = [{ title: 'IOGM DISCRETES' }, { title: 'IOGM3' }, { title: 'IOGM2' }];
  const data3 = [
    { parameter: 'L MAIN BOOST PUMP ON', status1: false, status2: false },
    { parameter: 'L MAIN FUEL SEL ON', status1: false, status2: false },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'282002'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'Fuel Distribution Status'} right={'2/2'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
      <StatusTable data={data3} tableHeader={tableHeader3} />
    </DefaultLayout>
  );
};

export default Page;
