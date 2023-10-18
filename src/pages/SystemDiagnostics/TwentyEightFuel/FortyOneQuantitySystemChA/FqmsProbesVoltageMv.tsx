import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import DataTable from '../../../../components/DataTable';

const FqmsProvesVoltageMv = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PROBE' }, { title: 'L CH A' }, { title: 'R CH A' }, { title: 'L CH B' }, { title: 'R CH B' }];
  const data = [
    { parameter: 'P1', status1: '998', status2: '999', status3: '998', status4: '999' },
    { parameter: 'K1', status1: '998', status2: '998', status3: '998', status4: '999' },
    { parameter: 'P2', status1: '1000', status2: '999', status3: '1000', status4: '1000' },
    { parameter: 'P3', status1: '995', status2: '1000', status3: '995', status4: '1000' },
    { parameter: 'P4', status1: '1005', status2: '999', status3: '1005', status4: '999' },
    { parameter: 'P5', status1: '1001', status2: '1004', status3: '1001', status4: '1005' },
    { parameter: 'P6', status1: '1001', status2: '1002', status3: '1001', status4: '1002' },
    { parameter: 'P7', status1: '1004', status2: '1001', status3: '1004', status4: '1001' },
    { parameter: 'P8', status1: '1004', status2: '1000', status3: '1004', status4: '1000' },
    { parameter: 'P9', status1: '1000', status2: '1002', status3: '1000', status4: '1002' },
    { parameter: 'P10', status1: '1004', status2: '1001', status3: '1004', status4: '1001' },
    { parameter: 'P11', status1: '1003', status2: '1004', status3: '1004', status4: '1004' },
    { parameter: 'P13', status1: '1004', status2: '1000', status3: '1004', status4: '1000' },
    { parameter: 'L1', status1: '1003', status2: '1000', status3: '1003', status4: '1000' },
    { parameter: 'L2', status1: '999', status2: '1001', status3: '999', status4: '1001' },
    { parameter: 'L3', status1: '1002', status2: '1002', status3: '1002', status4: '1002' },
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'4110'} right={['Select done to continue']} />}>
      <DataHeader left={'fqms probes voltage (mv)'} right={'1/1'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  );
};

export default FqmsProvesVoltageMv;
