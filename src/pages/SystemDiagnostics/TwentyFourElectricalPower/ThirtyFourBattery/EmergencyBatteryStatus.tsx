import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import StatusTable from "../../../../components/StatusTable";

const EmergencyBatteryStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM1' }, { title: 'IOGM2' }]

  const data = [{ parameter: 'FWD BATTERY ON STATUS', status1: false, status2: false }]

  const data2 = [{ parameter: 'FWD BATTERY ARMED', status1: false, status2: false }]

  const data3 = [{ parameter: 'FWD E BATTERY FAIL', status1: true, status2: true }]

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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/thirtyfourbattery/emergencybatterystatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'243402'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'emergency battery status'} right={'1/2'} />
      <Legend title="on" title2="off" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="armed" title2="not armed" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader} />
      <Legend title="not fail" title2="fail" />
      <StatusTable data={data3} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default EmergencyBatteryStatus
