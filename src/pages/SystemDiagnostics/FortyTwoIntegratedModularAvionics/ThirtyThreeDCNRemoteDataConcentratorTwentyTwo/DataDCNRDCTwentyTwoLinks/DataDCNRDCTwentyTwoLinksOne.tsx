import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyTwoLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'AFT CRW PA MUTEOUT PINS', status1: true, status2: true},
    { parameter: 'AFT LAV SMKDET MON PINS', status1: true, status2: true},
    { parameter: 'AFT LAV SMKDET FLT PINS', status1: true, status2: true},
    { parameter: 'AFT LAV SMKDET TEST PINS', status1: true, status2: true},
    { parameter: 'AUXHYD PRES DC PINS', status1: true, status2: true},
    { parameter: 'AUXHYD PRESS SNSR PINS', status1: true, status2: true},
    { parameter: 'L HYD PRESS DC PINS', status1: true, status2: true},
    { parameter: 'L HYD PRESS SNSR PINS', status1: true, status2: true},
    { parameter: 'L HYD TEMP DC PINS', status1: true, status2: true},
    { parameter: 'R HYD PRESS DC PINS', status1: true, status2: true},
    { parameter: 'R HYD PRESS SNSR PINS', status1: true, status2: true},
    { parameter: 'R HYD TEMP DC PINS', status1: true, status2: true},
    { parameter: 'R HYD TEMP SENSOR PINS', status1: true, status2: true},
    { parameter: 'BAG COMPT NO ENTRY PINS', status1: true, status2: true},
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwentytwo/datadcnrdctwentytwolinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233095'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 22 LINKS'} right={'1/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyTwoLinksOne
