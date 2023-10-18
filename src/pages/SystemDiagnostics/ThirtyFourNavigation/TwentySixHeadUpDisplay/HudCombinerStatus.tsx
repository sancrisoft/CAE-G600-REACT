import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import DynamicTable from '../../../../components/DynamicTable';
import Legend from '../../../../components/Legend';

const HudCombinerStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [
    { title: 'COMBINER POSITION', alignLeft: true },
    { title: 'IOGM1', customSpan: 1 },
    { title: 'IOGM2', customSpan: 1 },
  ];

  const data = [
    {
      parameter: 'STOWED',
      statuses: [true, true],
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'343101'} right={['Select done to continue']} />}>
      <DataHeader left={'hud combiner status '} right={'1/1'} />
      <Legend title="active" title2="inactive" />
      <DynamicTable data={data} mainHeaders={mainHeaders} hasBorder />
    </DefaultLayout>
  );
};

export default HudCombinerStatus;
