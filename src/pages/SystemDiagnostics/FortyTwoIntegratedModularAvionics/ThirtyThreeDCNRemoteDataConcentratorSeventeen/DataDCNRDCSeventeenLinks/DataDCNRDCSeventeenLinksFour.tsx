import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSeventeenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L EEC CHB A429 RX1 PINS', status1: true, status2: true },
    { parameter: 'L EEC CHB A429 TX1 PINS', status1: true, status2: true },
    { parameter: 'R EEC CHB A429 RX2 PINS', status1: true, status2: true },
    { parameter: 'L MAIN PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'R MAIN PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'L NAVACL HLTH SIG 1 PINS', status1: true, status2: true },
    { parameter: 'L NAVACL HLTH SIG 2 PINS', status1: true, status2: true },
    { parameter: 'L RADALT TEST PINS', status1: true, status2: true },
    { parameter: 'L WING HOT PINS', status1: true, status2: true },
    { parameter: 'L WING TEMP LOW PINS', status1: true, status2: true },
    { parameter: 'LGCU CTRL LN2 RX PINS', status1: true, status2: true },
    { parameter: 'LGCU MON LN RX PINS', status1: true, status2: true },
    { parameter: 'MEDICAL OXY ON PINS', status1: true, status2: true },
    { parameter: 'MID CABIN DR CLOSED PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233062'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 17 LINKS'} right={'4/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSeventeenLinksFour
