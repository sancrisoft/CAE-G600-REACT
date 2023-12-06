import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFifteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'LEER OVHT TEST SIG PINS', status1: true, status2: true },
    { parameter: 'LEER OVHT PINS', status1: true, status2: true },
    { parameter: 'LEER OVHT CIR CHCK PINS', status1: true, status2: true },
    { parameter: 'LEER FAN FAULT PINS', status1: true, status2: true },
    { parameter: 'LEER FANSP SEL HILO PINS', status1: true, status2: true },
    { parameter: 'LEES TRY HOT A PINS', status1: true, status2: true },
    { parameter: 'LMN TRU HOT A PINS', status1: true, status2: true },
    { parameter: 'LGCU CTRL LN1 RX PINS', status1: true, status2: true },
    { parameter: 'LGCU MON LN TX PINS', status1: true, status2: true },
    { parameter: 'MAIN DR OPEN IN 1 PINS', status1: true, status2: true },
    { parameter: 'MAIN DR OPEN OUT 1 PINS', status1: true, status2: true },
    { parameter: 'FECU A429 TX PINS', status1: true, status2: true },
    { parameter: 'RMN TRU HOT A PINS', status1: true, status2: true },
    { parameter: 'RESS TRU HOT A PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfifteen/datadcnrdcfifteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233047'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 15 LINKS'} right={'3/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCFifteenLinksThree
