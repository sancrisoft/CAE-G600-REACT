import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const Page = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'WEIGHT ON WHEELS' }, { title: 'CH1' }, { title: 'CH2' }];
  const data = [
    { parameter: 'NLG WOW', status1: true, status2: true },
    { parameter: 'NLG WOW VALID', status1: true, status2: true },
    { parameter: 'RH MLG WOW', status1: true, status2: true },
    { parameter: 'RH MLG WOW VALID', status1: true, status2: true },
    { parameter: 'LH MLG WOW', status1: true, status2: true },
    { parameter: 'LH MLG WOW VALID', status1: true, status2: true },
    { parameter: 'CMBD LH/RH MLG WOW', status1: true, status2: true },
    { parameter: 'CMBD LH/RH MLG WOW VLD', status1: true, status2: true },
    { parameter: 'GEAR HORN MUTED', status1: false, status2: false },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323006'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'LGCIS status'} right={'3/3'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default Page;
