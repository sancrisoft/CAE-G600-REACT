import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const BusDiagnosticStatus4 = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'NIM1' }]
  const dataTx = [
    { parameter: 'BUS C - TIMESLOT 1', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 2', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 3', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 4', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 5', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 6', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 7', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 8', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 9', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 10', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 11', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 12', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 13', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 14', status1: 'NOT PRESENT' },
  ]

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
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentythreecommunications/tworadiocabinetone/busdiagnosticstatus5',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'230203'} right={['Select prev to go back', 'Select FWD to continue']} />}
    >
      <DataHeader left={'nim 1 mac bus diagnostic data'} right={'5/6'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} leftAlign />
    </DefaultLayout>
  )
}

export default BusDiagnosticStatus4
