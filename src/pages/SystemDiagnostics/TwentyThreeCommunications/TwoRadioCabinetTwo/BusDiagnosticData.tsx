import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const BusDiagnosticData = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'NIM2' }]

  const dataTx = [
    { parameter: 'BUS A - TIMESLOT 1', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 2', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 3', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 4', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 5', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 6', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 7', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 8', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 9', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 10', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 11', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 12', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 13', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 14', status1: 'PRESENT WITHOUT ERROR' },
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
      text: 'FWD',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'230203'} right={['Select FWD to continue']} />}
    >
      <DataHeader left={'nim 2 mac bus diagnostic data'} right={'1/6'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} leftAlign />
    </DefaultLayout>
  )
}

export default BusDiagnosticData
