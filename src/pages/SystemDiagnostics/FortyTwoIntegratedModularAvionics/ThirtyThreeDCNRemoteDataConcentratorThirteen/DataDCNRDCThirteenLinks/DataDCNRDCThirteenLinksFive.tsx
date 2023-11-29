import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L FIRE BTL -L ENG PINS', status1: true, status2: true },
    { parameter: 'L FIRE BTL -R ENG PINS', status1: true, status2: true },
    { parameter: 'R FIRE BTL -L ENG PINS', status1: true, status2: true },
    { parameter: 'R FIRE BTL -R ENG PINS', status1: true, status2: true },
    { parameter: 'L FIRE HDL PULL 3 PINS', status1: true, status2: true },
    { parameter: 'R FIRE HDL PULL 3 PINS', status1: true, status2: true },
    { parameter: 'L FIRE HDL SOL PINS', status1: true, status2: true },
    { parameter: 'LEER EOPT OVRHT PINS', status1: true, status2: true },
    { parameter: 'LEER OVRHT CIR CHK PINS', status1: true, status2: true },
    { parameter: 'LEER OVRHT TEST SIG PINS', status1: false, status2: false },
    { parameter: 'LH FUEL SW LIGHT PINS', status1: true, status2: true },
    { parameter: 'MAIN DR OPEN IN 2 PINS', status1: true, status2: true },
    { parameter: 'MAIN DR OPEN OUT 2 PINS', status1: true, status2: true },
    { parameter: 'OHP PIM 1 A825 PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinkssix',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233034'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'5/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksFive
