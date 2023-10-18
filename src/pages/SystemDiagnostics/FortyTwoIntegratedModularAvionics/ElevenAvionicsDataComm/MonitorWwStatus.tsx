import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MonitorWwStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'PROC5' }, { title: 'PROC9' }]
  const data = [
    { parameter: 'WOW', status1: true, status2: true },
    { parameter: 'PBIT ON GROUND', status1: true, status2: true },
    { parameter: 'IBIT ON GROUND', status1: false, status2: false },
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
      footer={<DataFooter left={'314105'} right={['Select done to continue']} />}
    >
      <DataHeader left={'monitor warning/wow status'} right={'1/1'} />
      <Legend title="on gnd" title2="in air" />
      <StatusTable data={data} tableHeader={tableHeader} hasDobleTitle title1="MW1" title2="MW2" />
    </DefaultLayout>
  )
}

export default MonitorWwStatus
