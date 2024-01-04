import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const RightIndicationSystem = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER', alignLeft: true }, { title: 'CH A' }, { title: 'CH b' }];

  const data = [
    { parameter: 'N1 DISPLAYED', statuses: ['0.00 %', '0.00 %'], customSpan: 2 },
    { parameter: 'N1 REFERENCE', statuses: ['22.77 %', '22.77 %'], customSpan: 2 },
    { parameter: 'N1 IDLE REFERENCE', statuses: ['22.77 %', '22.77 %'], customSpan: 2 },
    { parameter: 'N1 CRUISE RATING', statuses: ['90.11%', '90.11%'], customSpan: 2 },
    { parameter: 'N1 CLIMB RATING', statuses: ['91.23%', '91.23%'], customSpan: 2 },
    { parameter: 'N1 MCT RATING', statuses: ['93.13%', '93.13%'], customSpan: 2 },
    { parameter: 'N1 T/O RATING', statuses: ['95.50%', '95.50%'], customSpan: 2 },
    { parameter: 'N2 DISPLAYED', statuses: ['0.00 %', '0.00 %'], customSpan: 2 },
    { parameter: 'TGT', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'MOP', statuses: ['0 PSIG', '0 PSIG'], customSpan: 2 },
    { parameter: 'MOT', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
    { parameter: 'ENGINE VIBRATION N1', statuses: ['0.00 IPS', '0.00 IPS'], customSpan: 2 },
    { parameter: 'ENGINE VIBRATION N2', statuses: ['0.00 IPS', '0.00 IPS'], customSpan: 2 },
    { parameter: 'ENGINE BROADBAND VIB', statuses: ['0.05 IPS', '0.05 IPS'], customSpan: 2 },
    { parameter: 'FUEL TEMPERATURE', statuses: ['28 DEGC', '28 DEGC'], customSpan: 2 },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'771002'} right={['select prev to go back', 'select fwd to continue']} />}>
      <DataHeader left={'right engine indication system'} right={'1/1'} />
      <Legend title="false" title2="true" firstIsRed />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default RightIndicationSystem;
