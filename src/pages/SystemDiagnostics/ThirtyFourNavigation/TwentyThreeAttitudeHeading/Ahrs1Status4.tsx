import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Ahrs1Status4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'AHRU1', customSpan: 1, hasBorderBottom: false },
    { title: 'AHRU2', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders = [
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'LAT ACCEL',
      statuses: ['-0.01 G*S', '-0.01 G*S'],
      alignRight: true,
    },
    {
      parameter: 'LONG ACCEL',
      statuses: ['-0.02 G*S', '-0.02 G*S'],
      alignRight: true,
    },
    {
      parameter: 'VERT ACCEL',
      statuses: ['-0.00 G*S', '-0.00 G*S'],
      alignRight: true,
    },
    {
      parameter: 'NORM ACCEL',
      statuses: ['-0.00 G*S', '-0.00 G*S'],
      alignRight: true,
    },
    {
      parameter: 'BODY PITCH RATE',
      statuses: ['-0.02 D/S', '0.00 D/S'],
      alignRight: true,
    },
    {
      parameter: 'BODY ROLL RATE',
      statuses: ['0.0 D/S', '0.0 D/S'],
      alignRight: true,
    },
    {
      parameter: 'BODY YAW RATE',
      statuses: ['-0.02 D/S', '-0.02 D/S'],
      alignRight: true,
    },
    {
      parameter: 'INRT PITCH RATE',
      statuses: ['-0.02 D/S', '0.0 D/S'],
      alignRight: true,
    },
    {
      parameter: 'INRT ROLL RATE',
      statuses: ['0.00 D/S', '-0.02 D/S'],
      alignRight: true,
    },
    {
      parameter: 'INRT YAW RATE',
      statuses: ['-0.02 D/S', '-0.02 D/S'],
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342304'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'ahrs status '} right={'4/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default Ahrs1Status4;
