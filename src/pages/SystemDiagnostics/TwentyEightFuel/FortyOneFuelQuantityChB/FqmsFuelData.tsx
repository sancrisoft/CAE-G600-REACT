import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';

const FqmsFuelData = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER' }, { title: 'CH A' }, { title: 'CH B' }];
  const data1 = [
    { parameter: 'FILT. PITCH ANGLE (D)', status1: '0.01', status2: '0.01' },
    { parameter: 'FILT. ROLL ANGLE (D)', status1: '0.39', status2: '0.39' },
    { parameter: 'FILT. YAW RATE (D/S)', status1: '0.00', status2: '0.00' },
    { parameter: 'R FUEL TEMP (C)', status1: '28', status2: '28' },
    { parameter: 'R FUEL QTY (LBS)', status1: '3050', status2: '3050' },
    { parameter: 'R MAX ALLOW (LBS)', status1: '20955', status2: '20955' },
    { parameter: 'R FUEL QTY (KG)', status1: '1380', status2: '1380' },
    { parameter: 'R MAX ALLOW (KG)', status1: '9500', status2: '9500' },
    { parameter: 'L FUEL TEMP (C)', status1: '28', status2: '28' },
    { parameter: 'L FUEL QTY (LBS)', status1: '3400', status2: '3400' },
    { parameter: 'L MAX ALLOW (LBS)', status1: '20955', status2: '20955' },
    { parameter: 'L FUEL QTY (KG)', status1: '1540', status2: '1540' },
    { parameter: 'L MAX ALLOW (KG)', status1: '9500', status2: '9500' },
    { parameter: 'TOT FUEL QTY (LBS)', status1: '6450', status2: '6450' },
    { parameter: 'TOT FUEL QTY (KG)', status1: '2920', status2: '2920' },
    { parameter: 'FUEL DNSTY (LB/GAL)', status1: '0.00', status2: '0.00' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284113'} right={['Select done to continue']} />}>
      <DataHeader left={'FQMS fuel data'} right={'1/1'} />
      <StatusTable data={data1} tableHeader={tableHeader1} />
    </DefaultLayout>
  );
};

export default FqmsFuelData;
