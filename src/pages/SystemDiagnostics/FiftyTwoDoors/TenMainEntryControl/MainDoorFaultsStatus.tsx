import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorFaultsStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true  }, { title: 'status' }]
  const data = [
    { parameter: '11-COCKPIT COMMAND SWITCH FAULT', statuses: [false] },
    { parameter: '12-EXTERIOR COMMAND SWITCH FAULT', statuses: [false] },
    { parameter: '13-INTERIOR COMMAND SWITCH FAULT', statuses: [false] },
    { parameter: '14-COCKPIT SAFETY SWITCH FAULT', statuses: [false] },
    { parameter: '15-GROUNDSPEED INPUT FAULT', statuses: [false] },
    { parameter: '16-PBIT ON GROUND FAULT', statuses: [false] },
    { parameter: '17-POWER SUPPLY INPUT FAULT', statuses: [false] },
    { parameter: '18-DOOR CLOSED PROX SWITCH FAULT', statuses: [false] },
    { parameter: '19-AFT BAYONET SWITCH FAULT', statuses: [false] },
    { parameter: '20-FORWARD BAYONET SWITCH FAULT', statuses: [false] },
    { parameter: '21-LATCHED PROK SWITCH FAULT', statuses: [false] },
    { parameter: '22-UNLATCHED PROK SWITCH FAULT', statuses: [false] },
    { parameter: '23-LOCKED PROMMITY SWITCH FAULT', statuses: [false] },
    { parameter: '24-LOCKED HALL EFFECT CHA FAULT', statuses: [false] },
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
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus
