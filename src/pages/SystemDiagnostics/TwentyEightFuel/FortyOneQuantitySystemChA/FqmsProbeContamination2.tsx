import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsProveContamination2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'L CH B' }];
  const data = [
    { parameter: 'L2', statuses: [true, true, true, true] },
    { parameter: 'L3', statuses: [true, true, true, true] },
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
      text: 'Prev',
      onClick: () => {
        navigate(-1);
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284105'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'FQMS probe contamination'} right={'2/2'} />
      <Legend title="not contam." title2="contam" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProveContamination2;
