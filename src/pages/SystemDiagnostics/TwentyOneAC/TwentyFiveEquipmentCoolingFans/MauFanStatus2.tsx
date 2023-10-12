import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";
const MauFanStatus2 = () => {
  const navigate = useNavigate();

  const data = [
    { parameter: 'FAN1', status1: true, status2: true },
    { parameter: 'FAN2', status1: true, status2: true },
    { parameter: 'FAN3', status1: true, status2: true },
  ]

  const tableHeader = [
    {
      title: 'MAU 2 FAN STATUS',
    },
    {
      title: 'NIC3',
    },
    {
      title: 'NIC4',
    },
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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'212505'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Mau 2 Fan Status'} right={'3/4'} />
      <Legend title="No fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MauFanStatus2
