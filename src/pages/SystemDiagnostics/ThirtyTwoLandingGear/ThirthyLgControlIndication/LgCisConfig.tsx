import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTableTwo';
import Text from '../../../../components/Text';

const LgCisConfig = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'CONFIG' }];
  const data = [
    { parameter: 'CONTROL LANE 1 CONFIG - IOGM 1', status1: 'G600' },
    { parameter: 'CONTROL LANE 2 CONFIG - IOGM 4', status1: 'G600' },
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
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323011'} right={['Select done to continue']} />}>
      <DataHeader left={'LGCIS configuration'} right={'1/1'} />
      <Text text="LGCIS configuration" style={'header'} marginTop aqua />
      <DataTable data={data} mainHeaders={tableHeader} leftAlign headerLeftAlign reducedHeaderStatus1 />
    </DefaultLayout>
  );
};

export default LgCisConfig;
