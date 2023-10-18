import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'CH1' }, { title: 'CH2' }]
  const data = [
    { parameter: '11-CONTROL PATH HEALTH', status1: true, status2: true },
    { parameter: '12-MONITOR PATH HEALTH', status1: true, status2: true },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521010'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR STATUS #3 (A429 L353/L364)'} right={'3/6'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus2
