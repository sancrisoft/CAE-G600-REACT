import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const FqmsProbesDataDryCapPf = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'R CH B' }];
  const data = [
    { parameter: 'P1', status1: '46.32', status2: '45.90', status3: '46.32', status4: '45.90' },
    { parameter: 'K1', status1: '56.82', status2: '56.74', status3: '56.82', status4: '56.74' },
    { parameter: 'P2', status1: '62.66', status2: '63.10', status3: '62.66', status4: '63.10' },
    { parameter: 'P3', status1: '71.61', status2: '72.01', status3: '71.61', status4: '72.01' },
    { parameter: 'P4', status1: '37.14', status2: '37.32', status3: '37.14', status4: '37.32' },
    { parameter: 'P5', status1: '46.06', status2: '46.24', status3: '46.06', status4: '46.24' },
    { parameter: 'P6', status1: '37.54', status2: '37.36', status3: '37.54', status4: '37.36' },
    { parameter: 'P7', status1: '42.57', status2: '42.50', status3: '42.57', status4: '42.50' },
    { parameter: 'P8', status1: '37.95', status2: '37.57', status3: '37.95', status4: '37.57' },
    { parameter: 'P9', status1: '42.57', status2: '42.18', status3: '42.57', status4: '42.18' },
    { parameter: 'P10', status1: '31.09', status2: '31.47', status3: '31.09', status4: '31.47' },
    { parameter: 'P11', status1: '36.96', status2: '37.46', status3: '36.96', status4: '37.46' },
    { parameter: 'P13', status1: '30.91', status2: '30.85', status3: '30.91', status4: '30.85' },
    { parameter: 'L1', status1: '16.57', status2: '16.77', status3: '16.57', status4: '16.77' },
    { parameter: 'L2', status1: '20.60', status2: '21.14', status3: '20.60', status4: '21.14' },
    { parameter: 'L3', status1: '16.57', status2: '17.02', status3: '16.57', status4: '17.02' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284112'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probes dry cap (pf)'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProbesDataDryCapPf;
