import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const BusDiagnosticData1 = () => {
  const navigate = useNavigate();
  const tableHeaderRx = [{ title: 'PARAMETERS' }, { title: 'NIM2' }]
  const dataTx = [
    { parameter: 'BUS A - TIMESLOT 15', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 16', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 17', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 18', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 19', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 20', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 21', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 22', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 23', status1: 'PRESENT WITHOUT ERROR' },
    { parameter: 'BUS A - TIMESLOT 24', status1: 'NOT PRESENT' },
    { parameter: 'BUS A - TIMESLOT 25', status1: 'NOT PRESENT' },
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
      href: '/systemdiagnostics/twentythreecommunications/tworadiocabinettwo/busdiagnosticdata2',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'230203'} right={['Select prev to go back', 'Select FWD to continue']} />}
    >
      <DataHeader left={'nim 2 mac bus diagnostic data'} right={'2/6'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} leftAlign />
    </DefaultLayout>
  )
}

export default BusDiagnosticData1
