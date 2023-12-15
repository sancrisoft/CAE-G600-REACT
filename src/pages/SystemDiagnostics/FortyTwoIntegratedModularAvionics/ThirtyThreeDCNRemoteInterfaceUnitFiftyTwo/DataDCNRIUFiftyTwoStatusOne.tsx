import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DataDCNRIUFiftyTwoStatusOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'CORE FAILURE', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST CHECK', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST CRC', status1: true, status2: true },
    { parameter: 'CONFIG MANIFEST AVAIL', status1: true, status2: true },
    { parameter: 'RIU COMMS FAULT', status1: true, status2: true },
    { parameter: 'UTC TIME AVAILABLE', status1: true, status2: true },
    { parameter: 'DATE AVAILABLE', status1: true, status2: true },
    { parameter: 'A/C REGIS AVAILABLE', status1: true, status2: true },
    { parameter: 'CWOW AVAILABLE', status1: true, status2: true },
    { parameter: 'AIRSPEED AVAILABLE', status1: true, status2: true },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate('/systemdiagnostics');
      },
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremoteinterfaceunitfiftytwo/datadcnriufiftytwostatustwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233101'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RIU 52 STATUS'} right={'1/2'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRIUFiftyTwoStatusOne
