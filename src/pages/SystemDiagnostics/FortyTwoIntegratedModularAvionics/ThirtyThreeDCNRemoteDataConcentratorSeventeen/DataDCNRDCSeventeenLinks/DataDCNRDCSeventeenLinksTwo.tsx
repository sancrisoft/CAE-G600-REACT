import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSeventeenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'AUX OXY ON PINS', status1: true, status2: true },
    { parameter: 'CREW OXY OFF PINS', status1: true, status2: true },
    { parameter: 'PASS OXY OFF PINS', status1: true, status2: true },
    { parameter: 'THERAPEUTIC OXY ON PINS', status1: true, status2: true },
    { parameter: 'FUEL INTRTNK CLOSE PINS', status1: true, status2: true },
    { parameter: 'FUEL INTRTNK OPEN PINS', status1: true, status2: true },
    { parameter: 'FUEL XFLOW CLOSE PINS', status1: true, status2: true },
    { parameter: 'FUEL XFLOW OPEN PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOPT OVHT TST PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOPT OVHT PINS', status1: true, status2: true },
    { parameter: 'FWD FLR EOPT OVHT CHK PINS', status1: true, status2: true },
    { parameter: 'GCMS 1 CTRL A429 RX PINS', status1: true, status2: true },
    { parameter: 'GCMS 1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'L ALT BST PUMP RUN PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233060'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 17 LINKS'} right={'2/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSeventeenLinksTwo
