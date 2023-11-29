import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksFour = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'IRS 1 DATA A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 1 GP A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF A PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF A PLDWN 1 PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF A PLDWN 2 PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF A PLDWN 3 PINS', status1: true, status2: true },
    { parameter: 'L FRT WSLD TMPSNSR1 PINS', status1: true, status2: true },
    { parameter: 'L WSLD TMP SNSR2 PINS', status1: true, status2: true },
    { parameter: 'R WSLD TMP SNSR2 PINS', status1: true, status2: true },
    { parameter: 'L GPS 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'L TO/GA 1 PINS', status1: true, status2: true },
    { parameter: 'L TO/GA 2 PINS', status1: true, status2: true },
    { parameter: 'L TQA CABIN PRESS PINS', status1: true, status2: true },
    { parameter: 'L TR STW/DPLY SW 1 PINS', status1: true, status2: true },
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
      text: 'PREV',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksfive',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233033'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'4/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksFour
