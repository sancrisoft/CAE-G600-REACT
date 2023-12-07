import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'AUX TRU HOT A PINS', status1: true, status2: true},
    { parameter: 'LESS TRU HOT A PINS', status1: true, status2: true},
    { parameter: 'LMN TRU HOT A PINS', status1: true, status2: true},
    { parameter: 'RESS TRU HOT A PINS', status1: true, status2: true},
    { parameter: 'RMN TRU HOT A PINS', status1: true, status2: true},
    { parameter: 'CABIN DFRN >10.8 PINS', status1: true, status2: true},
    { parameter: 'CABIN DFRN >11 PINS', status1: true, status2: true},
    { parameter: 'CABIN PRESS LOW PINS', status1: true, status2: true},
    { parameter: 'CHIME CONTACT HI PINS', status1: true, status2: true},
    { parameter: 'CMU VDR2 A429 RX PINS', status1: true, status2: true},
    { parameter: 'CMU VDR2 A429 TX PINS', status1: true, status2: true},
    { parameter: 'CKPT CALL LHT OUT1 PINS', status1: true, status2: true},
    { parameter: 'CPAM A429 RX PINS', status1: true, status2: true},
    { parameter: 'CPAM FAIL 1 PINS', status1: true, status2: true},
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorsixteen/datadcnrdcsixteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233052'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 16 LINKS'} right={'1/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenLinksOne
