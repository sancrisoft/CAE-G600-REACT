import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwelveLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CPC A429 RX PINS', status1: true, status2: true },
    { parameter: 'CPC A429 TX PINS', status1: true, status2: true },
    { parameter: 'ADS A429 RX PINS', status1: true, status2: true },
    { parameter: 'ADS A429 TX PINS', status1: true, status2: true },
    { parameter: 'PILOT ACS A429 RX PINS', status1: true, status2: true },
    { parameter: 'COPILOT ACS A429 RX PINS', status1: true, status2: true },
    { parameter: 'TSC 2 DATA A429 RX PINS', status1: true, status2: true },
    { parameter: 'TSC 2 DATA A429 TX PINS', status1: true, status2: true },
    { parameter: 'TSC 3 A429 RX PINS', status1: true, status2: true },
    { parameter: 'TSC 3 A429 TX PINS', status1: true, status2: true },
    { parameter: 'HUD A615 DL A429 RX PINS', status1: true, status2: true },
    { parameter: 'HUD A615 DL A429 TX PINS', status1: true, status2: true },
    { parameter: 'STBY 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'STBY 2 A429 TX PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233023'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 12 LINKS'} right={'1/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwelveLinksOne
