import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const AirDataStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'ADS1', customSpan: 1, hasBorderBottom: false },
    { title: 'ADS2', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders = [
    { title: 'RDCI 3', customSpan: 1 },
    { title: 'RDCI 2', customSpan: 1 },
  ];
  const thirdHeaders = [
    { title: 'IOGM1', customSpan: 1, hasBorderBottom: false },
    { title: 'IOGM3', customSpan: 1, hasBorderBottom: false },
  ];

  const mainHeaders2 = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'ADS3', customSpan: 1, hasBorderBottom: false },
    { title: 'ADS4', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders2 = [
    { title: 'RDCI 5', customSpan: 1 },
    { title: 'RDCI 4', customSpan: 1 },
  ];
  const thirdHeaders2 = [
    { title: 'IOGM2', customSpan: 1, hasBorderBottom: false },
    { title: 'IOGM3', customSpan: 1, hasBorderBottom: false },
  ];

  const data = [
    {
      parameter: 'PRESS ALT FEET',
      statuses: ['163', '161'],
      alignRight: true,
    },
    {
      parameter: 'CAL ASPD KNOTS',
      statuses: ['6', '5'],
      alignRight: true,
    },
    {
      parameter: 'MACH',
      statuses: ['0.01', '0.00'],
      alignRight: true,
    },
    {
      parameter: 'AQA DEG',
      statuses: ['-0.0', '-0.00'],
      alignRight: true,
    },
    {
      parameter: 'SAT DEG C',
      statuses: ['28.5', '28.5'],
      alignRight: true,
    },
    {
      parameter: 'TAT DEG C',
      statuses: ['28.5', '28.5'],
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
      href: '/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'341201'} right={['Select fwd to continue']} />}>
      <DataHeader left={'ads status '} right={'1/7'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder thirdHeaders={thirdHeaders} customContainer customWidth />
      <DynamicTable data={data} mainHeaders={mainHeaders2} secondaryHeaders={secondaryHeaders2} hasBorder thirdHeaders={thirdHeaders2} customContainer customWidth />
    </DefaultLayout>
  );
};

export default AirDataStatus1;
