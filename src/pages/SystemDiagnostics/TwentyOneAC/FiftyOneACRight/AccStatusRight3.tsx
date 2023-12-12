import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusRight3 = () => {
  const data = [
    { parameter: 'CONTROLLER ID PIN 1A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 2A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 3A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 1B', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 2B', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 3B', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4B', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'PARAMETER-CONFIGURATION' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
  ]

  const navigate = useNavigate();

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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215112'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Right air cond controller status'} right={'4/6'} isTitleLeft />
      <Legend title="GROUND" title2="OPEN" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AccStatusRight3
