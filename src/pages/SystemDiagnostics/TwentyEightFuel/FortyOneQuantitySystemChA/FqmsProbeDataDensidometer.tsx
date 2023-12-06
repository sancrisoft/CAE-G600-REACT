import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsProbeDataDensidometer = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETERS' }, { title: 'CH A' }, { title: 'CH B' }];
  const data1 = [
    { parameter: 'K2 COEFFICIENT', status1: '0.30', status2: '0.30' },
    { parameter: 'K0 COEFFICIENT', status1: '-820.81', status2: '-820.81' },
    { parameter: 'DENSITY (LB/GAL)', status1: '0.00', status2: '0.00' },
    { parameter: 'TEMP (C)', status1: '0.00', status2: '0.00' },
    { parameter: 'PERIOD', status1: '0.00', status2: '0.00' },
    { parameter: 'NOT COVERED', status1: false, status2: false },
    { parameter: 'DEN. OUT OF RANGE', status1: false, status2: false },
    { parameter: 'CROSS-CHECK ERROR', status1: false, status2: false },
    { parameter: 'NOT OPERATING', status1: false, status2: false },
    { parameter: 'TEMP OUT OF RANGE', status1: false, status2: false },
    { parameter: 'NOT RESPONDING', status1: false, status2: false },
    { parameter: 'NORMAL', status1: true, status2: true },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284107'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probe data - densidometer'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} supHeader="Densidometer - r bay 8" />
    </DefaultLayout>
  );
};

export default FqmsProbeDataDensidometer;
