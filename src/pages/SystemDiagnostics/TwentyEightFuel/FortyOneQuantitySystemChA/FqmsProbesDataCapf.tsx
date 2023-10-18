import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const FqmsProbesDataCapf = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'R CH B' }];
  const data = [
    { parameter: 'P1', status1: '75.25', status2: '63.68', status3: '75.28', status4: '63.74' },
    { parameter: 'K1', status1: '74.09', status2: '72.74', status3: '74.14', status4: '72.68' },
    { parameter: 'P2', status1: '72.33', status2: '75.06', status3: '72.34', status4: '75.06' },
    { parameter: 'P3', status1: '94.73', status2: '93.75', status3: '94.73', status4: '93.74' },
    { parameter: 'P4', status1: '37.25', status2: '37.32', status3: '37.26', status4: '37.32' },
    { parameter: 'P5', status1: '46.20', status2: '46.68', status3: '46.18', status4: '46.64' },
    { parameter: 'P6', status1: '37.68', status2: '37.46', status3: '37.69', status4: '37.45' },
    { parameter: 'P7', status1: '42.67', status2: '42.65', status3: '42.68', status4: '42.63' },
    { parameter: 'P8', status1: '38.10', status2: '37.79', status3: '38.10', status4: '37.79' },
    { parameter: 'P9', status1: '42.74', status2: '42.30', status3: '42.74', status4: '42.29' },
    { parameter: 'P10', status1: '31.32', status2: '31.71', status3: '31.32', status4: '31.71' },
    { parameter: 'P11', status1: '37.12', status2: '37.62', status3: '37.13', status4: '37.62' },
    { parameter: 'P13', status1: '31.10', status2: '31.04', status3: '31.09', status4: '31.04' },
    { parameter: 'L1', status1: '22.05', status2: '17.03', status3: '22.06', status4: '17.03' },
    { parameter: 'L2', status1: '21.01', status2: '21.51', status3: '21.00', status4: '21.50' },
    { parameter: 'L3', status1: '16.73', status2: '17.21', status3: '16.73', status4: '17.22' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284108'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probe capacitance (pf)'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProbesDataCapf;
