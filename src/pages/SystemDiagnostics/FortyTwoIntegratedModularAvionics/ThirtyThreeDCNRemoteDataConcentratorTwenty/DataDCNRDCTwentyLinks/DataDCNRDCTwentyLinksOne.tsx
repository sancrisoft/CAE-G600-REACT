import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: '1/2 SYSTEM A PINS', status1: true, status2: true },
    { parameter: '1/2 SYSTEM B PINS', status1: true, status2: true },
    { parameter: '1/4 SYSTEM B PINS', status1: true, status2: true },
    { parameter: '1/4 SYSTEM A PINS', status1: true, status2: true },
    { parameter: '3/4 SYSTEM B PINS', status1: true, status2: true },
    { parameter: '3/4 SYSTEM A PINS', status1: true, status2: true },
    { parameter: 'AFT BEER OVHT TEST PINS', status1: true, status2: true },
    { parameter: 'AFT BEER OVRHT PINS', status1: true, status2: true },
    { parameter: 'AFT BEER OVRHT CHK PINS', status1: true, status2: true },
    { parameter: 'AFT BEER FAN FAULT PINS', status1: true, status2: true },
    { parameter: 'AFT CAB MAN TMP SEL PINS', status1: true, status2: true },
    { parameter: 'ALARM MONITOR PINS', status1: true, status2: true },
    { parameter: 'APU ECU A429 RX PINS', status1: true, status2: true },
    { parameter: 'APU ECU A429 TX PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233084'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'1/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksOne
