import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightEngineThrustReverser3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH b' }];

  const data = [
    { parameter: 'T/R L UPPER LVDT LOCKED', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R L LOWER LVDT LOCKED', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R R UPPER LVDT LOCKED', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R R LOWER LVDT LOCKED', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'T/R LEFT UPPER LVDT', statuses: ['-0.18 IN', 'N/A'], customSpan: 2 },
    { parameter: 'T/R LEFT LOWER LVDT', statuses: ['N/A', '-0.19 IN'], customSpan: 2 },
    { parameter: 'T/R RIGHT UPPER LVDT', statuses: ['N/A', '-0.17 IN'], customSpan: 2 },
    { parameter: 'T/R RIGHT LOWER LVDT', statuses: ['-0.18 IN', 'N/A'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'T/R LEFT PRX SW DPLYD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R RIGHT PRX SW DPLYD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R PRESSURE (PSIA)', statuses: ['15', '15'], customSpan: 2 },
    { parameter: 'T/R PRESSURIZED', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser2',
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'703006'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine thrust reverser status'} right={'3/3'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightEngineThrustReverser3;
