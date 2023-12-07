import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksSeven = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'R BATT AMPS PINS', status1: true, status2: true },
    { parameter: 'R BATT HOT PINS', status1: true, status2: true },
    { parameter: 'R BATT VOLTS PINS', status1: true, status2: true },
    { parameter: 'R FCS PINS', status1: true, status2: true },
    { parameter: 'R PYLON OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'R PYLON OVHT PINS', status1: true, status2: true },
    { parameter: 'R PYLON OVHT CHK PINS', status1: true, status2: true },
    { parameter: 'RAMP FLOOD LTS PINS', status1: true, status2: true },
    { parameter: 'SEAT BELT PINS', status1: true, status2: true },
    { parameter: 'SMOKE DET TEST PINS', status1: true, status2: true },
    { parameter: 'TAIL COMPT DR OPEN PINS', status1: true, status2: true },
    { parameter: 'TAIL COMPT LTS PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkseight',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233090'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'7/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksSeven
