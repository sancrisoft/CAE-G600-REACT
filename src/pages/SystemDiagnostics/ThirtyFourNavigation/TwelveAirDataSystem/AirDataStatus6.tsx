import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const AirDataStatus6 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'ADS1', customSpan: 1, hasBorderBottom: false },
    { title: 'ADS2', customSpan: 1, hasBorderBottom: false },
  ];
  const secondaryHeaders = [
    { title: 'RDCI3', customSpan: 1 },
    { title: 'RDCI2', customSpan: 1 },
  ];
  const thirdHeaders = [
    { title: 'IOGM1', customSpan: 1, hasBorderBottom: false },
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
      statuses: [true, 'NA'],
      alignCenter: true,
    },
    {
      parameter: 'MFP HEATER CTRL FAIL',
      statuses: [true, true],
      alignCenter: true,
    },
    {
      parameter: 'TAT HEATER CTR FAIL',
      statuses: [true, 'NA'],
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus7',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'341206'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'ads status '} right={'6/7'} />
      <Legend title="inactive" title2="active" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder thirdHeaders={thirdHeaders} />
    </DefaultLayout>
  );
};

export default AirDataStatus6;
