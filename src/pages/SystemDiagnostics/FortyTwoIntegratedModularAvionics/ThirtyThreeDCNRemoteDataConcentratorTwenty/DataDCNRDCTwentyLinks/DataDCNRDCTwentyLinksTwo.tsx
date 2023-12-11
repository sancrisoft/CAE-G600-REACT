import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'APU FIRE DETECT TST PINS', status1: true, status2: true },
    { parameter: 'APU FIRE SOV PINS', status1: true, status2: true },
    { parameter: 'APU FUEL SOV OPN PINS', status1: true, status2: true },
    { parameter: 'APU FUEL SOV CLSD PINS', status1: true, status2: true },
    { parameter: 'B/C DECOMPRESS SW 2 PINS', status1: true, status2: true },
    { parameter: 'BAG COMPT LTS PINS', status1: true, status2: true },
    { parameter: 'CABIN SERVER PINS', status1: true, status2: true },
    { parameter: 'CABIN SRVR A429 PINS', status1: true, status2: true },
    { parameter: 'COMPT SW PNL LTS PINS', status1: true, status2: true },
    { parameter: 'EBHA BAT CHRG PWR PINS', status1: true, status2: true },
    { parameter: 'EBHA BATT HOT PINS', status1: true, status2: true },
    { parameter: 'ELT TRANSMITTING PINS', status1: true, status2: true },
    { parameter: 'ELT: IRS A429 PINS', status1: true, status2: true },
    { parameter: 'FAULT MONITOR PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233085'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'2/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksTwo
