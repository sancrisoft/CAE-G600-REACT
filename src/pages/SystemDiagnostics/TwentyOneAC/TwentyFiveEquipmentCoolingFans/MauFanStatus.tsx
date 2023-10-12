import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Legend from "../../../../components/Legend";
import StatusTable from "../../../../components/StatusTable";

const MauFanStatus = () => {
  const navigate = useNavigate();
  const data = [
    { parameter: 'FAN1', status1: true, status2: true },
    { parameter: 'FAN2', status1: true, status2: true },
    { parameter: 'FAN3', status1: true, status2: true },
  ]

  const tableHeader = [
    {
      title: 'MAU 1 FAN STATUS',
    },
    {
      title: 'NIC1',
    },
    {
      title: 'NIC2',
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'212503'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Mau 1 Fan Status'} right={'1/4'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MauFanStatus
