import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const RmlgProxSensorRigging = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'RMLG SENSORS' }, { title: 'RIGGING STATUS' }];
  const data = [
    { parameter: 'RMLG1 DR CLSD - AFT OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG2 DR CLSD - FWD OTBD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG1 DR OPEN - AFT INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG2 DR OPEN - FWD INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG1 DOWNLOCKED - AFT', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG2 DOWNLOCKED - FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'RMLG CH1 UPLOCKED - FWD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG CH2 UPLOCKED - AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG CH1 WOW - INBD', status1: 'NOT AVAILABLE' },
    { parameter: 'RMLG CH2 WOW - OUTBD', status1: 'NOT AVAILABLE' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323010'} right={['Select done to continue']} />}>
      <DataHeader left={'RMLG proximity sensor rigging'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} leftAlign headerLeftAlign reducedHeaderStatus1/>
    </DefaultLayout>
  );
};

export default RmlgProxSensorRigging;
