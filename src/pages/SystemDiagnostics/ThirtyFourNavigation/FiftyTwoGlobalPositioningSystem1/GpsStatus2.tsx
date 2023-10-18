import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import Legend from '../../../../components/Legend';
import DynamicTable from '../../../../components/DynamicTable';

const GpsStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'GPS1 ', alignLeft: true }, { title: 'IOGM2' }];

  const data = [
    {
      parameter: 'GPS SENSOR MODE',
      statuses: ['ACQUISITION MODE'],
    },
    {
      parameter: 'SATELLITE TRACKED',
      statuses: ['0'],
      alignRight: true,
    },
    {
      parameter: 'SATELLITE VISIBLE',
      statuses: ['1'],
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'345202'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'gps status'} right={'2/2'} />
      <Legend title="no faukt" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
    </DefaultLayout>
  );
};

export default GpsStatus2;
