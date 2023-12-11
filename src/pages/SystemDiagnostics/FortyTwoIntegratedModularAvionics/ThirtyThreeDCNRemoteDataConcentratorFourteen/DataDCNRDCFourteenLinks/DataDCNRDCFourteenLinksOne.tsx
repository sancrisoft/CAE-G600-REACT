import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFourteenLinksOne = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: '60HZ CNSL R ENABLE PINS', status1: true, status2: true },
    { parameter: 'ADS 4 A429 RX PINS', status1: true, status2: true },
    { parameter: 'ADS 4 A429 TX PINS', status1: true, status2: true },
    { parameter: 'AP2 BUTTON ARM PINS', status1: true, status2: true },
    { parameter: 'COPILOT ACS 2 A429 RX PINS', status1: true, status2: true },
    { parameter: 'COPILOT ACS 2 A825 PINS', status1: true, status2: true },
    { parameter: 'COPILOT ACS 1 A825 PINS', status1: true, status2: true },
    { parameter: 'CAS CHME MUTE PINS', status1: true, status2: true },
    { parameter: 'CPC A429 TX PINS', status1: true, status2: true },
    { parameter: 'EXTAC PWR DR SW OPN PINS', status1: true, status2: true },
    { parameter: 'EXTDC PWR DR SW OPN PINS', status1: true, status2: true },
    { parameter: 'FCS UPS BATT FAULT PINS', status1: true, status2: true },
    { parameter: 'FCS UPS PWR OFF PINS', status1: true, status2: true },
    { parameter: 'FD2 BUTTON ARM PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinkstwo',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233039'} right={['Select PWD to continue']} />}
    >
      <DataHeader left={'DCN RDC 14 LINKS'} right={'1/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCFourteenLinksOne
