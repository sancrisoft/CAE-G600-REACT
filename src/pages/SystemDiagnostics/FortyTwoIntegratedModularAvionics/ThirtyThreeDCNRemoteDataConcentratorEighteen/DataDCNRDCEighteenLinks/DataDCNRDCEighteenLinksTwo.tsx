import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'AHRS 2 WOW PINS', status1: true, status2: true },
    { parameter: 'AHRS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'BFCU ENGAGED PINS', status1: true, status2: true },
    { parameter: 'CABIN WINDOW UNLOCK PINS', status1: true, status2: true },
    { parameter: 'CREW PRESS XDCR PINS', status1: true, status2: true },
    { parameter: 'EACBC STATUS PINS', status1: true, status2: true },
    { parameter: 'EXT DC SENSE PINS', status1: true, status2: true },
    { parameter: 'EXFCSUPS BATCHGR FAIL PINS', status1: true, status2: true },
    { parameter: 'FCU A429 RX PINS', status1: true, status2: true },
    { parameter: 'FCU A429 TX PINS', status1: true, status2: true },
    { parameter: 'FOSC DATA 1 A825 PINS', status1: true, status2: true },
    { parameter: 'FWD CREW ORD DIMOUT PINS', status1: true, status2: true },
    { parameter: 'FWD CREWOXY MUTEOUT PINS', status1: true, status2: true },
    { parameter: 'LETEAC STATUS PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233067'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'2/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksTwo
