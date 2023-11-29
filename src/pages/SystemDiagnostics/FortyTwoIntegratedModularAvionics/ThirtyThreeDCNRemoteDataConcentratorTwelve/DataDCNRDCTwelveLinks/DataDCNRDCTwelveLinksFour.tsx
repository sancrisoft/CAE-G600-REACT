import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwelveLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CTRL LN2 HDLSEL UP PINS', status1: true, status2: true },
    { parameter: 'CTRL LN2 HDLSEL DN PINS', status1: true, status2: true },
    { parameter: 'R TQA CABIN PRESS PINS', status1: true, status2: true },
    { parameter: 'R RT STW/DEPLY SW 1 PINS', status1: true, status2: true },
    { parameter: 'R FIRE HDL SOL PINS', status1: true, status2: true },
    { parameter: 'L FIRE HDL PULL 2 PINS', status1: true, status2: true },
    { parameter: 'R FIRE HDL PULL 2 PINS', status1: true, status2: true },
    { parameter: 'R FIRE BTL-R ENG PINS', status1: true, status2: true },
    { parameter: 'R FIRE BTL-L ENG PINS', status1: true, status2: true },
    { parameter: 'L FIRE BTL-R ENG PINS', status1: true, status2: true },
    { parameter: 'L FIRE BTL-L ENG PINS', status1: true, status2: true },
    { parameter: 'L FRT WHSLD TEMP 2 PINS', status1: true, status2: true },
    { parameter: 'L WHSLD TEMP SNSR 2 PINS', status1: true, status2: true },
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
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233026'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 12 LINKS'} right={'4/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwelveLinksFour
