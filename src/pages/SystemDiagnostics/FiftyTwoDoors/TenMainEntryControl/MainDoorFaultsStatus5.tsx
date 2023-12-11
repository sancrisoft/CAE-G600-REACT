import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorFaultsStatus5 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'status' }]
  const data = [
    { parameter: '11-ACTUATOR INTERLOCK FAULT LANE2', statuses: [false] },
    { parameter: '12-HYD CONTROL VALVE FAULT LANE2', statuses: [false] },
    { parameter: '13-AUX HYD PUMP ON FAULT LANE2', statuses: [false] },
    { parameter: '14-UNLOCK DRIVER FAULT LANE2', statuses: [false] },
    { parameter: '15-LOCK EMA FAULT LANE2', statuses: [false] },
    { parameter: '16-LOCK EMA TIME EXCEEDED LANE2', statuses: [false] },
    { parameter: '17-LATCH HI-SIDE FAULT LANE2', statuses: [false] },
    { parameter: '18-LATCH EMA FAULT LANE2', statuses: [false] },
    { parameter: '19-LATCH EMA TIME EXCEEDED LANE2', statuses: [false] },
    { parameter: '20-UNLATCH HI-SIDE FAULT LANE2', statuses: [false] },
    { parameter: '21-UNLATCH EMA FAULT LANE2', statuses: [false] },
    { parameter: '22-UNLATCH TIME EXCEEDED LANE2', statuses: [false] },
    { parameter: '23-OVERCURRENT SHUTDOWN LANE2', statuses: [false] },
    { parameter: '24-MAIN DOOR OPEN OUT FAULT LANE2', statuses: [false] },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus6',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521006'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR FAULT #6 (A429 LBL 362)'} right={'6/7'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus5
