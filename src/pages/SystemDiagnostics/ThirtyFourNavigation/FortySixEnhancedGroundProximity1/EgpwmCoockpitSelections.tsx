import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import Legend from '../../../../components/Legend';
import DynamicTable from '../../../../components/DynamicTable';

const EgpwmCoockpitSelections = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS - EGPWS', alignLeft: true },
    { title: 'EGPWM 1', customSpan: 1 },
  ];

  const mainHeaders2 = [
    { title: 'PARAMETERS - MAU', alignLeft: true },
    { title: 'IOGM3 1', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'AUDIO INHIBIT',
      statuses: [false],
    },
    {
      parameter: 'CALLOUTS ENABLED',
      statuses: [true],
    },
    {
      parameter: 'TERRAN INHIBIT',
      statuses: [false],
    },
    {
      parameter: 'FLAP OVERRIDE',
      statuses: [false],
    },
    {
      parameter: 'RAAS INHIBIT',
      statuses: [false],
    },
  ];
  const data2 = [
    {
      parameter: 'BELOW GS INHIBIT',
      statuses: [false],
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344617'} right={['Select done to continue']} />}>
      <DataHeader left={'egpwm 1 cockpit selections'} right={'1/1'} />
      <Legend title="active" title2="inactive" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <Legend title="active" title2="inactive" hasMarginTop />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} />
    </DefaultLayout>
  );
};

export default EgpwmCoockpitSelections;
