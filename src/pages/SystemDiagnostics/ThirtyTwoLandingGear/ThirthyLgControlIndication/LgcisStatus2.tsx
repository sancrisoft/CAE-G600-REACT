import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const LgcisStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'LANDING GEAR POSITION' }, { title: 'CL1' }, { title: 'CL2' }];
  const data = [
    { parameter: 'NLG UPLOCKED', status1: false, status2: false },
    { parameter: 'NLG UPLOCKED VALID', status1: true, status2: true },
    { parameter: 'NLG DOWNLOCKED', status1: true, status2: true },
    { parameter: 'NLG DOWNLOCKED VALID', status1: true, status2: true },
    { parameter: 'RH MLG UPLOCKED', status1: false, status2: false },
    { parameter: 'RH MLG UPLOCKED VALID', status1: true, status2: true },
    { parameter: 'RH MLG DOWNLOCKED', status1: true, status2: true },
    { parameter: 'RH MLG DOWNLOCKED VALID', status1: true, status2: true },
    { parameter: 'LH MLG UPLOCKED', status1: false, status2: false },
    { parameter: 'LH MLG UPLOCKED VALID', status1: true, status2: true },
    { parameter: 'LH MLG DOWNLOCKED', status1: true, status2: true },
    { parameter: 'LH MLG DOWNLOCKED VALID', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/lgcisstatus3',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323005'} right={['Select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'LGCIS status'} right={'2/3'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle />
    </DefaultLayout>
  );
};

export default LgcisStatus2;
