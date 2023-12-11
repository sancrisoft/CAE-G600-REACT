import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CPLT 121.5 EMER SW PINS', status1: true, status2: true },
    { parameter: 'FCC 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'FCC 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'FCS UPS BATT AMPS PINS', status1: true, status2: true },
    { parameter: 'FCS UPS BATT CHG FAIL PINS', status1: true, status2: true },
    { parameter: 'FCS UPS BATT FAULt PINS', status1: true, status2: true },
    { parameter: 'FCS UPS BATT VOLTS PINS', status1: true, status2: true },
    { parameter: 'FCS UPS PWR OFF PINS', status1: true, status2: true },
    { parameter: 'FWD LAV ALRM MON PINS', status1: true, status2: true },
    { parameter: 'FWD LAV FAULT MON PINS', status1: true, status2: true },
    { parameter: 'FWD LAV SMK DET TST PINS', status1: true, status2: true },
    { parameter: 'HES PWR PUT PINS', status1: true, status2: true },
    { parameter: 'HF 2 PTT PINS', status1: true, status2: true },
    { parameter: 'MAG HDG ATT A429 TX PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233053'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 16 LINKS'} right={'2/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenLinksTwo
