import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const FqmsProbesTemperatureC = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'R CH B' }];
  const data = [
    { parameter: 'P1', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'K1', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P2', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P3', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P4', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P5', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P6', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P7', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P8', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P9', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P10', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P11', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'P13', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'L1', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'L2', status1: '28', status2: '28', status3: '28', status4: '28' },
    { parameter: 'L3', status1: '28', status2: '28', status3: '28', status4: '28' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284111'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probes temperature (c)'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProbesTemperatureC;
