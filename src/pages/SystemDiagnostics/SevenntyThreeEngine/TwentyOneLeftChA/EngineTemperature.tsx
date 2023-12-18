import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const EngineTemperature = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'LEFT ENGINE', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'NACELLE AIR TEMPERATURE', statuses: ['XXX DEGC', 'XXX DEGC'], customSpan: 2 },
    { parameter: 'EEC INTERNAL TEMPERATURE', statuses: ['43 DEGC', '42 DEGC'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'FIRE WIRE (MILLIVOLTS)', statuses: ['11983', '11983'], customSpan: 2 },
    { parameter: 'FIRE WIRE (OHMS)', statuses: ['32027', '31916'], customSpan: 2 },
  ];
  const tableHeader1 = [{ title: 'RIGHT ENGINE', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data1 = [
    { parameter: 'NACELLE AIR TEMPERATURE', statuses: ['XXX DEGC', 'XXX DEGC'], customSpan: 2 },
    { parameter: 'EEC INTERNAL TEMPERATURE', statuses: ['43 DEGC', '42 DEGC'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'FIRE WIRE (MILLIVOLTS)', statuses: ['11983', '11983'], customSpan: 2 },
    { parameter: 'FIRE WIRE (OHMS)', statuses: ['31930', '32020'], customSpan: 2 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'734001'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'engine temperature'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={tableHeader} hasMarginTop />
      <DynamicTable data={data1} mainHeaders={tableHeader1} />
    </DefaultLayout>
  );
};

export default EngineTemperature;
