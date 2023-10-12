import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const ControlOneStatus1 = () => {
  const data = [
    { parameter: 'CPCU 1 ACTIVE', status1: false, status2: false },
    { parameter: 'CPCU 2 ACTIVE', status1: true, status2: true },
    { parameter: 'DIFF PRESS > 10.80 PSID', status1: true, status2: true },
    { parameter: 'DIFF PRESS > 11.00 PSID', status1: true, status2: true },
    { parameter: 'CABIN SETPOINT > 10 KFT', status1: true, status2: true },
    { parameter: 'LANDING SELECT FLAG TRUE', status1: false, status2: false },
    { parameter: 'SEMI SELECT FLAG TRUE', status1: true, status2: true },
    { parameter: 'HOLD WARNING FLAG TRUE', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'CPCS PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
  ]

  const navigate = useNavigate();

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
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/thirtyonecabinpressurecontrolone/controlonestatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'213102'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Cabin Pressure Control 1 Status'} right={'2/3'} />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} hasDobleTitle />
    </DefaultLayout>
  )
}

export default ControlOneStatus1
