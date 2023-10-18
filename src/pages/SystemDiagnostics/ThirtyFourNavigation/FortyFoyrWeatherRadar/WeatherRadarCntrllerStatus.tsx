import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const WeatherRadarCntrllerStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'WX DISPLAY DATA PATHS', alignLeft: true },
    { title: 'STATUS', customSpan: 1, alignLeft: true },
  ];
  const mainHeaders2 = [
    { title: 'WX MAINTENANCE DATA PATHS', alignLeft: true },
    { title: 'STATUS', customSpan: 1, alignLeft: true },
  ];

  const data = [
    {
      parameter: 'AGM1 MODULE (MAU1, SLOT5)',
      statuses: ['OPERATIONAL'],
      alignRight: true,
    },
    {
      parameter: 'AGM2 MODULE (MAU1, SLOT10)',
      statuses: ['OPERATIONAL'],
      alignRight: true,
    },
    {
      parameter: 'AGM3 MODULE (MAU2, SLOT3)',
      statuses: ['OPERATIONAL'],
      alignRight: true,
    },
    {
      parameter: 'AGM4 MODULE (MAU2, SLOT8)',
      statuses: ['OPERATIONAL'],
      alignRight: true,
    },
  ];
  const data2 = [
    {
      parameter: 'IOGM4 STATUS',
      statuses: ['OPERATIONAL'],
    },
    {
      parameter: 'NIC4 STATUS',
      statuses: ['OPERATIONAL'],
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'344001'} right={['Select done to continue']} />}>
      <DataHeader left={'weather radar summary'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} hasMarginTop />
    </DefaultLayout>
  );
};

export default WeatherRadarCntrllerStatus;
