import { useNavigate } from "react-router-dom";
import AltLegend from "../../../../components/AltLegend";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const MainDoorStatus5 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'STATUS' }]
  const data = [
    { parameter: '11,12-LATCHED PROX SWITCH', status1: '1' },
    { parameter: '13,14-UNLATCHED PROX SWITCH', status1: '2' },
    { parameter: '15,16-LOCKED PROX SWITCH', status1: '2' },
    { parameter: '17,18-LOCKED EMA SWITCH CH A', status1: '2' },
    { parameter: '19,20-LOCKED EMA SWITCH CH B', status1: '2' },
    { parameter: '21,22-UNLOCKED EMA SWITCH CH A', status1: '1' },
    { parameter: '23,24-UNLOCKED EMA SWITCH CH B', status1: '1' },
    { parameter: '25,26-GROUND SPEED > 15 KTS2', status1: '1' },
    { parameter: '27,28-P_BIT_ON_GROUND 1', status1: '2' },
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
      footer={<DataFooter left={'521013'} right={['Select prev to go back']} />}
    >
      <DataHeader left={'DOOR STATUS #6 (A429 LBL 356)'} right={'6/6'} />
      <AltLegend />
      <DataTable data={data} mainHeaders={tableHeader} rightAlign />
    </DefaultLayout>
  )
}

export default MainDoorStatus5
