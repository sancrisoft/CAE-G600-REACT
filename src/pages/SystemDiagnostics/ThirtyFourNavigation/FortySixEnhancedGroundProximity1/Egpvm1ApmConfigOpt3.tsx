import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const Egpvm1ApmConfigOpt3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'APM 2 EGPWM OPTIONS', alignLeft: true },
    { title: 'NIC 4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'alt gs cancel',
      statuses: [true],
    },
    {
      parameter: 'alt mode 4b',
      statuses: [true],
    },
    {
      parameter: 'bank angle',
      statuses: [true],
    },
    {
      parameter: 'windshear',
      statuses: [true],
    },
    {
      parameter: 'ws caution voice',
      statuses: [true],
    },
  ];
  const data2 = [
    {
      parameter: 'egpwm landing flap',
      statuses: ['30 deg'],
      alignRight: true,
    },
    {
      parameter: 'ws flap angle',
      statuses: ['30 deg'],
      alignRight: true,
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
      text: 'prev',
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
      href: '/systemdiagnostics/thirtyfournavigation/fortysixenhancedgroundproximity1/egpvm1apmconfigopt4',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344603'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'egpwm apm config options'} right={'3/8'} />
      <Legend title="enabled" title2="disabled" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders} hasMarginTop />
    </DefaultLayout>
  );
};

export default Egpvm1ApmConfigOpt3;
