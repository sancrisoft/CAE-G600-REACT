import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const ControlOneStatus = () => {
  const navigate = useNavigate();
  const data = [
    { parameter: 'AIRCRAFT ALTITUDE INVLD', status1: true, status2: true },
    { parameter: 'CABIN PRESSURE LOW', status1: true, status2: true },
    { parameter: 'CPAM DIRECT INVALID', status1: true, status2: true },
    { parameter: 'CPCU 1 FAULT', status1: true, status2: true },
    { parameter: 'CPCU 2 FAULT', status1: true, status2: true },
    { parameter: 'CPCS MMCU FAULT', status1: true, status2: true },
    { parameter: 'CPCS LOW AIR FLOW', status1: true, status2: true },
    { parameter: 'CPCS TSC FAULT', status1: true, status2: true },
    { parameter: 'LDG ELEV INPUT INVALID', status1: true, status2: true },
    { parameter: 'MAINTENANCE ACTION REQD', status1: false, status2: false },
    { parameter: 'AT LEAST ONE RDC INVLD', status1: false, status2: false },
    { parameter: 'OUTFLOW VALVE FAULT', status1: true, status2: true },
    { parameter: 'PRESS RELIEF VALVE FAULT', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'CPCU 1 PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
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
      href: '/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'213101'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Cabin Pressure Control 1 Status'} right={'1/3'} />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} hasDobleTitle />
    </DefaultLayout>
  )
}

export default ControlOneStatus
