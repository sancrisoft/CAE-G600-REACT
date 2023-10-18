import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorFaultsStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'status' }]
  const data = [
    { parameter: '11-OPEN OPERATION TIMEOUT', status1: false },
    { parameter: '12-CLOSE OPERATION TIMEOUT', status1: false },
    { parameter: '13-LANE FAILOVER DETECTED', status1: false },
    { parameter: '14-ACTIVE LANE ALTERNATION FAULT', status1: false },
    { parameter: '15-LANE PREF SIGNAL FAULT', status1: false },
    { parameter: '16-SHIFT REGISTER DATA FAULT', status1: false },
    { parameter: '17-PREFERRED LANE 1', status1: false },
    { parameter: '18-PREFERRED LANE 2', status1: true },
    { parameter: '19-CLAMP TEST 1 FAULT', status1: false },
    { parameter: '20-CLAMP TEST 2 FAULT', status1: false },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521003'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR FAULT #3 (A429 LBL 360)'} right={'3/7'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus2
