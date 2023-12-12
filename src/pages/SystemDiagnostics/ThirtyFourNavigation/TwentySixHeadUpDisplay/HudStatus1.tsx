import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const HudStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'HC FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'HUD CR SYM MON',
      statuses: [true, true],
    },
    {
      parameter: 'HC SEU FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'HC PROG PIN ERROR',
      statuses: [true, true],
    },
    {
      parameter: 'OHU FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'OHU FAN FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'OHU INACTIVE',
      statuses: [true, true],
    },
    {
      parameter: 'OHU LED STRG FAIL',
      statuses: [true, true],
    },
    {
      parameter: 'OHU LUMINANCE MON',
      statuses: [true, true],
    },
    {
      parameter: 'CMB MISALIGNMENT',
      statuses: [true, true],
    },
    {
      parameter: 'CMB DIS CON FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'HPM FAULT',
      statuses: [true, true],
    },
    {
      parameter: 'EVS ACTIVITY FAULT',
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
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342601'} right={['Select FWD to continue']} />}>
      <DataHeader left={'hud  status '} right={'1/5'} />
      <Legend title="not set" title2="set" />
      <DynamicTable data={data} mainHeaders={mainHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default HudStatus1;
