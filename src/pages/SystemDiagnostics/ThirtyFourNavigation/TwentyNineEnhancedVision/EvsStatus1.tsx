import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const EvsStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'IOGM4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'EVS READY',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'VIDEO VALID',
      statuses: [true],
      alignRight: true,
    },
  ];

  const data2 = [
    {
      parameter: 'NUC CORRECTION IN PROGRESS',
      statuses: [false],
      alignRight: true,
    },
    {
      parameter: 'IBIT IN PTRGRESS',
      statuses: [true],
      alignRight: true,
    },
  ];

  const data3 = [
    {
      parameter: 'EVS MODE',
      statuses: ['OPERATION'],
    },
    {
      parameter: 'EVS STATE',
      statuses: ['ACTIVE'],
    },
    {
      parameter: 'WINDOW HEATER MODE',
      statuses: ['OFF'],
    },
    {
      parameter: 'WINDOW HEATER STATE',
      statuses: ['HEATER OFF'],
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
      href: '/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus2',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342601'} right={['Select fwd to continue']} />}>
      <DataHeader left={'evs  status '} right={'1/4'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <Legend title="active" title2="inactive" hasMarginTop />
      <DynamicTable data={data2} mainHeaders={mainHeaders} />
      <DynamicTable data={data3} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default EvsStatus1;
