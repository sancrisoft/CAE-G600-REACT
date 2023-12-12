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
  const mainHeaders2 = [{ title: 'GPS2 ', alignLeft: true }, { title: 'IOGM3' }];

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

  const data2 = [
    {
      parameter: 'GPS SENSOR MODE',
      statuses: ['ACQUISITION MODE'],
    },
    {
      parameter: 'SATELLITE TRACKED',
      statuses: ['1'],
      alignRight: true,
    },
    {
      parameter: 'SATELLITE VISIBLE',
      statuses: ['0'],
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'345202'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'gps status'} right={'2/2'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders2}  hasMarginTop/>

    </DefaultLayout>
  );
};

export default GpsStatus2;
