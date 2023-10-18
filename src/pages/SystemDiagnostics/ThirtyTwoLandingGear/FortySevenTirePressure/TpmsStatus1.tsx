import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';
import Legend from '../../../../components/Legend';

const TpmsStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM4' }];
  const data = [
    { parameter: 'TPMU INTERNAL FAULT', status1: true },
    { parameter: 'TPMU NVM FAULT', status1: true },
    { parameter: 'NW LEFT TPM FAULT', status1: true },
    { parameter: 'NW RIGHT TPM FAULT', status1: true },
    { parameter: 'MW LEFT OUTBOARD TPM FAULT', status1: true },
    { parameter: 'MW RIGHT OUTBOARD TPM FAULT', status1: true },
    { parameter: 'MW LEFT INBOARD TPM FAULT', status1: true },
    { parameter: 'MW RIGHT INBOARD TPM FAULT', status1: true },
    { parameter: 'NW LEFT AIM FAULT', status1: false },
    { parameter: 'NW RIGHT AIM FAULT', status1: false },
    { parameter: 'MW LEFT OUTBOARD AIM FAULT', status1: true },
    { parameter: 'MW RIGHT OUTBOARD AIM FAULT', status1: true },
    { parameter: 'MW LEFT INBOARD AIM FAULT', status1: true },
    { parameter: 'MW RIGHT INBOARD AIM FAULT', status1: true },
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
      href: '/systemdiagnostics/twentyeightfuel/fortyseventirepressure/tpmsstatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324901'} right={['Select fwd to continue']} />}>
      <DataHeader left={'tpms fault status screen 1'} right={'1/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default TpmsStatus1;
