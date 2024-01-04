import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const LeftOperationalIndication1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'ENGINE SERIAL #', statuses: ['0 2 1 0', '0 2 1 0'], customSpan: 2, alignCenter: true },
    { parameter: '', statuses: ['', ''], customSpan: 2, alignCenter: true },
    { parameter: '', statuses: ['', ''], customSpan: 2, alignCenter: true },
    { parameter: '', statuses: ['', ''], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 1', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 2', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 3', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 4', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 5', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 6', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 7', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 8', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 9', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 10', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
    { parameter: 'LCF COUNT 11', statuses: ['0', '0'], customSpan: 2, alignCenter: true },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771003'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine operational indication'} right={'1/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftOperationalIndication1;
