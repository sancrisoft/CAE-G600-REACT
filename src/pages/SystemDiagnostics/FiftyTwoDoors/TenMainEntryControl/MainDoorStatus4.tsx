import { useNavigate } from "react-router-dom";
import AltLegend from "../../../../components/AltLegend";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorStatus4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'STATUS' }]
  const data = [
    { parameter: '11,12-COCKPIT DOOR OPEN COMMAND 1', statuses: ['1'] },
    { parameter: '13,14-COCKPIT DOOR OPEN COMMAND 2', statuses: ['1'] },
    { parameter: '15,16-COCKPIT SAFETY SWITCH 1', statuses: ['1'] },
    { parameter: '17,18-COCKPIT SAFETY SWITCH 2', statuses: ['1'] },
    { parameter: '19,20-DOOR CLOSED PROX SWITCH 1', statuses: ['1'] },
    { parameter: '21,22-DOOR CLOSED PROX SWITCH 2', statuses: ['1'] },
    { parameter: '23,24-FWD BAYONET SWITCH', statuses: ['1'] },
    { parameter: '25,26-AFT BAYONET SWITCH', statuses: ['1'] },
    { parameter: '27,28-P_BIT_ON_GROUND 1', statuses: ['2'] },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus5',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521012'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR STATUS #5 (A429 LBL 355)'} right={'5/6'} />
      <AltLegend />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus4
