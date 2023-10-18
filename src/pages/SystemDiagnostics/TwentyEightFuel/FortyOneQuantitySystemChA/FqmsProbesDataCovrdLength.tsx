import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const FqmsProvesDataCovrdLength = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'R CH B' }];
  const data = [
    { parameter: 'P1', status1: '11.61', status2: '7.12', status3: '11.61', status4: '7.12' },
    { parameter: 'K1', status1: '6.96', status2: '6.39', status3: '6.96', status4: '6.39' },
    { parameter: 'P2', status1: '3.89', status2: '4.82', status3: '3.89', status4: '4.81' },
    { parameter: 'P3', status1: '9.42', status2: '8.79', status3: '9.42', status4: '8.78' },
    { parameter: 'P4', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P5', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P6', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P7', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P8', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P9', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P10', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P11', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'P13', status1: '0.00', status2: '0.00', status3: '0.00', status4: '0.00' },
    { parameter: 'L1', status1: '2.07', status2: '0.03', status3: '2.07', status4: '0.03' },
    { parameter: 'L2', status1: '0.07', status2: '0.06', status3: '0.07', status4: '0.06' },
    { parameter: 'L3', status1: '0.07', status2: '0.08', status3: '0.06', status4: '0.08' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'284108'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probes covered length (in)'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProvesDataCovrdLength;
