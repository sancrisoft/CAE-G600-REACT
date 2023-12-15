import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import TwoColumnsTable from "../../../../components/TwoColumnsTable";

const MauFanStatus1 = () => {
  const navigate = useNavigate();

  const data = [
    { fan: 'CH A NIC 1', description: 'FAN IS OPERATING CORRECTLY' },
    { fan: 'CH B NIC 1', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH A NIC 2', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH B NIC 2', description: 'FAN IS OPERATING CORRECTLY' },
  ]

  const tableHeader = [{ title: ' FAN 1 MONITOR' }, { title: ' FAN 2 MONITOR' }, { title: ' FAN 3 MONITOR' }]

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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/twentyfiveequipmentcoolingfans/maufanstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'212504'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Mau 1 Fan Status'} right={'2/4'} />
      <TwoColumnsTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default MauFanStatus1
