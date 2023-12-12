import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorFaultsStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft:true }, { title: 'status' }]
  const data = [
    { parameter: '11-OPEN OPERATION TIMEOUT', statuses: [false] },
    { parameter: '12-CLOSE OPERATION TIMEOUT', statuses: [false] },
    { parameter: '13-LANE FAILOVER DETECTED', statuses: [false] },
    { parameter: '14-ACTIVE LANE ALTERNATION FAULT', statuses: [false] },
    { parameter: '15-LANE PREF SIGNAL FAULT', statuses: [false] },
    { parameter: '16-SHIFT REGISTER DATA FAULT', statuses: [false] },
    { parameter: '17-PREFERRED LANE 1', statuses: [false] },
    { parameter: '18-PREFERRED LANE 2', statuses: [true ]},
    { parameter: '19-CLAMP TEST 1 FAULT', statuses: [false] },
    { parameter: '20-CLAMP TEST 2 FAULT', statuses: [false] },
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
      <DynamicTable data={data} mainHeaders={tableHeader} />

    </DefaultLayout>
  )
}

export default MainDoorFaultsStatus2
