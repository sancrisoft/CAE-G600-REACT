import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCThirteenLinksSix = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'NLG DUMP VLV RST SW PINS', status1: true, status2: true },
    { parameter: 'NLG MAF PROX SW PINS', status1: true, status2: true },
    { parameter: 'NWS A429 RX PINS', status1: true, status2: true },
    { parameter: 'NWS 1 A429 TX PINS', status1: true, status2: true },
    { parameter: 'PILOT ACS 1 A825 PINS', status1: true, status2: true },
    { parameter: 'PILOT ACS 2 A825 PINS', status1: true, status2: true },
    { parameter: 'PILOT ACS A429 RX PINS', status1: true, status2: true },
    { parameter: 'STBY 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'STBY 1 A429 RT PINS', status1: true, status2: true },
    { parameter: 'STBY 1 DATALD ENBALE PINS', status1: true, status2: true },
    { parameter: 'STBY 1 WOW PINS', status1: true, status2: true },
    { parameter: 'WARN CAUT RESET PINS', status1: true, status2: true },
    { parameter: 'TSC 1 WOW PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorthirteen/datadcnrdcthirteenlinksseven',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233035'} right={['Select prev to go back', 'Select fwd to continue']}  />}
    >
      <DataHeader left={'DCN RDC 13 LINKS'} right={'6/7'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCThirteenLinksSix
