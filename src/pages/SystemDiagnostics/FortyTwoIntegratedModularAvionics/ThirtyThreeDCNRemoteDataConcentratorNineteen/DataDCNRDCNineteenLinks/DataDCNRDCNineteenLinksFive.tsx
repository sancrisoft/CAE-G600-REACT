import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCNineteenLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'TL NAVACL HLTH SIG1 PINS', status1: true, status2: true },
    { parameter: 'TL NAVACL HLTH SIG2 PINS', status1: true, status2: true },
    { parameter: 'V11 A CLOSE PINS', status1: true, status2: true },
    { parameter: 'V11 A OPEN PINS', status1: true, status2: true },
    { parameter: 'V14 SPR V CLOSE PINS', status1: true, status2: true },
    { parameter: 'V14 SPR V OPEN PINS', status1: true, status2: true },
    { parameter: 'V2A TANK ISO CLOSE PINS', status1: true, status2: true },
    { parameter: 'V2A TANK ISO OPEN PINS', status1: true, status2: true },
    { parameter: 'V3A AFT DRN VALVE PINS', status1: true, status2: true },
    { parameter: 'V3A AFT SUP VALVE PINS', status1: true, status2: true },
    { parameter: 'V6 BLEED AIR CLOSE PINS', status1: true, status2: true },
    { parameter: 'V6 BLEED AIR OPEN PINS', status1: true, status2: true },
    { parameter: 'WLAN ACTIVATION DIS PINS', status1: true, status2: true },
    { parameter: 'WOW RF MUTE PINS', status1: true, status2: true },
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
      footer={<DataFooter left={'4233080'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 19 LINKS'} right={'5/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCNineteenLinksFive
