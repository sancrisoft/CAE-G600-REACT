import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const Egpvm1ApmRaasConfigOpt1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 1 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 1', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'SMART RUNWAY ENABLE',
      statuses: [true],
    },
    {
      parameter: 'SMART LANDING ENABLE',
      statuses: [true],
    },
    {
      parameter: 'APPROACHING RUNWAY IN AIR ADVISORY',
      statuses: [true],
    },
    {
      parameter: 'APPROACHING RUNWAY ON GND ADVISORY',
      statuses: [true],
    },
    {
      parameter: 'ON RUNWAY ON GROUND ADVISORY',
      statuses: [true],
    },
    {
      parameter: 'EUNWAY END ADVISORY',
      statuses: [true],
    },
    {
      parameter: 'TAXIWAY LANDING',
      statuses: [false],
    },
  ];
  const data2 = [
    {
      parameter: 'DISTANCE UNITS',
      statuses: ['FEET'],
    },
    {
      parameter: 'VOICE GENDER',
      statuses: ['MALE VOICE'],
    },
    {
      parameter: 'GPS ANTENNA LOCATION',
      statuses: ['50 FT'],
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344601'} right={['Select fwd to continue']} />}>
      <DataHeader left={'eg pwm apm raas config options'} right={'1/20'} />
      <Legend title="enabled" title2="disabled" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders} hasMarginTop />
    </DefaultLayout>
  );
};

export default Egpvm1ApmRaasConfigOpt1;
