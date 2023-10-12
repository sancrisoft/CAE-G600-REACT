import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import TwoColumnsTable from "../../../../components/TwoColumnsTable";

const MauFanStatus3 = () => {
  const navigate = useNavigate();

  const data = [
    { fan: 'CH A NIC 3', description: 'FAN IS OPERATING CORRECTLY' },
    { fan: 'CH B NIC 3', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH A NIC 4', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH B NIC 4', description: 'FAN IS OPERATING CORRECTLY' },
  ]

  const data2 = [
    { fan: 'CH A NIC 3', description: 'INVALID STATE' },
    { fan: 'CH B NIC 3', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH A NIC 4', description: 'XXXXXXXXXXXXXXXXXXXXXXXXXX' },
    { fan: 'CH B NIC 4', description: 'INVALID STATE' },
  ]

  const tableHeader = [{ title: ' FAN 1 MONITOR' }, { title: ' FAN 2 MONITOR' }]
  const tableHeader2 = [{ title: ' FAN 3 MONITOR' }]

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
      footer={<DataFooter left={'212506'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'Mau 2 Fan Status'} right={'4/4'} />
      <TwoColumnsTable data={data} tableHeader={tableHeader} />
      <TwoColumnsTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default MauFanStatus3
