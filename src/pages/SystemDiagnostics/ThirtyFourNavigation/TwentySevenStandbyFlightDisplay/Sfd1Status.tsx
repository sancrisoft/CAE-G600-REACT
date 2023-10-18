import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const Sfd1Status = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'TEMPERATURE', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const mainHeaders2 = [
    { title: 'VOLTAGE', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'INTERNAL',
      statuses: ['44 DEG C', '44 DEG C'],
      alignRight: true,
    },
    {
      parameter: 'BEZEL',
      statuses: ['37 DEG C', '37 DEG C'],
      alignRight: true,
    },
  ];

  const data2 = [
    {
      parameter: 'primary input ',
      statuses: ['26.9 VDC', '27.0 VDC'],
      alignRight: true,
    },
    {
      parameter: 'MAIN SECONDARY',
      statuses: ['5.1 VDC', '5.1 VDC'],
      alignRight: true,
    },
    {
      parameter: 'OUTPUT SUPPLY ',
      statuses: ['12.17 VDC', '12.17 VDC'],
      alignRight: true,
    },
    {
      parameter: 'MAIN LOGIC',
      statuses: ['3.34 VDC', '3.34 VDC'],
      alignRight: true,
    },
    {
      parameter: 'PROCESSOR I/O ',
      statuses: ['1.80 VDC', '1.80 VDC'],
      alignRight: true,
    },
    {
      parameter: 'FPGA I/O ',
      statuses: ['1.78 VDC', '1.78 VDC'],
      alignRight: true,
    },
    {
      parameter: 'FPGA CORE ',
      statuses: ['1.20 VDC', '1.20 VDC'],
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342701'} right={['Select done to continue']} />}>
      <DataHeader left={'sfd1  status '} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} customWidth />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} hasMarginTop customWidth />
    </DefaultLayout>
  );
};

export default Sfd1Status;
