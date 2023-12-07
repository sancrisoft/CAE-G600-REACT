import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Egpvm1ApmRaasConfigOpt2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 1 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 1', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'APPR SHORT RUNWAY LENGTH',
      statuses: ['4500 FT'],
      alignCenter: true,
    },
    {
      parameter: 'CAUT SHORT RUNWAY LENGTH IN AIR',
      statuses: ['0'],
      alignCenter: true,
    },
    {
      parameter: 'ON GND SHORT RUNWAY LENGTH',
      statuses: ['3500 ft'],
      alignCenter: true,
    },
    {
      parameter: 'CAUT SHORT RUNWAY LENGTH ON GND',
      statuses: ['0'],
      alignCenter: true,
    },
    {
      parameter: 'DIST REMAINING LANDING ADVISORY',
      statuses: ['50'],
      alignCenter: true,
    },
    {
      parameter: 'DIST REMAINING LND GNDSPD THRS',
      statuses: ['40'],
      alignCenter: true,
    },
    {
      parameter: 'DISTANCE REMAINING RTO ADVISORY',
      statuses: ['50'],
      alignCenter: true,
    },
    {
      parameter: 'DISTANCE REMAINING GND SPD LMT',
      statuses: ['40'],
      alignCenter: true,
    },
  ];
  const data2 = [
    {
      parameter: 'INITIAL HOLDING TIME',
      statuses: ['90 SECONDS'],
    },
    {
      parameter: 'REPEAT HOLDING TIME GENDER',
      statuses: ['120 SECONDS'],
    },
    {
      parameter: 'ON TAXWAY',
      statuses: ['ENABLE ADVISORY'],
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
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt3',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344601'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'eg pwm apm raas config options'} right={'2/20'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders} hasMarginTop />
    </DefaultLayout>
  );
};

export default Egpvm1ApmRaasConfigOpt2;
