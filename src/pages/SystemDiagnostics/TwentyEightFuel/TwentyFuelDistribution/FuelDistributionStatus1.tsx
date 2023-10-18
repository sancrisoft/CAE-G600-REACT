import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FuelDistributionStatus1 = () => {
  const navigate = useNavigate();
  const tableHeader1 = [{ title: 'IOGM DISCRETES' }, { title: 'IOGM1' }, { title: 'IOGM2' }];
  const data1 = [
    { parameter: 'L ENG FUEL SOV OPEN', status1: true, status2: true },
    { parameter: 'L ENG FUEL SOV CLOSED', status1: false, status2: false },
    { parameter: 'L HFRS SOV OPEN', status1: false, status2: false },
    { parameter: 'L HFRS SOV CLOSED', status1: true, status2: true },
    { parameter: 'APU SOV OPEN', status1: false, status2: false },
    { parameter: 'APU SOV CLOSED', status1: true, status2: true },
    { parameter: 'FUEL X FLOW OPEN', status1: false, status2: false },
    { parameter: 'FUEL X FLOW CLOSED', status1: true, status2: true },
  ];

  const tableHeader2 = [{ title: 'IOGM DISCRETES' }, { title: 'IOGM3' }, { title: 'IOGM4' }];
  const data2 = [
    { parameter: 'R ENG FUEL SOV OPEN', status1: true, status2: true },
    { parameter: 'R ENG FUEL SOV CLOSED', status1: false, status2: false },
    { parameter: 'R HFRS SOV OPEN', status1: false, status2: false },
    { parameter: 'R HFRS SOV CLOSED', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/fueldistributionsstatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'282001'} right={['Select fwd to continue']} />}>
      <DataHeader left={'Fuel Distribution Status'} right={'1/2'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  );
};

export default FuelDistributionStatus1;
