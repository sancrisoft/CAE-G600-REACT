import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'EMED BIT A429 RX PINS', status1: true, status2: true },
    { parameter: 'EMED CH2 AUXPMP CMD PINS', status1: true, status2: true },
    { parameter: 'EMED CH2 FAULT BIT0 PINS', status1: true, status2: true },
    { parameter: 'EMED CH2 SFTY SW ON PINS', status1: true, status2: true },
    { parameter: 'GNDSPD >40KTS 2 PINS', status1: true, status2: true },
    { parameter: 'HF 1 PTT PINS', status1: true, status2: true },
    { parameter: 'HF 2 PTT PINS', status1: true, status2: true },
    { parameter: 'HUD BUS A429 RX PINS', status1: true, status2: true },
    { parameter: 'HUD BUS 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'HUD BUS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'ID PULL UP PINS', status1: true, status2: true },
    { parameter: 'L FQI FUEL SW PINS', status1: true, status2: true },
    { parameter: 'L SERVO ENGAGE PINS', status1: true, status2: true },
    { parameter: 'R SERVO ENGAGE PINS', status1: true, status2: true },
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
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233032'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'3/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksThree
