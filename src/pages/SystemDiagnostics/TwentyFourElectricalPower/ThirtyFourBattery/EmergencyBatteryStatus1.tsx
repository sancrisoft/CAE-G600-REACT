import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const EmergencyBatteryStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]

  const data = [{ parameter: 'AFT BATTERY ON STATUS', status1: false, status2: false }]

  const data2 = [{ parameter: 'AFT BATTERY ARMED', status1: false, status2: false }]

  const data3 = [{ parameter: 'AFT E BATTERY FAIL', status1: true, status2: true }]

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
      text: 'PREV',
      disabled: false,
      position: 4,
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
      footer={<DataFooter left={'243402'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'emergency battery status'} right={'2/2'} />
      <Legend title="on" title2="off" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="armed" title2="not armed" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader} />
      <Legend title="no fail" title2="fail" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default EmergencyBatteryStatus1
