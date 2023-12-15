import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFifteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'ADS 3 A429 RX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'ADS 3 A429 TX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'AUX TRU HOT A PINS', status1: true, status2: true, noData: true, },
    { parameter: 'BCU OTBD A429 RX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'BCU OTBD A429 TX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'EMED CH1 AUXPMP CMD PINS', status1: true, status2: true, noData: true, },
    { parameter: 'EMED CH1 FAULT BIT0 PINS', status1: true, status2: true, noData: true, },
    { parameter: 'EMED CH1 SFTY SW ON PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FCC 1 A429 RX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FCC 1 A429 TX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FECU CMD A429 RX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FECU MON A429 RX PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FLAP HDL/POS DIS PINS', status1: true, status2: true, noData: true, },
    { parameter: 'FOSC DATA 2 A825 PINS', status1: true, status2: true, noData: true, },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233045'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 15 LINKS'} right={'1/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCFifteenLinksOne
