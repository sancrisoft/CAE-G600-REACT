import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwelveLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L SERVO ENGAGE PINS', status1: true, status2: true },
    { parameter: 'R SERVO ENGAGE PINS', status1: true, status2: true },
    { parameter: 'XSIDE KNOB PUSH IN PINS', status1: true, status2: true },
    { parameter: 'XSIDE KNOB A IN PINS', status1: true, status2: true },
    { parameter: 'XSIDE KNOB B IN PINS', status1: true, status2: true },
    { parameter: 'HORN SILENCE SEL PINS', status1: true, status2: true },
    { parameter: 'RADOME SW OPEN PINS', status1: true, status2: true },
    { parameter: 'IDS PULL UP PINS', status1: true, status2: true },
    { parameter: 'BARO INHIBIT IN PINS', status1: true, status2: true },
    { parameter: 'A/T ENG/DIS 2 PINS', status1: true, status2: true },
    { parameter: 'A/T DISCONNECT 1 PINS', status1: true, status2: true },
    { parameter: 'A/T DISCONNECT 2 PINS', status1: true, status2: true },
    { parameter: 'RH TO/GA 1 PINS', status1: true, status2: true },
    { parameter: 'RH TO/GA 2 PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233025'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 12 LINKS'} right={'3/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwelveLinksThree
