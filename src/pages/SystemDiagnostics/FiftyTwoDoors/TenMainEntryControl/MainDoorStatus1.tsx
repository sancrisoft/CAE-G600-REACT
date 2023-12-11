import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'ch1' }, { title: 'ch2' }]
  const data = [
    { parameter: '23-HD CTRL VALVE DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '24-AUX HYD PUMP ON VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '25-SWITCH POWER DRIVE VMON', statuses: [true, true], customSpan: 2, },
    { parameter: '26-MAIN DOOR OPEN DRIVE VMON', statuses: [true, true], customSpan: 2, },
    { parameter: '27-EMED FAULT VMON', statuses: [false, false], customSpan: 2, },
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
      <DynamicTable data={data} mainHeaders={tableHeader}/>
    </DefaultLayout>
  )
}

export default MainDoorStatus1
