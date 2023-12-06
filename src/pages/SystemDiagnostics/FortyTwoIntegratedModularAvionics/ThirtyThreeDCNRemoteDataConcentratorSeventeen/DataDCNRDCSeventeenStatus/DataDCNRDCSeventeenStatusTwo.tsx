import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenStatusTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'STANDBY STATE', status1: true, status2: true },
    { parameter: 'DATALOAD ALLOWED', status1: true, status2: true },
    { parameter: 'DATALOAD AVAILABLE', status1: true, status2: true },
    { parameter: 'DATALOAD MODE', status1: false, status2: false },
    { parameter: 'PRI PWR INPUT AVAIL', status1: true, status2: true },
    { parameter: 'SEC PWR INPUT AVAIL', status1: true, status2: true },
    { parameter: 'UTC TIME AVAILABLE', status1: true, status2: true },
    { parameter: 'DATE AVAILABLE', status1: true, status2: true },
    { parameter: 'A/C REGIST AVAILABLE', status1: true, status2: true },
    { parameter: 'CWOW AVAILABLE', status1: true, status2: true },
    { parameter: 'AIRSPEED AVAILABLE', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics')
      },
    },
    {
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
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
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233058'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 17 STATUS'} right={'2/2'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenStatusTwo
