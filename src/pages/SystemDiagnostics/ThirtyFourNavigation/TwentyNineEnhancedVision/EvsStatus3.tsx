import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const EvsStatus3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'FAULT', alignLeft: true },
    { title: 'IOGM4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'EVS VIDEO FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'EVS TEMPERATURE FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: '28 VDC HEATER POWER FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'WINDOW HEATER FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'NUC FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'DCN COMMUNICATION FAULT',
      statuses: [true],
      alignRight: true,
    },
    {
      parameter: 'CONFIGURATION STRAP FAULT',
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
      href: '/systemdiagnostics/thirtyfournavigation/twentynineenhancedvision/evsstatus4',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342603'} right={['select prev to go back', 'Select fwd to continue']} />}>
      <DataHeader left={'evs  status '} right={'3/4'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default EvsStatus3;
