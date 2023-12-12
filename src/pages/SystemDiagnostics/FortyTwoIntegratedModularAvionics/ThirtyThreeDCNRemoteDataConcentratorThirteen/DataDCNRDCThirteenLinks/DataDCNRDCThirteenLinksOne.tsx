import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: '60HZ OBSVR ENABLE PINS', status1: true, status2: true },
    { parameter: '60HZ L CNSL ENABLE PINS', status1: true, status2: true },
    { parameter: 'A/T DISCONNECT 1 PINS', status1: true, status2: true },
    { parameter: 'A/T DISCONNECT 2 PINS', status1: true, status2: true },
    { parameter: 'A/T ENG/DISENG 1 PINS', status1: true, status2: true },
    { parameter: 'ADS 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'ADS 1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'API BUTTON ARM PINS', status1: true, status2: true },
    { parameter: 'BARO INHIBIT IN PINS', status1: true, status2: true },
    { parameter: 'BCU INBD A429 RX PINS', status1: true, status2: true },
    { parameter: 'BCU INBD A429 TX PINS', status1: true, status2: true },
    { parameter: 'BELOW/INHIBIT GS PINS', status1: true, status2: true },
    { parameter: 'CAS CHIME MUTE PINS', status1: true, status2: true },
    { parameter: 'GEAR SSVR DR SW OPEN PINS', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233030'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'1/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksOne
