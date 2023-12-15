import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'R WSHLD RAT PINS', status1: true, status2: true },
    { parameter: 'R WX A429 TX PINS', status1: true, status2: true },
    { parameter: 'WX CMC A429 RX PINS', status1: true, status2: true },
    { parameter: 'WX IRS2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'RAT VOLT FREO PINS', status1: true, status2: true },
    { parameter: 'REER OVHT PINS', status1: true, status2: true },
    { parameter: 'REER OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'REER OVHT CIR CHCK PINS', status1: true, status2: true },
    { parameter: 'REER FAN FAULT IN PINS', status1: true, status2: true },
    { parameter: 'REER FANSPD SEL H/L PINS', status1: true, status2: true },
    { parameter: 'TROV MAN POS 1  PINS', status1: true, status2: true },
    { parameter: 'V13 SPR VLV CLOSE PINS', status1: true, status2: true },
    { parameter: 'V13 SPR VLV OPEN PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233055'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 16 LINKS'} right={'4/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenLinksFour
