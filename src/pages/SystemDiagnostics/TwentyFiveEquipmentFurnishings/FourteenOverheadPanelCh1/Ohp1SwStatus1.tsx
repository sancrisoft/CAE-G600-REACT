import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import StatusTable from "../../../../components/StatusTable";

const Ohp1SwStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'BLEED AIR R ENG', status1: false, status2: false },
    { parameter: 'BLEED AIR ISOLATION', status1: true, status2: true },
    { parameter: 'FAULT MANUAL', status1: true, status2: true },
    { parameter: 'CABIN GALLEY', status1: false, status2: false },
    { parameter: 'CABIN 60HZ', status1: false, status2: false },
    { parameter: 'APU MASTER', status1: true, status2: true },
    { parameter: 'MASTER DIM OVERRIDE', status1: true, status2: true },
    { parameter: 'APU FIRE EXT', status1: true, status2: true },
    { parameter: 'ENGINE START SW', status1: true, status2: true },
    { parameter: 'EBHA FLT CTRL BATT', status1: true, status2: true },
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
      footer={<DataFooter left={'251402'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'Overhead Panel 1 SW Status'} right={'2/2'} />
      <Legend title="depressed" title2="extended" firstIsRed />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Ohp1SwStatus1
