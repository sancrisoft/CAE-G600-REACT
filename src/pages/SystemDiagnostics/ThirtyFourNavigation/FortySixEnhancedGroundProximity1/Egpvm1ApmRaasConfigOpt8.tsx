import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import CustomTable from '../../../../components/CustomTable';

const Egpvm1ApmRaasConfigOpt8 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 2 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'long landing distance 1',
      statuses: ['0 FT'],
      alignCenter: true,
    },
    {
      parameter: 'LONG LANDING DISTANCE 2',
      statuses: ['0'],
      alignCenter: true,
    },
    {
      parameter: 'LONG LANDING DIST REMAINING 1',
      statuses: ['-3000 ft'],
      alignCenter: true,
    },
    {
      parameter: 'LONG LANDING DIST REMAINING 2',
      statuses: ['67'],
      alignCenter: true,
    },

  ];
  const data2 = [
    {
      parameter: 'TAKEOFF FLAPS MONITOR',
      statuses: ['DISABLE'],
      alignCenter: true,
    },
    {
      parameter: 'TAKEOFF FLAPS ANGLE MIN',
      statuses: ['5'],
      alignCenter: true,
    },
    {
      parameter: 'TAKEOFF FLAPS ANGLE MAX',
      statuses: ['25'],
      alignCenter: true,
    },

  ];

  const data3 = [
    {
      row1: 'LONG LANDING VOICE SELECT',
      row2: 'LONG LANDING IN RAAS GENDER',
    },
  ]

  const data4 = [
    {
      row1: 'TAKEOFF FLAPS VOICE SELECT',
      row2: 'RAAS VOICE VENDER',
    },
  ]

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
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt9',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344609'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'eg pwm apm raas config options'} right={'8/20'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <CustomTable data={data3} customStyle />
      <DynamicTable data={data2} mainHeaders={mainHeaders} hasMarginTop />
      <CustomTable data={data4} customStyle />
    </DefaultLayout>
  );
};

export default Egpvm1ApmRaasConfigOpt8;
