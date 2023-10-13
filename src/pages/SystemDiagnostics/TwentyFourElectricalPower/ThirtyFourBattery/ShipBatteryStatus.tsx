import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const ShipBatteryStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM2' }]

  const data = [
    { parameter: 'LEFT BATTERY SWITCH  ', status1: true, status2: true },
    { parameter: 'RIGHT BATTERY SWITCH  ', status1: true, status2: true },
    { parameter: 'EXT BATTERY SWITCH  ', status1: false, status2: false },
  ]

  const data2 = [
    { parameter: 'BATERY CONTACTOR 1', status1: false, status2: false },
    { parameter: '', status1: 'IOGM3', status2: 'IOGM4', color: 'blue' },
    { parameter: 'BATERY CONTACTOR 2', status1: false, status2: false },
  ]

  const data3 = [
    { parameter: 'LEFT BATTERY CHARGER', status1: true, status2: true },
    { parameter: '', status1: 'IOGM3', status2: 'IOGM4', color: 'blue' },
    { parameter: 'RIGHT BATTERY CHARGER', status1: true, status2: true },
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
      footer={<DataFooter left={'243403'} right={['Select done to continue']} />}
    >
      <DataHeader left={'main ship battery status'} right={'1/1'} />
      <Legend title="on" title2="off" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default ShipBatteryStatus
