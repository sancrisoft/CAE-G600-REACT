import { useNavigate } from 'react-router-dom';
import { NavBarButtonType } from '../../../../components/NavBar';
import DefaultLayout from '../../../../components/Layout';
import DataFooter from '../../../../components/DataFooter';
import DataHeader from '../../../../components/DataHeader';
import StatusTable from '../../../../components/StatusTable';

const InboardBrakeStatus4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }];
  const data = [
    { parameter: 'SHUTOFF VLV', status1: '11.0 MA', status2: '11.0 MA' },
    { parameter: 'L BRK PDL POS PLT', status1: '1 %', status2: '1 %' },
    { parameter: 'R BRK PDL POS PLT', status1: '1 %', status2: '1 %' },
    { parameter: 'L BRK PDL POS CPLT', status1: '0 %', status2: '0 %' },
    { parameter: 'R BRK PDL POS CPLT', status1: '1 %', status2: '1 %' },
    { parameter: 'L BRK CTRL VALVE', status1: '3.9 MA', status2: '3.9 MA' },
    { parameter: 'R BRK CTRL VALVE', status1: '3.9 MA', status2: '3.9 MA' },
    { parameter: 'LT WHEEL SPEED', status1: '0.0 KTS', status2: '0.0 KTS' },
    { parameter: 'RT WHEEL SPEED', status1: '0.0 KTS', status2: '0.0 KTS' },
    { parameter: 'LT INBD BRAKE PRESS', status1: '42 PSI', status2: '42 PSI' },
    { parameter: 'RT INBD BRAKE PRESS', status1: '55 PSI', status2: '55 PSI' },
    { parameter: 'LEFT BRAKE TEMP', status1: '34 DEG C', status2: '34 DEG C' },
    { parameter: 'RIGHT BRAKE TEMP', status1: '36 DEG C', status2: '36 DEG C' },
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
      text: 'Prev',
      onClick: () => {
        navigate(-1);
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ];

  return (
    <DefaultLayout showNavBar navBarButtons={navBarButtons} footer={<DataFooter left={'324004'} right={['Select prev to go back', 'Select done to continue']} />}>
      <DataHeader left={'brake ctrl unit inboard sys status'} right={'4/4'} isTitleLeft />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  );
};

export default InboardBrakeStatus4;
