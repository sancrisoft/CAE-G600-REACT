import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyTwoLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CKPT MNL TEMP SEL PINS', status1: true, status2: true },
    { parameter: 'EBHA BATT AMPS PINS', status1: true, status2: true },
    { parameter: 'EBHA BATT VOLTS PINS', status1: true, status2: true },
    { parameter: 'FDR A717 PINS', status1: true, status2: true },
    { parameter: 'FWD CRW PA MUTEOUT PINS', status1: true, status2: true },
    { parameter: 'HSD FANS PINS', status1: true, status2: true },
    { parameter: 'IFI 28 VDC PINS', status1: true, status2: true },
    { parameter: 'L ACC A429 RX PINS', status1: true, status2: true },
    { parameter: 'L ACC A429 TX PINS', status1: true, status2: true },
    { parameter: 'L ACC FAIL 1 PINS', status1: true, status2: true },
    { parameter: 'L ACC: WOW PINS', status1: true, status2: true },
    { parameter: 'R ACC A429 RX PINS', status1: true, status2: true },
    { parameter: 'R ACC FAIL 2 PINS', status1: true, status2: true },
    { parameter: 'PA AMP: WOW PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233096'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 22 LINKS'} right={'2/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyTwoLinksTwo
