import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const AirDataStatus4 = () => {
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
      parameter: 'MFP HTR PRI POWER AVAIL',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'MFP HTR SEC POWER AVAIL',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'TAT HTR POWER AVAIL',
      statuses: ['NA', true],
      alignCenter: true,
    },
    {
      parameter: 'SIDE SLP COMP AVAIL',
      statuses: [true, true],
      alignCenter: true,
    },
  ];

  const data2 = [
    {
      parameter: 'DEF SSEC TABLE ACTV',
      statuses: [true, true],
      alignRight: true,
    },
    {
      parameter: 'MFP NOT BEING HEATED',
      statuses: [false, false],
      alignRight: true,
    },
    {
      parameter: 'TAT NOT BEING HEATED',
      statuses: ['N/A', false],
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
      href: '/systemdiagnostics/thirtyfournavigation/twelveairdatasystem/airdatastatus5',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'341203'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'ads status '} right={'4/7'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder thirdHeaders={thirdHeaders} />
      <Legend title="inactive" title2="active" hasMarginTop />
      <DynamicTable data={data2} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder thirdHeaders={thirdHeaders} />
    </DefaultLayout>
  );
};

export default AirDataStatus4;
