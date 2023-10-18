import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const LgDoorProxSensors = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'LG DOOR OPEN SENSORS' }, { title: 'RIGGING STATUS' }];
  const data1 = [
    { parameter: 'LMLG1 DR OPEN - AFT INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'LMLG2 DR OPEN - FWD INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG1 DR OPEN - AFT INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG2 DR OPEN - FWD INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH1 DR OPEN - LH AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH2 DR OPEN - RH AFT', status1: 'NOT AVAILABLE' },
  ];

  const tableHeader2 = [{ title: 'LG DOOR CLOSED SENSORS' }, { title: 'RIGGING STATUS' }];
  const data2 = [
    { parameter: 'LMLG1 DR CLSD - AFT OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'LMLG2 DR CLSD - FWD OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG1 DR CLSD - AFT OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG2 DR CLSD - FWD OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG CH1 DR CLSD - LH FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG CH2 DR CLSD - RH FWD', status1: 'CORRECTLY RIGGED' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323012'} right={['Select done to continue']} />}>
      <DataHeader left={'LG door proximity sensor rigging'} right={'1/1'} isTitleLeft />
      <DataTable data={data1} mainHeaders={tableHeader1} />
      <DataTable data={data2} mainHeaders={tableHeader2} marginTop />
    </DefaultLayout>
  );
};

export default LgDoorProxSensors;
