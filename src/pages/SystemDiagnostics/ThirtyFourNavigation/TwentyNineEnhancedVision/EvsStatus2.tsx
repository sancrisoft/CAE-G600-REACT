import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const EvsStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'IOGM4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'COMPUTER BIT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'SENSOR BIT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'WINDOW HEATER BIT',
      statuses: [true],
      alignRight: true,
    },
  ];

  const data2 = [
    {
      parameter: 'EVS OVERTEMP',
      statuses: [true],
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
      href: '/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus3',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342602'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'evs  status '} right={'2/4'} />
      <Legend title="pass" title2="fail" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <Legend title="pass" title2="fail" hasMarginTop />
      <DynamicTable data={data2} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default EvsStatus2;
