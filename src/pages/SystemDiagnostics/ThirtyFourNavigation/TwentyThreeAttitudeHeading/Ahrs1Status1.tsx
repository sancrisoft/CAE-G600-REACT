import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const Ahrs1Status1 = () => {
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
      parameter: 'attitude align',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'DG HEADING',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'HEADING ALIGN',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'HEADING INVALID',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'HEADING PRESET',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'MAGNETIC HEADING',
      statuses: [false, false],
      alignCenter: true,
    },
    {
      parameter: 'NORMAL ATTITUDE',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'REVERSIONARY ATTITUDE',
      statuses: [false, false],
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentythreeattitudeheading/ahrs1status2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342301'} right={['Select fwd to continue']} />}>
      <DataHeader left={'ahrs mode status '} right={'1/4'} />
      <Legend title="inactive" title2="active" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default Ahrs1Status1;
