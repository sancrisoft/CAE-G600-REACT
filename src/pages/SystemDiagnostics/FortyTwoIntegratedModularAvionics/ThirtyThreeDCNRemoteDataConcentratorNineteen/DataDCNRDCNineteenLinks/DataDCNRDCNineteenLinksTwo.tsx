import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCNineteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'B/C DE COMPRESS SW 1 PINS', status1: true, status2: true },
    { parameter: 'CABIN INTCOM CALL PINS', status1: true, status2: true },
    { parameter: 'CABIN PHONE CALL PINS', status1: true, status2: true },
    { parameter: 'CABIN SRVR A429 TX PINS', status1: true, status2: true },
    { parameter: 'CABIN SERVER OUT PINS', status1: true, status2: true },
    { parameter: 'COCKPIT PHONE CALL PINS', status1: true, status2: true },
    { parameter: 'GALLEY INTCOM CALL PINS', status1: true, status2: true },
    { parameter: 'INCOMING CALL FAX PINS', status1: true, status2: true },
    { parameter: 'CVR CMC A429 RX PINS', status1: true, status2: true },
    { parameter: 'CVR CPDLC A429 TX PINS', status1: true, status2: true },
    { parameter: 'CVR GMT A429 TX PINS', status1: true, status2: true },
    { parameter: 'ERASE CVR PINS', status1: true, status2: true },
    { parameter: 'EBHA BATT HOT PINS', status1: true, status2: true },
    { parameter: 'FWD CRW RNG MUTE OUT PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233077'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 19 LINKS'} right={'2/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCNineteenLinksTwo
