import { useNavigate } from 'react-router-dom';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DefaultLayout from '../../../../components/Layout';
import { NavBarButtonType } from '../../../../components/NavBar';
import DynamicTable from '../../../../components/DynamicTable';

const VibrationCounters = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: '' }, { title: 'LEFT ENGINE' }, { title: 'RIGHT ENGINE' }];

  const data = [
    { parameter: 'ENG COUNTER', statuses: ['0', '0'], customSpan: 2 },
    { parameter: 'EBU 1 COUNTER', statuses: ['0', '0'], customSpan: 2 },
    { parameter: 'EBU 2 COUNTER', statuses: ['0', '0'], customSpan: 2 },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'73110'} right={['']} />}>
      <DataHeader left={'evm: vibration counters'} right={'1/1'} />
      <DynamicTable data={data} mainHeaders={tableHeader} hasMarginTop />
    </DefaultLayout>
  );
};

export default VibrationCounters;
