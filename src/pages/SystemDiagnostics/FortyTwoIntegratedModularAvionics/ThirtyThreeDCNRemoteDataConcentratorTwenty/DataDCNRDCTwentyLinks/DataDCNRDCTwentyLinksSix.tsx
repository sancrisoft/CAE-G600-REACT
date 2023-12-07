import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCTwentyLinksSix = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L HYD PRESS DC PINS', status1: true, status2: true },
    { parameter: 'R HYD PRESS DC PINS', status1: true, status2: true },
    { parameter: 'L HYD QTY XDCR PINS', status1: true, status2: true },
    { parameter: 'R HYD QTY XDCR PINS', status1: true, status2: true },
    { parameter: 'L HYD TEMP DC PINS', status1: true, status2: true },
    { parameter: 'R HYD TEMP DC PINS', status1: true, status2: true },
    { parameter: 'LAV SVC PNL LT 28V PINS', status1: true, status2: true },
    { parameter: 'MID ACC SVC DR OPN PINS', status1: true, status2: true },
    { parameter: 'NO SMOKING PINS', status1: true, status2: true },
    { parameter: 'OXYGEN PINS', status1: true, status2: true },
    { parameter: 'R AFT FLR OVHT TST PINS', status1: true, status2: true },
    { parameter: 'R AFT FLR OVHT PINS', status1: true, status2: true },
    { parameter: 'R AFT FLLR OVHT CHK PINS', status1: true, status2: true },
    { parameter: 'R BKHD BAG FAN FALT PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratortwenty/datadcnrdctwentylinksseven',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233089'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 20 LINKS'} right={'6/9'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCTwentyLinksSix
