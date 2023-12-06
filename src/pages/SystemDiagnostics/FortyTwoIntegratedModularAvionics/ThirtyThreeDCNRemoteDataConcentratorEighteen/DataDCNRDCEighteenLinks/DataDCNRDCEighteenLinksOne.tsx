import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCEighteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: '60HZ AFT LAV ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R1 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R2 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R3 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R4 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R5 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R6 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ CABIN R7 ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ GALLY L ENBLE PINS', status1: true, status2: true },
    { parameter: '60HZ GALLY R ENBLE PINS', status1: true, status2: true },
    { parameter: 'A429 TX DATABUS PINS', status1: true, status2: true },
    { parameter: 'AFT CREW ORD DIM OUT PINS', status1: true, status2: true },
    { parameter: 'AFT CREW OXY MUTE OUT PINS', status1: true, status2: true },
    { parameter: 'AIR STAIR LT SW PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratoreighteen/datadcnrdceighteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233066'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 18 LINKS'} right={'1/8'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCEighteenLinksOne
