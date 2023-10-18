import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const Ahrs1Status2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'AHRU1', customSpan: 1, hasBorderBottom: false },
    { title: 'AHRU2', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders = [
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'AHRU',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'ATTITUDE',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'EXT CONFIG DATA',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'GYRO BITE',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'MSU',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'PWR SUPPLY BITE',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'TAS',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'POS PORGRAM MISMATCH',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'CONF DATA BITE',
      statuses: [true, true],
      alignCenter: true,
    },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status3',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342302'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'ahrs fault status '} right={'2/4'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default Ahrs1Status2;
