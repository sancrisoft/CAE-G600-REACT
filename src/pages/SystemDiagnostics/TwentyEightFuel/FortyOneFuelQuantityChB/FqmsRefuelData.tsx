import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';
import Legend from '../../../../components/Legend';

const FqmsRefuelData = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER' }, { title: 'CH A' }, { title: 'CH B' }];
  const data1 = [
    { parameter: 'REFUEL SYS FAL', status1: false, status2: false },
    { parameter: 'REFUEL ABORT', status1: false, status2: false },
    { parameter: 'REFUEL COMPLETE', status1: false, status2: false },
    { parameter: 'REFUEL IN PROGRESS', status1: false, status2: false },
    { parameter: 'REFUEL OFF', status1: true, status2: true },
    { parameter: 'REFUEL GSCP CMND', status1: false, status2: false },
    { parameter: 'REFUEL TSC CMND', status1: false, status2: false },
    { parameter: 'L TANK VOL OVER', status1: false, status2: false },
    { parameter: 'R TANK VOL OVER', status1: false, status2: false },
    { parameter: 'L REFUEL VLV OPN', status1: false, status2: false },
    { parameter: 'L REFUEL VLV CLSD', status1: true, status2: true },
    { parameter: 'R REFUEL VLV OPN', status1: false, status2: false },
    { parameter: 'R REFUEL VLV CLSD', status1: true, status2: true },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284115'} right={['Select done to continue']} />}>
      <DataHeader left={'FQMS refuel data'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
    </DefaultLayout>
  );
};

export default FqmsRefuelData;
