import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'FWD BEER OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'FWD BEER OVRHT PINS', status1: true, status2: true },
    { parameter: 'FWD BEER OVRHT CHCK PINS', status1: true, status2: true },
    { parameter: 'FWD CAB MAN TMP SEL PINS', status1: true, status2: true },
    { parameter: 'GSB ON IND PWR PINS', status1: true, status2: true },
    { parameter: 'L ACC A429 RX PINS', status1: true, status2: true },
    { parameter: 'L ACC FAIL 2 PINS', status1: true, status2: true },
    { parameter: 'R ACC A429 RX PINS', status1: true, status2: true },
    { parameter: 'R ACC A429 TX PINS', status1: true, status2: true },
    { parameter: 'R ACC FAIL 1 PINS', status1: true, status2: true },
    { parameter: 'R ACC: WOW PINS', status1: true, status2: true },
    { parameter: 'L AFT FLOOR OVRHT PINS', status1: true, status2: true },
    { parameter: 'L AFT FLR OVRHT CHK PINS', status1: true, status2: true },
    { parameter: 'L AFT FLR OVRHT TST PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233087'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'4/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksFour
