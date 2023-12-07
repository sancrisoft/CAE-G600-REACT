import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksSeven = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'REFUEL PNL LT1 OT PINS', status1: true, status2: true },
    { parameter: 'REFUEL PNL LT2 OT PINS', status1: true, status2: true },
    { parameter: 'REFUEL SVC DR1 OPN PINS', status1: true, status2: true },
    { parameter: 'REFUEL SVC DR2 OPN PINS', status1: true, status2: true },
    { parameter: 'RETEAC STATUS PINS', status1: true, status2: true },
    { parameter: 'TSC 5 WOW PINS', status1: true, status2: true },
    { parameter: 'TSC 5 A429 RX PINS', status1: true, status2: true },
    { parameter: 'TSC 5 GSB A429 TX PINS', status1: true, status2: true },
    { parameter: 'V4B FWD SUP-DRN POS PINS', status1: true, status2: true },
    { parameter: 'V4B FWD SUP-SUP POS PINS', status1: true, status2: true },
    { parameter: 'VEST DOME LT SW PINS', status1: true, status2: true },
    { parameter: 'WHEEL WELL LTS PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkseight',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233072'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'6/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksSeven
