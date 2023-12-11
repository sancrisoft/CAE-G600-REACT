import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'GSB CTRL PINS', status1: true, status2: true },
    { parameter: 'GSB CTRL RLY 1 CTRL PINS', status1: true, status2: true },
    { parameter: 'GSB ON IND PWR PINS', status1: true, status2: true },
    { parameter: 'GSBC 1 CTRL PINS', status1: true, status2: true },
    { parameter: 'GSBC 1 STATUS PINS', status1: true, status2: true },
    { parameter: 'GSBC 2 CTRL PINS', status1: true, status2: true },
    { parameter: 'GSBC 2 STATUS PINS', status1: true, status2: true },
    { parameter: 'GSBC 3 STATUS PINS', status1: true, status2: true },
    { parameter: 'IRS 3 DATA A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 3 DATA A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF B PLDWN 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF B PLDWN 2 PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF B PLDWN 3 PINS', status1: true, status2: true },
    { parameter: 'IRS 3 OFF B PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233069'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'4/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksFour
