import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Ahrs1Status3 = () => {
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
      parameter: 'MSU HEADING',
      statuses: ['-19.92 DEG', '-18.41 DEG'],
      alignRight: true,
    },
    {
      parameter: 'PITCH ANGLE',
      statuses: ['-1.01 DEG', ' -1.34 DEG'],
      alignRight: true,
    },
    {
      parameter: 'ROLL ANGLE',
      statuses: ['0.76 DEG', '0.42 DEG'],
      alignRight: true,
    },
    {
      parameter: 'FLIGHT PATH ANG',
      statuses: ['-0.01 DEG', '-0.00 DEG'],
      alignCenter: true,
    },
    {
      parameter: 'INRTL ALT',
      statuses: ['164 FT', '163 FT'],
      alignCenter: true,
    },
    {
      parameter: 'INRTL VERT SPD',
      statuses: ['-2 FT/MN', '-1 FT/MN'],
      alignCenter: true,
    },
    {
      parameter: 'MAG HEADING',
      statuses: ['-19.05 DEG', '-18.34DEG'],
      alignCenter: true,
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status4',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342303'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'ahrs status '} right={'3/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default Ahrs1Status3;
