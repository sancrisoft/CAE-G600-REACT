import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCNineteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'FWD BEEER EQPT PINS', status1: true, status2: true },
    { parameter: 'FWD BEER CIR CHK PINS', status1: true, status2: true },
    { parameter: 'FWD BEER OVHT TST PINS', status1: true, status2: true },
    { parameter: 'FWD BEER FAN FAULT PINS', status1: true, status2: true },
    { parameter: 'GNDMNTSATCOM CTRLSW PINS', status1: true, status2: true },
    { parameter: 'HYD TEMP SENSOR PINS', status1: true, status2: true },
    { parameter: 'IFI 28 VDC PINS', status1: true, status2: true },
    { parameter: 'IRIDIUM NOT AVAIL PINS', status1: true, status2: true },
    { parameter: 'IRIDIUM YSTEM FAIL PINS', status1: true, status2: true },
    { parameter: 'L AFT FLR EQP OVRHT PINS', status1: true, status2: true },
    { parameter: 'L AFT FLR OVRHT CHK PINS', status1: true, status2: true },
    { parameter: 'L AFT FLR OVHT TST PINS', status1: true, status2: true },
    { parameter: 'L FUEL HOPDRNVLVSW OPN', status1: true, status2: true },
    { parameter: 'L FUEL TNK DRNVLVSW OPN', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233078'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 19 LINKS'} right={'3/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCNineteenLinksThree
