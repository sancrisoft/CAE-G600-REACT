import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const EvsStatus4 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IOGM4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'FLIGHT TIME',
      statuses: ['394 HOURS'],
      alignRight: true,
    },
    {
      parameter: 'COMPRESSOR COOLDOWN TIME',
      statuses: ['297 SECS'],
      alignRight: true,
    },
    {
      parameter: 'DETECTOR FPA TEMP',
      statuses: ['307 DEG K'],
      alignRight: true,
    },
    {
      parameter: 'BASE COOLER TEMP',
      statuses: ['39 DEG C'],
      alignRight: true,
    },
    {
      parameter: 'INTERNAL AMBIENT TEMP',
      statuses: ['42 DEG C'],
      alignRight: true,
    },
    {
      parameter: 'EVS INTERNAL HUMIDITIY',
      statuses: ['37 %'],
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342603'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'evs  status '} right={'4/4'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} customWidth />
    </DefaultLayout>
  );
};

export default EvsStatus4;
