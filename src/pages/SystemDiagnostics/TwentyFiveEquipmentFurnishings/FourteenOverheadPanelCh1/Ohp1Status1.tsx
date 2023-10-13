import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import StatusTable from "../../../../components/StatusTable";

const Ohp1Status1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'PIM FAIL', status1: true, status2: true },
    { parameter: 'PIM APP CRC FAIL', status1: true, status2: true },
    { parameter: 'PIM RAM FAIL', status1: true, status2: true },
    { parameter: 'PIM NVM FAIL', status1: true, status2: true },
    { parameter: 'PIM CAN FAIL', status1: true, status2: true },
    { parameter: 'PIM HW WDT FAIL', status1: true, status2: true },
    { parameter: 'PIM TABLE CRC FAIL 1', status1: true, status2: true },
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
      footer={<DataFooter left={'251408'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'Overhead Panel 1 Status'} right={'2/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default Ohp1Status1
