import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft4 = () => {
  const data = [
    { parameter: 'CONTROLLER ID PIN 1A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 2A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 3A', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4A', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 1b', status1: true, status2: true },
    { parameter: 'CONTROLLER ID PIN 2b', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 3b', status1: false, status2: false },
    { parameter: 'CONTROLLER ID PIN 4b', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'PARAMETER-CONFIGURATION' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
  ]
  const navigate = useNavigate();

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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft5',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215105'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'5/8'} isTitleLeft />
      <Legend title="GROUND" title2="OPEN" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AccStatusLeft4
