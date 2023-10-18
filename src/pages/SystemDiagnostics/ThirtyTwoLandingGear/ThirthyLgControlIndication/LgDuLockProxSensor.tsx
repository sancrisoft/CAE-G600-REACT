import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const LgDuLockProxSensor = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'LG DOWN LOCK SENSORS' }, { title: 'RIGGING STATUS' }];
  const data1 = [
    { parameter: 'LMLG CH1 DNLOCKED - FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'LMLG CH2 DNLOCKED - AFT', status1: 'HIGH' },
    { parameter: 'RMLG CH1 DNLOCKED - AFT', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG CH2 DNLOCKED - FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG CH1 DNLOCKED - LH', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG CH2 DNLOCKED - RH', status1: 'CORRECTLY RIGGED' },
  ];

  const tableHeader2 = [{ title: 'LG UP LOCK SENSORS' }, { title: 'RIGGING STATUS' }];
  const data2 = [
    { parameter: 'LMLG CH1 UPLOCKED - FWD', status1: 'NOT AVAILABLE' },
    { parameter: 'LMLG CH2 UPLOCKED - AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG CH1 UPLOCKED - AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG CH2 UPLOCKED - FWD', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH1 UPLOCKED - LH', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH2 UPLOCKED - RH', status1: 'NOT AVAILABLE' },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323013'} right={['Select done to continue']} />}>
      <DataHeader left={'LG down-up lock prox sensor rigging'} right={'1/1'} isTitleLeft />
      <DataTable data={data1} mainHeaders={tableHeader1} leftAlign headerLeftAlign />
      <DataTable data={data2} mainHeaders={tableHeader2} leftAlign headerLeftAlign marginTop />
    </DefaultLayout>
  );
};

export default LgDuLockProxSensor;
