import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../../components/DataFooter";
import DataHeader from "../../../../../components/DataHeader";
import DefaultLayout from "../../../../../components/Layout";
import Legend from "../../../../../components/Legend";
import { NavBarButtonType } from "../../../../../components/NavBar";
import StatusTable from "../../../../../components/StatusTable";

const DataDCNRDCSeventeenLinksFive = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'MLG DUMP VLV RESET PINS', status1: true, status2: true },
    { parameter: 'MLG MANF PROX SW PINS', status1: true, status2: true },
    { parameter: 'PSU FAN FAULT PINS', status1: true, status2: true },
    { parameter: 'PSU FAN SPD SEL H/L PINS', status1: true, status2: true },
    { parameter: 'PULSE ALL PINS', status1: true, status2: true },
    { parameter: 'R ALT BST PUMP RUN PINS', status1: true, status2: true },
    { parameter: 'R FMS GNRL A429 RX PINS', status1: true, status2: true },
    { parameter: 'RADALT 1 A429 RX PINS', status1: true, status2: true },
    { parameter: 'V4A FWD SUP-DRN PINS', status1: true, status2: true },
    { parameter: 'V4A FWD SUP-SUP PINS', status1: true, status2: true },
    { parameter: 'V5 FWD DRN-CLOSE PINS', status1: true, status2: true },
    { parameter: 'V5 FWD DRN-OPEN PINS', status1: true, status2: true },
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
      footer={<DataFooter left={'4233063'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'DCN RDC 17 LINKS'} right={'5/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNRDCSeventeenLinksFive
