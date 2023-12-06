import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksEight = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'V11B AFT LF SUP CLS PINS', status1: true, status2: true },
    { parameter: 'V11B AFT LF SUP OPN PINS', status1: true, status2: true },
    { parameter: 'V12 AFT LAV CLS POS PINS', status1: true, status2: true },
    { parameter: 'V12 AFT LAV OPN POS PINS', status1: true, status2: true },
    { parameter: 'V2B TANK ISO CLOSE PINS', status1: true, status2: true },
    { parameter: 'V2B TANK ISO OPEN PINS', status1: true, status2: true },
    { parameter: 'V3B AFT SUP-DRM VLV PINS', status1: true, status2: true },
    { parameter: 'V3B AFT SUP-SUP VLV PINS', status1: true, status2: true },
    { parameter: 'V7 AFT TOIL A POS PINS', status1: true, status2: true },
    { parameter: 'V7 AFT TOIL B POS PINS', status1: true, status2: true },
    { parameter: 'V7 AFT TOIL DRN POS PINS', status1: true, status2: true },
    { parameter: 'V8 AFT LAV A POS PINS', status1: true, status2: true },
    { parameter: 'V8 AFT LAV B POS PINS', status1: true, status2: true },
    { parameter: 'V8 AFT LAV DRN POS PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksnine',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233091'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'8/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksEight
