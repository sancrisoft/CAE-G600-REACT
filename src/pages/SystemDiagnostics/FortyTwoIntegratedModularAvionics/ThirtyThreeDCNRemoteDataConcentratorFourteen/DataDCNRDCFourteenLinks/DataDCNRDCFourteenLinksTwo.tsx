import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCFourteenLinksTwo = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'HI ALT SEL PINS', status1: true, status2: true },
    { parameter: 'IRS 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'IRS 1 R GP A429 TX PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF B PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF B PLDWN1 PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF B PLDWN2 PINS', status1: true, status2: true },
    { parameter: 'IRS 1 OFF B PLDWN3 PINS', status1: true, status2: true },
    { parameter: 'L FIRE HDL PULL PINS', status1: true, status2: true },
    { parameter: 'R FIRE HDL PULL PINS', status1: true, status2: true },
    { parameter: 'L WSHLD TMP SNSR 3 PINS', status1: true, status2: true },
    { parameter: 'R WSHLD TMP SNSR 3 PINS', status1: true, status2: true },
    { parameter: 'R FRT WSHLD TMPSNR1 PINS', status1: true, status2: true },
    { parameter: 'L WX A429 TX PINS', status1: true, status2: true },
    { parameter: 'OHP PIM 2 A825 PINS', status1: true, status2: true },
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtythreedcnremotedataconcentratorfourteen/datadcnrdcfourteenlinksthree',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233040'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 14 LINKS'} right={'2/4'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true}/>
    </DefaultLayout>
  )
}

export default DataDCNRDCFourteenLinksTwo
