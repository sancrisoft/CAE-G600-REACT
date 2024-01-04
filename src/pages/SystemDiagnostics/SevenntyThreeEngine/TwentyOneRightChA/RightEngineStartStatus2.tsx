import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightEngineStartStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH B' }];

  const data = [
    { parameter: 'N1', statuses: ['0.00 %', '0.00 %'], customSpan: 2 },
    { parameter: 'N2', statuses: ['0.00 %', '0.00 %'], customSpan: 2 },
    { parameter: 'TGT', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'FUEL FLOW', statuses: ['0 PPH', '0 PPH'], customSpan: 2 },
    { parameter: 'MOP', statuses: ['0.0 PSIG', '0.0 PSIG'], customSpan: 2 },
    { parameter: 'MOT', statuses: ['28.0', '28.0 DEGC'], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'AUTO START ABORT', statuses: [false, false], customSpan: 2 },
    { parameter: 'NO LIGHT DURING START', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'HUNG START DETECTED', statuses: [false, false], customSpan: 2 },
    { parameter: 'STRTR DUTY CYCL EXCD', statuses: [false, false], customSpan: 2 },
    { parameter: '', statuses: ['', ''], customSpan: 2 },
    { parameter: 'TGT STRT REDLINE EXCD', statuses: [false, false], customSpan: 2 },
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
      href: '/systemdiagnostics/seventythreengine/twnetyonerightcha/rightenginestartstatus1',
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'801104'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine start status'} right={'2/2'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightEngineStartStatus2;
