import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import Legend from '../../../../components/Legend';
import DynamicTable from '../../../../components/DynamicTable';

const GpsStatus1 = () => {
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
      parameter: 'GPS MODULE/ANTENNA/WRNING',
      statuses: [true, true],
    },
    {
      parameter: 'RF INPUT',
      statuses: [true, true],
    },
    {
      parameter: 'GPS INTERNAL',
      statuses: [true, true],
    },
    {
      parameter: 'GPS 429 OUT 1',
      statuses: [true, true],
    },
    {
      parameter: 'GPS 429 OUT 2',
      statuses: [true, true],
    },
    {
      parameter: 'GPS 429 OUT 3',
      statuses: [true, true],
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
      href: '/systemdiagnostics/thirtyfournavigation/fiftytwoglobalpositioningsystem1/gpsstatus2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'345201'} right={['Select fwd to continue']} />}>
      <DataHeader left={'gps status'} right={'1/2'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secHeaders} />
    </DefaultLayout>
  );
};

export default GpsStatus1;
