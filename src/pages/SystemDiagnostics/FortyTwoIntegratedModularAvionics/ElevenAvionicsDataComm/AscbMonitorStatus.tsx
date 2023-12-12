import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const AscbMonitorStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'MODULE' }, { title: 'PRIMARY BUS 1' }, { title: 'BACK-UP BUS 2' }]
  const data1 = [
    { parameter: 'RNIC1', status1: 'active', status2: 'active' },
    { parameter: 'NIC2', status1: 'active', status2: 'N/A' },
    { parameter: 'NIC1', status1: 'active', status2: 'active' },
    { parameter: 'NIC3', status1: 'active', status2: 'active' },
    { parameter: 'NIC4', status1: 'active', status2: 'N/A' },
    { parameter: 'RNIC2', status1: 'active', status2: 'N/A' },
  ]
  const data2 = [
    { parameter: 'RNIC1', status1: 'active', status2: 'N/A' },
    { parameter: 'NIC2', status1: 'active', status2: 'active' },
    { parameter: 'NIC1', status1: 'active', status2: 'N/A' },
    { parameter: 'NIC3', status1: 'active', status2: 'N/A' },
    { parameter: 'NIC4', status1: 'active', status2: 'active' },
    { parameter: 'RNIC2', status1: 'active', status2: 'active' },
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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'314101'} right={['Select done to continue']} />}
    >
      <DataHeader left={'ASCB monitor status'} right={'1/1'} />
      <DataTable data={data1} mainHeaders={tableHeader} leftAlign headerLeftAlign />
      <DataTable data={data2} mainHeaders={tableHeader} leftAlign headerLeftAlign marginTop />
    </DefaultLayout>
  )
}

export default AscbMonitorStatus
