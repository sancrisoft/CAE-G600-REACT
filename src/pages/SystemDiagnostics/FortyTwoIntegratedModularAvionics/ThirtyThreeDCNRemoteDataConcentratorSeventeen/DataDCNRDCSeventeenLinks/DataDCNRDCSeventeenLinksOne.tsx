import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSeventeenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: '60HZ CABIN L1 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L2 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L3 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L4 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L5 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L6 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CABIN L7 ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ CLOSET ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: '60HZ FWD LAV ENBLE PINS', status1: true, status2: true, noData: true},
    { parameter: 'A429 TX DATABUS PINS', status1: true, status2: true, noData: true},
    { parameter: 'ACOUSTIC DOOR CLSD PINS', status1: true, status2: true, noData: true},
    { parameter: 'AHRS 1 A429 RX PINS', status1: true, status2: true, noData: true},
    { parameter: 'AHRS 1 WOW PINS', status1: true, status2: true, noData: true},
    { parameter: 'CABIN WINDOW UNLOCK PINS', status1: true, status2: true, noData: true},
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
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorseventeen/datadcnrdcseventeenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233059'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 17 LINKS'} right={'1/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCSeventeenLinksOne
