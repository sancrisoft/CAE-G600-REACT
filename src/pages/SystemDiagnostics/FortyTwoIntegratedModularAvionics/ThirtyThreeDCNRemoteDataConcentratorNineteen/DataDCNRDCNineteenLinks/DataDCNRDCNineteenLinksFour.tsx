import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCNineteenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L BATT AMPS PINS', status1: true, status2: true },
    { parameter: 'L BATT HOT PINS', status1: true, status2: true },
    { parameter: 'L BATT VOLTS PINS', status1: true, status2: true },
    { parameter: 'L ENG ZONE 1A PINS', status1: true, status2: true },
    { parameter: 'L ENG ZONE 2A PINS', status1: true, status2: true },
    { parameter: 'R ENG ZONE 1B PINS', status1: true, status2: true },
    { parameter: 'R ENG ZONE 2B PINS', status1: true, status2: true },
    { parameter: 'R BATT HOT PINS', status1: true, status2: true },
    { parameter: 'R AFT FLOOR OVRHT PINS', status1: true, status2: true },
    { parameter: 'R AFT FLR OVRHT CHK PINS', status1: true, status2: true },
    { parameter: 'R AFT FLR OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'R HYD PRESS SENSOR PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233079'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 19 LINKS'} right={'4/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCNineteenLinksFour
