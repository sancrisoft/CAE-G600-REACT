import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const IrsStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IRU1', customSpan: 1, hasBorderBottom: false },
    { title: 'IRU2', customSpan: 1, hasBorderBottom: false },
    { title: 'IRU3A', customSpan: 1, hasBorderBottom: false },
    { title: 'IRU3B', customSpan: 1, hasBorderBottom: false },
  ];
  const secHedaers = [{ title: 'IOGM1' }, { title: 'IOGM3' }, { title: 'IOGM1' }, { title: 'IOGM4' }];

  const data = [
    {
      parameter: 'ADC - IRU PLT',
      statuses: [true, true, true, true],
      noData: true,
      alignRight: true,
    },
    {
      parameter: 'PARITY',
      statuses: [true, true, false, false],
      noData: true,
      alignRight: true,
    },
    {
      parameter: 'SDI1',
      statuses: [true, false, false, false],
      noData: true,
      alignRight: true,
    },
    {
      parameter: 'SDI2',
      statuses: [false, true, false, false],
      noData: true,
      alignRight: true,
    },
    {
      parameter: 'AUTO REALIGN',
      statuses: [true, true, true, true],
      noData: true,
      alignRight: true,
    },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/fortytwoinertialreferencesystem1/irsstatus2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344201'} right={['Select fwd to continue']} />}>
      <DataHeader left={'irs status'} right={'1/3'} />
      <Legend title="inactive" title2="active" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secHedaers} hasHeightHeader={false} />
    </DefaultLayout>
  );
};

export default IrsStatus1;
