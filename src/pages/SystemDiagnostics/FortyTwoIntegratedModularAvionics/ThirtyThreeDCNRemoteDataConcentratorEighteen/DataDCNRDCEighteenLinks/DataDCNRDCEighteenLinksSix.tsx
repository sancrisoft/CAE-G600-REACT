import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksSix = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L REMTE FUEL S/O SW PINS', status1: true, status2: true },
    { parameter: 'R REMTE FUEL S/O SW PINS', status1: true, status2: true },
    { parameter: 'OXY SVC DR SW OPEN PINS', status1: true, status2: true },
    { parameter: 'OXY SVC PNL LT 28V OT PINS', status1: true, status2: true },
    { parameter: 'PART 135 CONFIG IN PINS', status1: true, status2: true },
    { parameter: 'PASS PRESS XD CR PINS', status1: true, status2: true },
    { parameter: 'R BPCU B A825 PINS', status1: true, status2: true },
    { parameter: 'R RAD ALLT TEST PINS', status1: true, status2: true },
    { parameter: 'R WING HOT PINS', status1: true, status2: true },
    { parameter: 'R WING TEMP LOW PINS', status1: true, status2: true },
    { parameter: 'RADALT 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'RAT CTA PINS', status1: true, status2: true },
    { parameter: 'RAT GCU BIT STATUS PINS', status1: true, status2: true },
    { parameter: 'RAT HTR BIT STATUS PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksseven',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233071'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'6/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksSix
