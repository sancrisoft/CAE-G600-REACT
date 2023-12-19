import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const RightOperationalIndication4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'N1 TRIM', statuses: ['0.78 %', '0.78 %'], customSpan: 2, alignCenter: true },
    { parameter: 'TGT TRIM', statuses: ['24.2 DEGC', '24.2 DEGC'], customSpan: 2, alignCenter: true },
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
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightoperationalindication3',
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771010'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine operational indication'} right={'4/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightOperationalIndication4;
