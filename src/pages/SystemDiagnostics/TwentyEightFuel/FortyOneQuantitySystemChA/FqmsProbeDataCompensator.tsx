import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsProbeDataCompensator = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'L COMPENSATOR' }, { title: 'CH A' }, { title: 'CH B' }];
  const data1 = [
    { parameter: 'CAP (PF)-DRY.MEAS', status1: '33.21', status2: '33.21' },
    { parameter: 'CAP (PF)', status1: '56.40', status2: '56.39' },
    { parameter: 'K COEFFICIENT', status1: '0.00', status2: '0.00' },
    { parameter: 'FAILED INIT', status1: false, status2: false },
    { parameter: 'COMP NOT COVERED', status1: true, status2: true },
    { parameter: 'CAP OUT OF RANGE', status1: false, status2: false },
    { parameter: 'K OUT OF RANGE', status1: false, status2: false },
  ];

  const tableHeader2 = [{ title: 'R COMPENSATOR' }, { title: 'CH A' }, { title: 'CH B' }];
  const data2 = [
    { parameter: 'CAP (PF)-DRY.MEAS', status1: '32.98', status2: '32.98' },
    { parameter: 'CAP (PF)', status1: '51.89', status2: '51.89' },
    { parameter: 'K COEFFICIENT', status1: '0.00', status2: '0.00' },
    { parameter: 'FAILED INIT', status1: false, status2: false },
    { parameter: 'COMP NOT COVERED', status1: true, status2: true },
    { parameter: 'CAP OUT OF RANGE', status1: false, status2: false },
    { parameter: 'K OUT OF RANGE', status1: false, status2: false },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284106'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probe data - compensator'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  );
};

export default FqmsProbeDataCompensator;
