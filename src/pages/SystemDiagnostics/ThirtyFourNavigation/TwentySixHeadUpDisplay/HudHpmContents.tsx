import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';

const HudHpmContents = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'EVS IMAGE DELTA VALUES', alignLeft: true }, { title: 'HPM' }];
  const mainHeaders2 = [{ title: 'BORESIGHT OFFSET VALUES', alignLeft: true }, { title: 'HPM' }];

  const data = [
    {
      parameter: 'EVS IMAGE CENTER X',
      statuses: ['-0.200000'],
      alignCenter: true,
    },
    {
      parameter: 'EVS IMAGE CENTER Y',
      statuses: ['-0.250000'],
      alignCenter: true,
    },
    {
      parameter: 'EVS IMAGE CORNER X',
      statuses: ['17.000000'],
      alignCenter: true,
    },
    {
      parameter: 'EVS IMAGE CORNER Y',
      statuses: ['13.450000'],
      alignCenter: true,
    },
  ];

  const data2 = [
    {
      parameter: 'PITCH OFFSET',
      statuses: ['0.000000'],
      alignCenter: true,
    },
    {
      parameter: 'YAW OFFSET',
      statuses: ['0.000000'],
      alignCenter: true,
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342606'} right={['Select done to continue']} />}>
      <DataHeader left={'hud hpm contents'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={mainHeaders} hasBorder />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} hasBorder hasMarginTop />
    </DefaultLayout>
  );
};

export default HudHpmContents;
