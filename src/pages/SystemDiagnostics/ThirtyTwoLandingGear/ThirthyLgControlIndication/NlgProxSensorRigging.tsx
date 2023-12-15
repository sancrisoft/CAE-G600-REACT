import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const NlgProxSensorRigging = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'NLG SENSORS' }, { title: 'RIGGING STATUS' }];
  const data = [
    { parameter: 'NLG1 DR CLOSED - LH FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG2 DR CLOSED - RH FWD', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG1 DOOR OPEN - LH AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG2 DOOR OPEN - RH AFT', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG1 DOWNLOCKED - LH', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG2 DOWNLOCKED - RH', status1: 'CORRECTLY RIGGED' },
    { parameter: 'NLG CH1 UPLOCKED - LH', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH2 UPLOCKED - RH', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH1 WOW - LH', status1: 'NOT AVAILABLE' },
    { parameter: 'NLG CH2 WOW - RH', status1: 'NOT AVAILABLE' },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323009'} right={['Select done to continue']} />}>
      <DataHeader left={'NLG proximity sensor rigging'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} leftAlign headerLeftAlign reducedHeaderStatus1/>
    </DefaultLayout>
  );
};

export default NlgProxSensorRigging;
