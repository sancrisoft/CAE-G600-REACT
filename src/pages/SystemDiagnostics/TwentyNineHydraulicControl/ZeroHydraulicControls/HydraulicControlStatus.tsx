import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const HydraulicControlStatus = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data1 = [
    { parameter: 'L HYD FWSOV OPEN', status1: true, status2: true },
    { parameter: 'L HYD FWSOV CLOSED', status1: false, status2: false },
    { parameter: 'R HYD FWSOV OPEN', status1: true, status2: true },
    { parameter: 'R HYD FWSOV CLOSED', status1: false, status2: false },
  ]

  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data2 = [
    { parameter: 'AUX PUMP ON', status1: false, status2: false },
    { parameter: 'AUX PUMP TEMP NOT HOT', status1: true, status2: true },
    { parameter: 'AUX PUMP OVLD NOT OVLD', status1: true, status2: true },
    { parameter: 'PTU SOV OPEN', status1: false, status2: false },
    { parameter: 'L HYD SVC SOV CLOSED', status1: true, status2: true },
  ]

  const tableHeader3 = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data3 = [
    { parameter: 'PTU SOV CLOSED', status1: true, status2: true },
    { parameter: 'R HYD SVC SOV CLOSED', status1: true, status2: true },
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
      footer={<DataFooter left={'290001'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Hydraulic Control Status'} right={'1/1'} />
      <Legend title="true" title2="false" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
      <StatusTable data={data3} tableHeader={tableHeader3} />
    </DefaultLayout>
  )
}

export default HydraulicControlStatus
