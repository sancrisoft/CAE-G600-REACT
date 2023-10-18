import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const FqmsFault = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'CH A' }, { title: 'CH B' }];
  const data = [
    { parameter: 'L FQMS DEGRADE CAUT', status1: false, status2: false },
    { parameter: 'R FQMS DEGRADE CAUT', status1: false, status2: false },
    { parameter: 'L FQMS DEGRADE ADV.', status1: false, status2: false },
    { parameter: 'R FQMS DEGRADE ADV.', status1: false, status2: false },
    { parameter: 'L FUEL TEMP CAUT', status1: false, status2: false },
    { parameter: 'R FUEL TEMP CAUT', status1: false, status2: false },
    { parameter: 'L FUEL TEMP ADV', status1: false, status2: false },
    { parameter: 'R FUEL TEMP ADV', status1: false, status2: false },
    { parameter: 'L TANK QTY FAILED', status1: false, status2: false },
    { parameter: 'R TANK QTY FAILED', status1: false, status2: false },
    { parameter: 'FQSC SW MISMATCH', status1: false, status2: false },
    { parameter: 'FQSC CONFIG MISMATCH', status1: false, status2: true },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284103'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms faults'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsFault;
