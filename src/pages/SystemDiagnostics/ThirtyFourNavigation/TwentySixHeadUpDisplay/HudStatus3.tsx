import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const HudStatus3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'INPUT FROM IRU 1',
      statuses: [false, false],
    },
    {
      parameter: 'INPUT FROM IRU 2',
      statuses: [false, false],
    },
    {
      parameter: 'INPUT FROM IRU 3A',
      statuses: [false, false],
    },
    {
      parameter: 'INPUT FROM IRU 3B',
      statuses: [false, false],
    },
    {
      parameter: 'INPUT FROM RAD ALT1',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM RAD ALT 2',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM RDC 12-1',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM RDC 12-2',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM RDC 13-1',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM RDC 13-2',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM ADC 1',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM ADC 2',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM ADC 3A',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM ADC 3B',
      statuses: [true, true],
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
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus4',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342603'} right={['select prev to go back', 'Select FWD to continue']} />}>
      <DataHeader left={'hud  status '} right={'3/5'} />
      <Legend title="active" title2="inactive" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default HudStatus3;
