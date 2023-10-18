import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'ch1' }, { title: 'ch2' }]
  const data = [
    { parameter: '23-HD CTRL VALVE DRIVE VMON', status1: false, status2: false },
    { parameter: '24-AUX HYD PUMP ON VMON', status1: false, status2: false },
    { parameter: '25-SWITCH POWER DRIVE VMON', status1: true, status2: true },
    { parameter: '26-MAIN DOOR OPEN DRIVE VMON', status1: true, status2: true },
    { parameter: '27-EMED FAULT VMON', status1: false, status2: false },
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
      text: 'FWD',
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521009'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR STATUS #2 (A429 L352/L363)'} right={'2/6'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus1
