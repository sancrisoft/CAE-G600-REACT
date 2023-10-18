import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Egpvm1ApmConfigOpt4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 2 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'egpwm ac io type',
      statuses: ['type 1'],
    },
    {
      parameter: 'bank angle type',
      statuses: ['business jet curve'],
    },
    {
      parameter: 'egpwm audio menu',
      statuses: ['basic menu'],
    },
    {
      parameter: '2500 ft callout',
      statuses: ['one thousand dev'],
    },
    {
      parameter: '1000 ft callout',
      statuses: ['no callout'],
    },
    {
      parameter: '500 ft callout',
      statuses: ['five hundred'],
    },
    {
      parameter: 'appr min callout',
      statuses: ['approaching minimums'],
    },
    {
      parameter: 'minimums callout',
      statuses: ['minimums'],
    },
    {
      parameter: 'terr disp type',
      statuses: ['epic tsf configuration'],
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
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt5',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344604'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'egpwm apm config options'} right={'4/8'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default Egpvm1ApmConfigOpt4;
