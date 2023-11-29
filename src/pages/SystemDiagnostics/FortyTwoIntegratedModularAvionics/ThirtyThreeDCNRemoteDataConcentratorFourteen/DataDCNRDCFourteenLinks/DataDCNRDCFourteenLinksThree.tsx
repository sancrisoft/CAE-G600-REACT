import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFourteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'OXY PNL TEST PINS', status1: true, status2: true },
    { parameter: 'PASS OXY ON PINS', status1: true, status2: true },
    { parameter: 'PRNTR STATUS A429 RX PINS', status1: true, status2: true },
    { parameter: 'R FQI FUEL SW PINS', status1: true, status2: true },
    { parameter: 'R TCAS DISP2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'R TR STW/DPLY SW2 PINS', status1: true, status2: true },
    { parameter: 'RADALT 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'RH FUEL SW LIGHT PINS', status1: true, status2: true },
    { parameter: 'TCAS CMC A429 TX PINS', status1: true, status2: true },
    { parameter: 'THERAPEUTIC OXY ON PINS', status1: true, status2: true },
    { parameter: 'TROV MAN POS 2 PINS PINS', status1: true, status2: true },
    { parameter: 'TSC 4 A429 RX PINS', status1: true, status2: true },
    { parameter: 'TSC 4 A429 TX PINS', status1: true, status2: true },
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
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233041'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 14 LINKS'} right={'3/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCFourteenLinksThree
