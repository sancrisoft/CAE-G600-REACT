import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSeventeenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'INBD ACC PRES XDCR PINS', status1: true, status2: true },
    { parameter: 'INBD PKG PRES XDCR PINS', status1: true, status2: true },
    { parameter: 'GCMS 1 CTRL A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 3 A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 3 A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF A PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF A PLDN 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF A PLDN 2 PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF A PLDN 3 PINS', status1: true, status2: true },
    { parameter: 'L BPCU B A825 PINS', status1: true, status2: true },
    { parameter: 'L FUEL SOV CLOSED PINS', status1: true, status2: true },
    { parameter: 'L FUEL SOV OPEN PINS', status1: true, status2: true },
    { parameter: 'R FUEL SOV CLOSED PINS', status1: true, status2: true },
    { parameter: 'R FUEL SOV OPEN PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233061'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 17 LINKS'} right={'3/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSeventeenLinksThree
