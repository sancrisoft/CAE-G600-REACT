import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCNineteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'AFT BEER OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'AFT BEER EOPT OVRHT PINS', status1: true, status2: true },
    { parameter: 'AFT BEER OVRHT CHK PINS', status1: true, status2: true },
    { parameter: 'AFT CRW RNG MUTE OUT  PINS', status1: true, status2: true },
    { parameter: 'AFT E-BATT ARM IND PINS', status1: true, status2: true },
    { parameter: 'AFT E-BATT FAIL IND PINS', status1: true, status2: true },
    { parameter: 'AFT E-BATT OFF IND PINS', status1: true, status2: true },
    { parameter: 'AFT E-BATT ON IND PINS', status1: true, status2: true },
    { parameter: 'APU ECU A429 RX PINS', status1: true, status2: true },
    { parameter: 'APU ECU A429 TX PINS', status1: true, status2: true },
    { parameter: 'APU FIRE DTECT TST PINS', status1: true, status2: true },
    { parameter: 'APU FIRE SOV PINS', status1: true, status2: true },
    { parameter: 'APU FUEL S/OVLV CLSD PINS', status1: true, status2: true },
    { parameter: 'APU FUEL S/OVLV OPN PINS', status1: true, status2: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratornineteen/datadcnrdcnineteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233076'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 19 LINKS'} right={'1/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true } />
    </DefaultLayout>
  )
}

export default DataDCNRDCNineteenLinksOne
