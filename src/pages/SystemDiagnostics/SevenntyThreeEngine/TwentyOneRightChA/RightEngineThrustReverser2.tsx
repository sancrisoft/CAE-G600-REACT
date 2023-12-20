import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightEngineThrustReverser2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'T/R CMD SWITCH1', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R CMD SWITCH2', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R LOCKED', statuses: [true, true], customSpan: 2 },
    { parameter: 'T/R IN TRANSIT', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R DEPLOYED', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'T/R PRESSURIZED', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R ICV CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R DCV DEPLOY CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R UNLATCH CMD', statuses: [false, false], customSpan: 2 },
    { parameter: 'T/R DCV STOW CMD', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'A/C PWR AVLBLE FOR LTCH', statuses: [false, false], customSpan: 2 },
    { parameter: 'A/C PWR AVLBLE FOR DPLOY', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser1',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginethrustreverser3',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'703005'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine thrust reverser status'} right={'2/3'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightEngineThrustReverser2;
