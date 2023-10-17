import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MainDoorFaultsStatus4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES' }, { title: 'status' }]
  const data = [
    { parameter: '25-LATCH UNLATCH LO-SIDE FAULT 1', status1: false },
    { parameter: '26-SENSOR POWER 1 FAULT', status1: false },
    { parameter: '27-SUPPLY ISOLATION FAULT LANE1', status1: false },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus5',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521005'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR FAULT #5 (A429 LBL 361)'} right={'5/7'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus4
