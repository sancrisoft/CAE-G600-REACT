import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const LgWowProxSensors = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'LG WOW SENSORS' }, { title: 'RIGGING STATUS' }];
  const data = [
    { parameter: 'LMLG CH1 WOW - INBD', status1: 'XXXXXXXXXXX' },
    { parameter: 'LMLG CH2 WOW - OUTBD', status1: 'XXXXXXXXXXX' },
    { parameter: 'RMLG CH1 WOW - INBD', status1: 'XXXXXXXXXXX' },
    { parameter: 'RMLG CH2 WOW - OUTBD', status1: 'XXXXXXXXXXX' },
    { parameter: 'NLG CH1 WOW - LH', status1: 'XXXXXXXXXXX' },
    { parameter: 'NLG CH2 WOW - RH', status1: 'XXXXXXXXXXX' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323014'} right={['Select done to continue']} />}>
      <DataHeader left={'LG wow proximity sensor rigging'} right={'1/1'} isTitleLeft />
      <DataTable data={data} mainHeaders={tableHeader} leftAlign headerLeftAlign reducedHeaderStatus1 />
    </DefaultLayout>
  );
};

export default LgWowProxSensors;
