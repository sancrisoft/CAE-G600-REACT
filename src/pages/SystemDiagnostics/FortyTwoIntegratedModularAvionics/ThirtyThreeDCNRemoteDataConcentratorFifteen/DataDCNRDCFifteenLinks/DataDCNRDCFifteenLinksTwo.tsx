import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFifteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'FWD EBATT ARM IND PINS', status1: true, status2: true },
    { parameter: 'FWD EBATT FAIL IND PINS', status1: true, status2: true },
    { parameter: 'FWD EBATT OFF IND PINS', status1: true, status2: true },
    { parameter: 'FWD EBATT ON IND PINS', status1: true, status2: true },
    { parameter: 'GNSPD >40KTS 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDWN 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDWN 2 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDWN 3 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF A PINS', status1: true, status2: true },
    { parameter: 'L WSHLD RAT PINS', status1: true, status2: true },
    { parameter: 'L TR STW/DPLY SW2 PINS', status1: true, status2: true },
    { parameter: 'L BPCU CHA A825 PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233046'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 15 LINKS'} right={'2/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCFifteenLinksTwo
