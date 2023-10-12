import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const BusDiagnosticData5 = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'NIM2' }]
  const dataTx = [
    { parameter: 'BUS C - TIMESLOT 15', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS C - TIMESLOT 16', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 17', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 18', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 19', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS C - TIMESLOT 20', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 21', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 22', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 23', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS C - TIMESLOT 24', status1: 'NOT PRESENT' },
    { parameter: 'BUS C - TIMESLOT 25', status1: 'NOT PRESENT' },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-1)
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'230203'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'nim 2 mac bus diagnostic data'} right={'6/6'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} leftAlign />
    </DefaultLayout>
  )
}

export default BusDiagnosticData5
