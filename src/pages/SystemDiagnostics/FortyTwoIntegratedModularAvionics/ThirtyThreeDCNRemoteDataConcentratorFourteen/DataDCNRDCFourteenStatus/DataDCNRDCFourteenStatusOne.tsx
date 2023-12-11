import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFourteenStatusOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CORE FAILURE', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST CHECK', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST CRC', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST AVAIL', status1: true, status2: true },
    { parameter: 'CONFIGURATIONS PINS', status1: true, status2: true },
    { parameter: 'END SYSTEM PHY A', status1: true, status2: true },
    { parameter: 'END SYSTEM PHY B', status1: true, status2: true },
    { parameter: 'HOLD UP CAPABILITY', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenstatustwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233037'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 14 STATUS'} right={'1/2'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCFourteenStatusOne
