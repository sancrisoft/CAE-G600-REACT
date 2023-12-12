import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsProveContamination1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'L CH B' }];
  const data = [
    { parameter: 'P1', statuses: [true, true, true, true] },
    { parameter: 'K1', statuses: [true, true, true, true] },
    { parameter: 'P2', statuses: [true, true, true, true] },
    { parameter: 'P3', statuses: [true, true, true, true] },
    { parameter: 'P4', statuses: [true, true, true, true] },
    { parameter: 'P5', statuses: [true, true, true, true] },
    { parameter: 'P6', statuses: [true, true, true, true] },
    { parameter: 'P7', statuses: [true, true, true, true] },
    { parameter: 'P8', statuses: [true, true, true, true] },
    { parameter: 'P9', statuses: [true, true, true, true] },
    { parameter: 'P10', statuses: [true, true, true, true] },
    { parameter: 'P11', statuses: [true, true, true, true] },
    { parameter: 'P13', statuses: [true, true, true, true] },
    { parameter: 'L1', statuses: [true, true, true, true] },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyeightfuel/FortyOneQuantitySystemChA/FqmsProbeContamination2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284104'} right={['Select fwd to continue']} />}>
      <DataHeader left={'FQMS probe contamination'} right={'1/2'} />
      <Legend title="not contam." title2="contam" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProveContamination1;
