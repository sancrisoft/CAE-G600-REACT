import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFifteenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'NAVCOM TUN A429 RX PINS', status1: true, status2: true },
    { parameter: 'NAVCOM TUN A429 TX PINS', status1: true, status2: true },
    { parameter: 'NAVCOM DATALNK RX PINS', status1: true, status2: true },
    { parameter: 'NAVCOM DATALNK TX PINS', status1: true, status2: true },
    { parameter: 'REER OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'REER OVHT PINS', status1: true, status2: true },
    { parameter: 'REER OVHT CIR CHCK PINS', status1: true, status2: true },
    { parameter: 'V10 GALLEY A POS PINS', status1: true, status2: true },
    { parameter: 'V10 GALLEY B POS PINS', status1: true, status2: true },
    { parameter: 'V10 GALLEY DRN POS PINS', status1: true, status2: true },
    { parameter: 'V15 SPR VLV CLS PINS', status1: true, status2: true },
    { parameter: 'V15 SPR VLV OPN PINS', status1: true, status2: true },
    { parameter: 'PILOT 121.5 EMER SW PINS', status1: true, status2: true },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233048'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 15 LINKS'} right={'4/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCFifteenLinksFour
