import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const EbhaBatteryStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM 2' }, { title: 'IOGM 4' }]

  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'IOGM 1' }, { title: 'IOGM 2' }]

  const data = [{ parameter: 'EBHA BATTERY CONTACTOR', status1: false, status2: false }]

  const data2 = [{ parameter: 'EBHA BATTERY CHARGER #1', status1: true, status2: true }]

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
      text: 'done',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'243401'} right={['Select done to continue']} />}
    >
      <DataHeader left={'ebha battery status'} right={'1/1'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default EbhaBatteryStatus
