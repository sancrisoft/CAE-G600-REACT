import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsCtConfig = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER' }, { title: 'CH A' }, { title: 'CH B' }];
  const data1 = [{ parameter: 'CONFIG TABLE', status1: '0.45', status2: '0.45' }];

  const tableHeader2 = [{ title: 'AIRCRAFT CONFIG' }, { title: 'CH A' }, { title: 'CH B' }];
  const data2 = [
    { parameter: 'GVII-G500', status1: false, status2: false },
    { parameter: 'GVII-G600', status1: true, status2: true },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284114'} right={['Select done to continue']} />}>
      <DataHeader left={'FQMS CT and A/C config'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  );
};

export default FqmsCtConfig;
