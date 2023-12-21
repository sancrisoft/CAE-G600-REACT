import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const LeftEngineSystem = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CHA' }, { title: 'CHb' }];

  const data = [
    { parameter: 'N1', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'N1 REFERENCE', statuses: ['22.77%', '22.77%'], customSpan: 2 },
    { parameter: 'N2 CORRECTED', statuses: ['0.00%', '0.00%'], customSpan: 2 },
    { parameter: 'PRESSURE ALTITUDE', statuses: ['149 FT', '149 FT'], customSpan: 2 },
    { parameter: 'BUFFER  AIR TEMP', statuses: ['33 DEGC', '33 DEGC'], customSpan: 2 },
    { parameter: 'VGV POSITION CMD', statuses: ['96.1 %STK', '96.1 %STK'], customSpan: 2 },
    { parameter: 'VGV POSITION FDBK', statuses: ['98.0 %STK', '98.0 %STK'], customSpan: 2 },
    { parameter: 'VGV T/M CMD', statuses: ['0.0 MA', '0.0 MA'], customSpan: 2 },
    { parameter: 'LPC BLEED POS CMD', statuses: ['9.3 %STK', '9.3%STK'], customSpan: 2 },
    { parameter: 'LPC BLEED pos fdbk', statuses: ['255.6%STK', '255.6%STK'], customSpan: 2 },
    { parameter: 'lpc bleed t/m cmd', statuses: ['0.00 ma', '0.00 ma'], customSpan: 2 },
    { parameter: 'ACC POSITION CMD', statuses: ['0.1 %STK', '0.1 %STK'], customSpan: 2 },
    { parameter: 'ACC POSITION FDBK', statuses: ['0.0 %STK', '0.0 %STK'], customSpan: 2 },
    { parameter: 'ACC T/M CMD', statuses: ['0.0 MA', '0.0 MA'], customSpan: 2 },
    { parameter: 'HPC BOV CMD CH A', statuses: ['CMDCLOSED NOTENERGIZED'], customSpan: 3 },
    { parameter: 'HPC BOV CMD CH B', statuses: ['CMDCLOSED NOTENERGIZED'], customSpan: 3 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'752201'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'left engine air system'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default LeftEngineSystem;
