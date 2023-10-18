import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'ch1' }, { title: 'ch2' }]
  const data = [
    { parameter: '11-28V L MAIN SUPPLY VMON', status1: true, status2: true },
    { parameter: '12-28V L ESS SUPPLY VMON', status1: true, status2: true },
    { parameter: '13-EBATT1 SUPPLY VMON', status1: true, status2: true },
    { parameter: '14-EBATT2 SUPPLY VMON', status1: true, status2: true },
    { parameter: '15-SW SUPPLY BLOCK INTLK VMON', status1: false, status2: false },
    { parameter: '16-LATCH HI DRIVE VMON', status1: false, status2: false },
    { parameter: '17-UNLATCH HI DRIVE VMON', status1: false, status2: false },
    { parameter: '18-LATCH UNLATCH LO DRIVE VMON', status1: false, status2: false },
    { parameter: '19-LATCH UNLATCH LO DRIVE IMON', status1: false, status2: false },
    { parameter: '20-UNLOCK HI DRIVE VMON', status1: false, status2: false },
    { parameter: '21-UNLOCK LO DRIVE VMON', status1: false, status2: false },
    { parameter: '22 UNLOCK LO DRIVE IMON', status1: false, status2: false },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521008'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'DOOR STATUS #1 (A429 L352/L363)'} right={'1/6'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus
