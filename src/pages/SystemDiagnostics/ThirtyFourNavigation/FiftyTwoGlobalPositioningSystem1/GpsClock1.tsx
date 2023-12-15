import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const GpsClock1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS ', alignLeft: true },
    { title: 'gps1', customSpan: 1, hasBorderBottom: false },
    { title: 'gps2', customSpan: 1, hasBorderBottom: false },
  ];

  const secHeaders = [
    { title: 'IOGM2', customSpan: 1 },
    { title: 'IOGM3', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'HOURS TENS',
      statuses: ['', ''],
    },
    {
      parameter: 'HOURS ONES',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'MINUTES TENS ',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'MINUTES ONES',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'MINUTES TENTHS',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'DATE YEAR TENS',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'DATE YEARS ONES',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'MONTHS TENS',
      statuses: ['', ''],
      alignRight: true,
    },
    {
      parameter: 'MONTHS ONES',
      statuses: ['X', 'X'],
      alignRight: true,
    },
    {
      parameter: 'DAYS TENS',
      statuses: ['', ''],
      alignRight: true,
    },
    {
      parameter: 'DAYS ONES',
      statuses: ['X', 'X'],
      alignRight: true,
    },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsclock2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'345203'} right={['Select fwd to continue']} />}>
      <DataHeader left={'gps clock status'} right={'1/2'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secHeaders} />
    </DefaultLayout>
  );
};

export default GpsClock1;
