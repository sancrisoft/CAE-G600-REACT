import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const UpsBatteryStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM2' }, { title: 'IOGM4' }]

  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]

  const data = [{ parameter: 'UPS BATTERY CONTACTOR  ', status1: false, status2: false }]

  const data2 = [
    { parameter: 'UPS BATTERY CHARGER/TRU', status1: true, status2: true },
    { parameter: '', status1: 'IOGM3', color: 'blue', colspan: 2 },
    { parameter: 'UPS BATTERY FAULT', status1: true, colspan: 2 },
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
      footer={<DataFooter left={'243404'} right={['Select done to continue']} />}
    >
      <DataHeader left={'ups battery status'} right={'1/1'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default UpsBatteryStatus
