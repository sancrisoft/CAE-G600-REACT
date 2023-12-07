import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DataDCNSwitchFourStatusThree = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'SW4 - SW3 LINK', status1: true, status2: true },
    { parameter: 'SW4 - RDC 12 LINK', status1: true, status2: true },
    { parameter: 'SW4 - RDC 14 LINK', status1: true, status2: true },
    { parameter: 'SW4 - RDC 16 LINK', status1: true, status2: true },
    { parameter: 'SW4 - RDC 18 LINK', status1: true, status2: true },
    { parameter: 'SW4 - RDC 20 LINK', status1: true, status2: true },
    { parameter: 'SW4 - IOGM 3 LINK', status1: true, status2: true },
    { parameter: 'SW4 - IOGM 4 LINK', status1: true, status2: true },
    { parameter: 'SW4 - ESC 2B LINK', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'SW4 - MAINT PORT LINK', status1: false, status2: false },
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
      footer={<DataFooter left={'4233018'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'SWITCH 04 STATUS'} right={'3/3'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} tableHeader={tableHeader} reducedHeaderTitle={true} />
      <Legend title="no fault" title2="chk cond" />
      <StatusTable data={data2} tableHeader={tableHeader} reducedHeaderTitle={true} />
    </DefaultLayout>
  )
}

export default DataDCNSwitchFourStatusThree
