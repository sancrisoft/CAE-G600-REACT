import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';
import Text from '../../../../components/Text';

const HudStatus2 = () => {
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
      parameter: 'HC hw sw incomp',
      statuses: [true, true],
    },
    {
      parameter: 'hc sw incomp',
      statuses: [true, true],
    },
  ];

  const data2 = [
    {
      parameter: 'hud tray fan current in %',
      statuses: ['30.00', '30.00'],
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => {
        navigate(-1);
      },
    },
    {
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/thirtyfournavigation/twentysixheadupdisplay/hudstatus3',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'342602'} right={['select prev to go back', 'Select FWD to continue']} />}>
      <DataHeader left={'hud  status '} right={'2/5'} />
      <Legend title="not set" title2="set" />
      <DynamicTable data={data} mainHeaders={mainHeaders} />
      <DynamicTable data={data2} mainHeaders={mainHeaders2} hasMarginTop />
      <Text text={'note: the hud fan current display is in %'} />
      <Text text={'the hud nominal fan current is from '} indentSize="m" />
      <Text text={'10% to 75%'} indentSize="s" />
    </DefaultLayout>
  );
};

export default HudStatus2;
