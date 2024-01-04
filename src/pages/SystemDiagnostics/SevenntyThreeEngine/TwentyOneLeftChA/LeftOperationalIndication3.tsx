import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const LeftOperationalIndication3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'ENGINE FLIGHT TIME', statuses: ['0 HRS', '0 HRS'], customSpan: 2, alignCenter: true },
    { parameter: 'ENGINE FLIGHT TIME', statuses: ['0 SEC', '0 SEC'], customSpan: 2, alignCenter: true },
    { parameter: 'ENGINE RUN TIME', statuses: ['0 HRS', '0 HRS'], customSpan: 2, alignCenter: true },
    { parameter: 'ENGINE RUN TIME', statuses: ['0 SEC', '0 SEC'], customSpan: 2, alignCenter: true },
    { parameter: 'ENGINE STARTS', statuses: ['0 CNT', '0 CNT'], customSpan: 2, alignCenter: true },
    { parameter: 'ENGINE FLIGHT LEGS', statuses: ['0 CNT', '0 CNT'], customSpan: 2, alignCenter: true },
    { parameter: 'FADEC ABORT START', statuses: ['0 CNT', '0 CNT'], customSpan: 2, alignCenter: true },
    { parameter: 'T/R CYCLES', statuses: ['0 CNT', '0 CNT'], customSpan: 2, alignCenter: true },
    { parameter: 'TIME T/R MAX REV', statuses: ['0 MIN', '0 MIN'], customSpan: 2, alignCenter: true },
    { parameter: 'TIME IN MCT EXCURSION', statuses: ['0 HRS', '0 HRS'], customSpan: 2, alignCenter: true },
    { parameter: 'TLD STD TIME LEFT', statuses: ['0 HRS', '0 HRS'], customSpan: 2, alignCenter: true },
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
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication2',
      disabled: false,
      position: 4,
    },
    {
      text: 'fwd',
      href: '/systemdiagnostics/seventythreengine/twnetyoneleftcha/leftoperationalindication4',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771005'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine operational indication'} right={'3/4'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftOperationalIndication3;
