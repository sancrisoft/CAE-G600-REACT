import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L ALT BST PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'R ALT BST PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'L EEC CH B A429 RX2 PINS', status1: true, status2: true },
    { parameter: 'R EEC CH B A429 RX1 PINS', status1: true, status2: true },
    { parameter: 'R EEC CH B A429 TX1 PINS', status1: true, status2: true },
    { parameter: 'L FQI QTY HI OUT PINS', status1: true, status2: true },
    { parameter: 'R FQI QTY HI OUT PINS', status1: true, status2: true },
    { parameter: 'L FUEL SOV CLOSED PINS', status1: true, status2: true },
    { parameter: 'L FUEL SOV OPEN PINS', status1: true, status2: true },
    { parameter: 'R FUEL SOV CLOSED PINS', status1: true, status2: true },
    { parameter: 'R FUEL SOV OPEN PINS', status1: true, status2: true },
    { parameter: 'L MAIN PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'R MAIN PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'MAIN DOOR OPEN GSB PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkssix',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233070'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'5/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksFive
