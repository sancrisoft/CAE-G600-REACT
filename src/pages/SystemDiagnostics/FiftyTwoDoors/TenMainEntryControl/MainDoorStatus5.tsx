import { useNavigate } from "react-router-dom";
import AltLegend from "../../../../components/AltLegend";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";

import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorStatus5 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'STATUS' }]
  const data = [
    { parameter: '11,12-LATCHED PROX SWITCH', statuses: ['1'] },
    { parameter: '13,14-UNLATCHED PROX SWITCH', statuses: ['2'] },
    { parameter: '15,16-LOCKED PROX SWITCH', statuses: ['2'] },
    { parameter: '17,18-LOCKED EMA SWITCH CH A', statuses: ['2'] },
    { parameter: '19,20-LOCKED EMA SWITCH CH B', statuses: ['2'] },
    { parameter: '21,22-UNLOCKED EMA SWITCH CH A', statuses: ['1'] },
    { parameter: '23,24-UNLOCKED EMA SWITCH CH B', statuses: ['1'] },
    { parameter: '25,26-GROUND SPEED > 15 KTS2', statuses: ['1'] },
    { parameter: '27,28-P_BIT_ON_GROUND 1', statuses: ['2'] },
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
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus5
