import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import Legend from '../../../../components/Legend';
import StatusTable from '../../../../components/StatusTable';

const NlgSolenoidDriverStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'SOLENOID POSITION' }, { title: 'CL1' }, { title: 'CL2' }];
  const data = [
    { parameter: 'LGCH BAULK SOLENOID', status1: false, status2: false },
    { parameter: 'NLG DOORS CLOSE HI', status1: true, status2: false },
    { parameter: 'NLG DOORS CLOSE LOW', status1: false, status2: true },
    { parameter: 'NLG DOORS OPEN HI', status1: false, status2: false },
    { parameter: 'NLG DOORS OPEN LOW', status1: false, status2: false },
    { parameter: 'NLG EXTEND HI', status1: true, status2: false },
    { parameter: 'NLG EXTEND LOW', status1: false, status2: true },
    { parameter: 'NLG RETRACT HI', status1: false, status2: false },
    { parameter: 'NLG RETRACT LOW', status1: false, status2: false },
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
      href: '/systemdiagnostics/twentyeightfuel/twentyFuelDistribution/nlgsolenoiddriverstatus2',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'323002'} right={['Select fwd to continue']} />}>
      <DataHeader left={'NLG SOLENOID DRIVER STATUS'} right={'1/2'} />
      <Legend title="on" title2="off" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle/>
    </DefaultLayout>
  );
};

export default NlgSolenoidDriverStatus1;
