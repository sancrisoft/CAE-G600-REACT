import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenLinksThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'IRS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 2 A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDN 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDN 2 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PLDN 3 PINS', status1: true, status2: true },
    { parameter: 'IRS 2 OFF B PINS', status1: true, status2: true },
    { parameter: 'LDG GEAR RETRACTEDT PINS', status1: true, status2: true },
    { parameter: 'LDG GR RETRACT PLUP PINS', status1: true, status2: true },
    { parameter: 'MIC ON PINS', status1: true, status2: true },
    { parameter: 'OHP PIM 3 A825 PINS', status1: true, status2: true },
    { parameter: 'R BPCU CHA A825 PINS', status1: true, status2: true },
    { parameter: 'R GPS 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'R NAVACL HLTH SIG 1 PINS', status1: true, status2: true },
    { parameter: 'R NAVACL HLTH SIG 2 PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinksfour',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233054'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 16 LINKS'} right={'3/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenLinksThree
