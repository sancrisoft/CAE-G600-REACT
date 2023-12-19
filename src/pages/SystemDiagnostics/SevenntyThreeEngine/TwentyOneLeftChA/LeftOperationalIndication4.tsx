import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const LeftOperationalIndication4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'N1 TRIM', statuses: ['1.00 %', '1.00 %'], customSpan: 2, alignCenter: true },
    { parameter: 'TGT TRIM', statuses: ['21.3 DEGC', '21.3 DEGC'], customSpan: 2, alignCenter: true },
    { parameter: '', statuses: ['', ''], customSpan: 2, alignCenter: true },
    { parameter: 'CUMLT COUNT T/O EXCD', statuses: ['0 CNT', '0 CNT'], customSpan: 2, alignCenter: true },
    { parameter: 'CUMLT COUNT T/O EXCD', statuses: ['0 SEC', '0 SEC'], customSpan: 2, alignCenter: true },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication3',
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771006'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine operational indication'} right={'4/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftOperationalIndication4;
