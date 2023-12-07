import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const HudStatus4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'INPUT FROM APM-RDC13',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM CLOCK-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM CMC-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM DME-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM EGPWS-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM FCC-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM FG-FD/AT-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM FMS-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM GEAR DISC-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM GP-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM GPS-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM MRC-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM MWS-RDCI3',
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
      href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus5',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342604'} right={['select prev to go back', 'Select FWD to continue']} />}>
      <DataHeader left={'hud  status '} right={'4/5'} />
      <Legend title="active" title2="inactive" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default HudStatus4;
