import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import StatusTable from '../../../../components/StatusTable';

const LeftEngineConfigStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'A/C MODEL IDENT', statuses: ['57', '57'], customSpan: 2 },
    { parameter: 'ENGINE S/N', statuses: ['0 2 1 0', '0 2 1 0'], customSpan: 2 },
    { parameter: 'ENGINE POSITION', statuses: ['LEFT', 'LEFT'], customSpan: 2 },
    { parameter: 'FADEC S/N', statuses: ['XXXXXXXXXXXX', 'XXXXXXXXXXXX'], customSpan: 2 },
    { parameter: 'FADEC HW P/N', statuses: ['XXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXX'], customSpan: 2 },
    { parameter: 'FADEC SW P/N', statuses: ['0 5 4 2 4', '0 5 4 2 4'], customSpan: 2 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'770001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine configuration status'} right={'1/1'} />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineConfigStatus;
