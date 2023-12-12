import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const Page = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'PARAMETERS', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const mainHeaders2 = [
    { title: 'PARAMETER', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'INPUT FROM WX RADAR-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM AUX-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM TCAS-RDCI3',
      statuses: [true, true],
    },
    {
      parameter: 'INPUT FROM TSC-RDCI3',
      statuses: [true, true],
    },
  ];

  const data2 = [
    {
      parameter: 'INPUT FROM EVS-RDCI2',
      statuses: [false, false],
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342605'} right={['select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'hud  status '} right={'5/5'} />
      <Legend title="active" title2="inactive" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <Legend title="active" title2="inactive" hasMarginTop />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} />
    </DefaultLayout>
  );
};

export default Page;
