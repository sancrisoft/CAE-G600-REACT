import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const LeftOperationalIndication2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'LCF COUNT 12', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 13', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 14', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 15', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 16', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 17', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 18', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 19', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 20', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication1',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication3',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771004'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine operational indication'} right={'2/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftOperationalIndication2;
