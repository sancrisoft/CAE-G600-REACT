import { useNavigate } from "react-router-dom";
import AltLegend from "../../../../components/AltLegend";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'STATUS' }]
  const data = [
    { parameter: '11,12-EXT DOOR OPEN COMMAND 1', statuses: ['1'],  },
    { parameter: '13,14-EXT DOOR OPEN COMMAND 2', statuses: ['1'] },
    { parameter: '15,16-EXT DOOR CLOSE COMMAND 1', statuses: ['1'] },
    { parameter: '17,18-EXT DOOR CLOSE COMMAND 2', statuses: ['1'] },
    { parameter: '19,20-INT DOOR OPEN COMMAND 1', statuses: ['1'] },
    { parameter: '21,22-NT DOOR OPEN COMMAND 2', statuses: ['1'] },
    { parameter: '23,24-INT DOOR CLOSE COMMAND 1', statuses: ['1'] },
    { parameter: '25,26-INT DOOR CLOSE COMMAND 2', statuses: ['1'] },
    { parameter: '27,28-GROUND SPEED > 15 KTS 1', statuses: ['1'] },
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
      text: 'FWD',
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521011'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR STATUS #4 (A429 LBL 354)'} right={'4/6'} />
      <AltLegend />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus3
