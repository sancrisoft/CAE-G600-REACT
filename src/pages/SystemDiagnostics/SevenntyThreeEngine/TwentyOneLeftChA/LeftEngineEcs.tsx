import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const LeftEngineEcs = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'N2', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'BURNER PRESSURE', statuses: ['15 PSI', '15 PSI'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'LEFT ECS BLEED COMMAND', statuses: [true, true], customSpan: 2 },
    { parameter: 'right ecs bleed command', statuses: [true, true], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'LEFT WING A/I BLEED CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT WING A/I BLEED CMD', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'LEFT MPRSOV COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: 'RIGHT MPRSOV COMMAND', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'ISOLATION VALVE COMMAND', statuses: [false, false], customSpan: 2 },
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
      text: 'prev',
      href: '/systemdiagnostics',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'302001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine ECS'} right={'1/1'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineEcs;
