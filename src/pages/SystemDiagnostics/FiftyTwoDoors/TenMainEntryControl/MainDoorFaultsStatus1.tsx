import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorFaultsStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft: true }, { title: 'status' }]
  const data = [
    { parameter: '25-LOCKED HALL EFFECT CHB FAULT', statuses: [false] },
    { parameter: '26-UNLOCKED HALL EFFECT CHA FAULT', statuses: [false] },
    { parameter: '27-UNLOCKED HALL EFFECT CHB FAULT', statuses: [false] },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorfaultsstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521002'} right={['Select fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'DOOR FAULT #2 (A429 LBL 357)'} right={'2/7'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={tableHeader} />

    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus1
