import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const GpsClock2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'MAU CLOCK ', alignLeft: true },
    { title: 'CLOCK1', customSpan: 1, hasBorderBottom: false, alignLeft: true },
    { title: 'CLOCK2', customSpan: 1, hasBorderBottom: false, alignLeft: true },
  ];

  const secHeaders = [
    { title: 'NIC1', customSpan: 1 },
    { title: 'NIC4', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'HOURS',
      statuses: ['2', '2'],
      alignRight: true,
    },
    {
      parameter: 'MINUTES',
      statuses: ['17', '17'],
      alignRight: true,
    },
    {
      parameter: 'SECONDS',
      statuses: ['13', '12'],
      alignRight: true,
    },
    {
      parameter: 'YEAR',
      statuses: ['2023', '2023'],
      alignRight: true,
    },
    {
      parameter: 'MONTH',
      statuses: ['4', '4'],
      alignRight: true,
    },
    {
      parameter: 'DAY',
      statuses: ['21', '21'],
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'345204'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'gps clock status'} right={'2/2'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secHeaders} />
    </DefaultLayout>
  );
};

export default GpsClock2;
