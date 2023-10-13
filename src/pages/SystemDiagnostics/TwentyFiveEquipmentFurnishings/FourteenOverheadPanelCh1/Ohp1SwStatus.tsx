import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Ohp1SwStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'RAT GEN', status1: false, status2: false },
    { parameter: 'L GEN', status1: false, status2: false },
    { parameter: 'APU GEN', status1: false, status2: false },
    { parameter: 'R GEN', status1: false, status2: false },
    { parameter: 'L BUS TIE', status1: true, status2: true },
    { parameter: 'R BUS TIE', status1: true, status2: true },
    { parameter: 'L MAIN BATT', status1: false, status2: false },
    { parameter: 'R MAIN BATT', status1: false, status2: false },
    { parameter: 'UPS FLT CTRL BATT', status1: true, status2: true },
    { parameter: 'DOOR SAFETY', status1: true, status2: true },
    { parameter: 'L ENG CTRL', status1: true, status2: true },
    { parameter: 'R ENG CTRL', status1: true, status2: true },
    { parameter: 'BLEED AIR L ENG', status1: false, status2: false },
    { parameter: 'BLEED AIR APU', status1: false, status2: false },
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
      href: '/systemdiagnostics/twentyfiveequipmentfurnishings/fourteenoverheadpanelch1/ohp1swstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'251401'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Overhead Panel 1 SW Status'} right={'1/2'} />
      <Legend title="depressed" title2="extended" firstIsRed />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Ohp1SwStatus
