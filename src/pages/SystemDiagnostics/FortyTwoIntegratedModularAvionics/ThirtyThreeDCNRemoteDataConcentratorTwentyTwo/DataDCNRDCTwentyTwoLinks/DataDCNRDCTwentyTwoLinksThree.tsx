import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyTwoLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L BAS A429 RX PINS', status1: true, status2: true },
    { parameter: 'L BAS A429 TX PINS', status1: true, status2: true },
    { parameter: 'L BAS FAIL 2 PINS', status1: true, status2: true },
    { parameter: 'L BAS: WOW PINS', status1: true, status2: true },
    { parameter: 'R BAS A429 RX PINS', status1: true, status2: true },
    { parameter: 'R BAS FAIL 1 PINS', status1: true, status2: true },
    { parameter: 'L EEC CH A A429 RX2 PINS', status1: true, status2: true },
    { parameter: 'L ENG ZONE 2B PINS', status1: true, status2: true },
    { parameter: 'R EEC CH A A429 RX1 PINS', status1: true, status2: true },
    { parameter: 'R EEC CH A A429 TX1 PINS', status1: true, status2: true },
    { parameter: 'R ENG ZONE 2A PINS', status1: true, status2: true },
    { parameter: 'L FCS PINS', status1: true, status2: true },
    { parameter: 'R FUEL HOPR DRN OPN PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233097'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 22 LINKS'} right={'3/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyTwoLinksThree
