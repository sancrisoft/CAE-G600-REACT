import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const LgcisStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'GEAR DOOR POSITION' }, { title: 'CL1' }, { title: 'CL2' }];
  const data = [
    { parameter: 'NLG DOOR CLSD', status1: true, status2: true },
    { parameter: 'NLG DOOR CLSD VALID', status1: true, status2: true },
    { parameter: 'NLG DOOR FULL OPEN', status1: false, status2: false },
    { parameter: 'NLG DOOR FULL OPEN VALID', status1: true, status2: true },
    { parameter: 'RH MLG DOOR CLSD', status1: true, status2: true },
    { parameter: 'RH MLG DOOR CLSD VALID', status1: true, status2: true },
    { parameter: 'RH MLG DOOR FULL OPEN', status1: false, status2: false },
    { parameter: 'RH MLG DOOR FULL OPEN VLD', status1: true, status2: true },
    { parameter: 'LH MLG DOOR CLSD', status1: true, status2: true },
    { parameter: 'LH MLG DOOR CLSD VLD', status1: true, status2: true },
    { parameter: 'LH MLG DOOR FULL OPEN', status1: false, status2: false },
    { parameter: 'LH MLG DOOR FULL OPEN VLD', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus2',

      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323004'} right={['Select fwd to continue']} />}>
      <DataHeader left={'LGCIS status'} right={'1/3'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default LgcisStatus1;
