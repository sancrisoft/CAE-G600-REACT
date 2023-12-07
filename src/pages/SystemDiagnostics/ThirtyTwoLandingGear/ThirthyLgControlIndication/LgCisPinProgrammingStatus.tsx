import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const LgCisPinProgrammingStatus = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'DEFINITION TABLE' }, { title: 'G500' }, { title: 'G600' }];
  const data1 = [
    { parameter: 'PIN 1', status1: 'false', status2: 'true' },
    { parameter: 'PIN 2', status1: 'true', status2: 'true' },
    { parameter: 'PIN 3', status1: 'false', status2: 'false' },
    { parameter: 'PIN 4', status1: 'true', status2: 'false' },
  ];

  const tableHeader2 = [{ title: 'PIN PROGRAMMING STATUS' }, { title: 'CL1' }, { title: 'CL2' }];
  const data2 = [
    { parameter: 'PIN 1', status1: true, status2: true },
    { parameter: 'PIN 2', status1: true, status2: true },
    { parameter: 'PIN 3', status1: false, status2: false },
    { parameter: 'PIN 4', status1: false, status2: false },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323017'} right={['Select done to continue']} />}>
      <DataHeader left={'LGCIS pin programming status'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} reducedHeaderTitle/>
      <StatusTable data={data2} tableHeader={tableHeader2} reducedHeaderTitle/>
    </DefaultLayout>
  );
};

export default LgCisPinProgrammingStatus;
