import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const AirDataStatus7 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'ADS3', customSpan: 1, hasBorderBottom: false },
    { title: 'ADS4', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders = [
    { title: 'RDCI5', customSpan: 1 },
    { title: 'RDCI4', customSpan: 1 },
  ];
  const thirdHeaders = [
    { title: 'IOGM2', customSpan: 1, hasBorderBottom: false },
    { title: 'IOGM3', customSpan: 1, hasBorderBottom: false },
  ];

  const data = [
    {
      parameter: 'ADC LATCHED FAIL',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'MFP HEATER FAIL',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'ADC FAIL',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'TAT SENSOR FAIL',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'TAT HEATER FAIL',
      statuses: ['NA', true],
      alignCenter: true,
    },
    {
      parameter: 'MFP HEATER CTRL FAIL',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'TAT HEATER CTR FAIL',
      statuses: ['NA', true],
      alignCenter: true,
    },
  ];

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'341207'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'ads status '} right={'7/7'} />
      <Legend title="inactive" title2="active" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder thirdHeaders={thirdHeaders} />
    </DefaultLayout>
  );
};

export default AirDataStatus7;
