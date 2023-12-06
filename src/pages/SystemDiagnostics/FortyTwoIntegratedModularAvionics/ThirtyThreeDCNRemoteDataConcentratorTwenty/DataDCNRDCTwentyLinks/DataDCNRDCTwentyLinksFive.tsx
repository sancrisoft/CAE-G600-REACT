import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L BAS A429 RX PINS', status1: true, status2: true },
    { parameter: 'L BAS FAIL 1 PINS', status1: true, status2: true },
    { parameter: 'R BAS A429 RX PINS', status1: true, status2: true },
    { parameter: 'R BAS A429 TX PINS', status1: true, status2: true },
    { parameter: 'R BAS FAILED PINS', status1: true, status2: true },
    { parameter: 'R BAS WOW PINS', status1: true, status2: true },
    { parameter: 'L BATT HOT PINS', status1: true, status2: true },
    { parameter: 'L BKHD BAG FAN FALT PINS', status1: true, status2: true },
    { parameter: 'L EEC CH A A429 RX1 PINS', status1: true, status2: true },
    { parameter: 'L EEC CH A A429 TX1 PINS', status1: true, status2: true },
    { parameter: 'R EEC CH A A429 RX2 PINS', status1: true, status2: true },
    { parameter: 'L ENG ZONE 1B PINS', status1: true, status2: true },
    { parameter: 'L ENG ZONE 1A PINS', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics')
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkssix',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233088'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'5/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksFive
