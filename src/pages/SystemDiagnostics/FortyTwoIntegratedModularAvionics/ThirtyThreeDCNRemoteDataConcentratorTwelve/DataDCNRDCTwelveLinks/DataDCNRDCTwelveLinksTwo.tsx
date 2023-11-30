import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwelveLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'HUD BUS A A429 RX PINS', status1: true, status2: true },
    { parameter: 'HUD BUS 1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'HUD BUS 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'EVS A 429 RX PINS', status1: true, status2: true },
    { parameter: 'EVS A 429 TX PINS', status1: true, status2: true },
    { parameter: 'DAB 2 A825 PINS', status1: true, status2: true },
    { parameter: 'EMER GEAR BTL PRES PINS', status1: true, status2: true },
    { parameter: 'TSC 2 WOW PINS', status1: true, status2: true },
    { parameter: 'TSC 3 WOW PINS', status1: true, status2: true },
    { parameter: 'STBY 2 WOW PINS', status1: true, status2: true },
    { parameter: 'STBY 2 DATALOAD EN PINS', status1: true, status2: true },
    { parameter: 'TQA WOW PINS', status1: true, status2: true },
    { parameter: 'DU4 SHTDWN PINS', status1: true, status2: true },
    { parameter: 'DU4 SHTDWN DIP PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwelve/datadcnrdctwelvelinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233024'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 12 LINKS'} right={'2/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwelveLinksTwo
