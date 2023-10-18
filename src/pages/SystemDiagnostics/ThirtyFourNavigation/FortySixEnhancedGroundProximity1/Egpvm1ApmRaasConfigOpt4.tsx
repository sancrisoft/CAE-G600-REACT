import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Egpvm1ApmRaasConfigOpt4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 1 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 1', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'STABLE APPR UPPER FLAP GATE',
      statuses: ['0 FT'],
      alignCenter: true,
    },
    {
      parameter: 'STABLE APPR LOWER FLAP GATE',
      statuses: ['0'],
      alignCenter: true,
    },
    {
      parameter: 'STABLE APPR APPROACH ANGLE',
      statuses: ['DISABLE'],
      alignCenter: true,
    },
    {
      parameter: 'STABLE APPR APROACH SPEED',
      statuses: ['DISABLE'],
      alignCenter: true,
    },
    {
      parameter: 'STABLE APPR GENDER ',
      statuses: ['MALE'],
      alignCenter: true,
    },
    {
      parameter: 'STABLE APPR INHIBIT TYPE ',
      statuses: ['INHIBIT VIA RAAS INHIBIT SELECT'],
      alignCenter: true,
    },
  ];
  const data2 = [
    {
      parameter: 'MONITOR ABOVE TRANSITION ALT',
      statuses: ['ENABLE'],
      alignCenter: true,
    },
    {
      parameter: 'MONITOR BELOW TRANSITION ALT',
      statuses: ['ENABLE'],
      alignCenter: true,
    },
    {
      parameter: 'ALTIMETER MONITOR GENDER ',
      statuses: ['MALE'],
      alignCenter: true,
    },
    {
      parameter: 'ALTIMETER MONITOR INHIBIT TYPE',
      statuses: ['INHIBIT VIA RAAS INHIBIT SELECT'],
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
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmraasconfigopt5',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344609'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'eg pwm apm raas config options'} right={'4/20'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders} hasMarginTop />
    </DefaultLayout>
  );
};

export default Egpvm1ApmRaasConfigOpt4;
