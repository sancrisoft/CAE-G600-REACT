import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AscbStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'PARAMETER' },
    { title: 'PRI 1' },
    { title: 'BUP 1' },
    { title: 'PRI 2' },
    { title: 'BUP 2' },
  ]
  const data = [
    { parameter: 'MRC1 NIC', statuses: [true, true, true, 'N/A'] },
    { parameter: 'NIC2', statuses: [true, 'N/A', true, true] },
    { parameter: 'NIC1', statuses: [true, true, true, 'N/A'] },
    { parameter: 'NIC4', statuses: [true, 'N/A', true, true] },
    { parameter: 'NIC3', statuses: [true, true, true, 'N/A'] },
    { parameter: 'MRC2 NIC', statuses: [true, 'N/A', true, true] },
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
      footer={<DataFooter left={'314102'} right={['Select done to continue']} />}
    >
      <DataHeader left={'ASCB status'} right={'1/1'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AscbStatus
