import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSixteenLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'L TCAS DISP1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'TCAS CMC A429 RX PINS', status1: true, status2: true },
    { parameter: 'TCAS GPS A429 TX PINS', status1: true, status2: true },
    { parameter: 'TCAS RADALTI 429 TX PINS', status1: true, status2: true },
    { parameter: 'TCAS WOW PINS', status1: true, status2: true },
    { parameter: 'TCAS WOW PULL UP PINS', status1: true, status2: true },
    { parameter: 'V9 PWD LAV A POS PINS', status1: true, status2: true },
    { parameter: 'V9 PWD LAV B POS PINS', status1: true, status2: true },
    { parameter: 'V9 PWD LAV DRN POS PINS', status1: true, status2: true },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'4233056'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 16 LINKS'} right={'5/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} headerLanStatus={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCSixteenLinksFive
