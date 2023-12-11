import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CMU VDR1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'CMU VDR1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'CPC A429 RX PINS', status1: true, status2: true },
    { parameter: 'CPC 1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'CPCU1 SW DWNLD SIG PINS', status1: true, status2: true },
    { parameter: 'CPCU2 SW DWNLD SIG PINS', status1: true, status2: true },
    { parameter: 'CTRL LN1 HDL SEL UP PINS', status1: true, status2: true },
    { parameter: 'CTRL LN1 HDL SEL DN PINS', status1: true, status2: true },
    { parameter: 'DAB 1 A825 PINS', status1: true, status2: true },
    { parameter: 'DUMU L/R MAIN WOW PINS', status1: true, status2: true },
    { parameter: 'DU1 SHTDWN PINS', status1: true, status2: true },
    { parameter: 'DU1 SHTDWN DIP PINS', status1: true, status2: true },
    { parameter: 'EXT BATT SW ON PINS', status1: true, status2: true },
    { parameter: 'FD1 BUTTON ARM PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233031'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'2/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksTwo
