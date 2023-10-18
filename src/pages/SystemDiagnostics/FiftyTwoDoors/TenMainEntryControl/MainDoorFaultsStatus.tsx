import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorFaultsStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'status' }]
  const data = [
    { parameter: '11-COCKPIT COMMAND SWITCH FAULT', status1: false },
    { parameter: '12-EXTERIOR COMMAND SWITCH FAULT', status1: false },
    { parameter: '13-INTERIOR COMMAND SWITCH FAULT', status1: false },
    { parameter: '14-COCKPIT SAFETY SWITCH FAULT', status1: false },
    { parameter: '15-GROUNDSPEED INPUT FAULT', status1: false },
    { parameter: '16-PBIT ON GROUND FAULT', status1: false },
    { parameter: '17-POWER SUPPLY INPUT FAULT', status1: false },
    { parameter: '18-DOOR CLOSED PROX SWITCH FAULT', status1: false },
    { parameter: '19-AFT BAYONET SWITCH FAULT', status1: false },
    { parameter: '20-FORWARD BAYONET SWITCH FAULT', status1: false },
    { parameter: '21-LATCHED PROK SWITCH FAULT', status1: false },
    { parameter: '22-UNLATCHED PROK SWITCH FAULT', status1: false },
    { parameter: '23-LOCKED PROMMITY SWITCH FAULT', status1: false },
    { parameter: '24-LOCKED HALL EFFECT CHA FAULT', status1: false },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521001'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'DOOR FAULT #1 (A429 LBL 367)'} right={'1/7'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus
