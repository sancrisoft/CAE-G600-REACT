import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight11 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'CONTACTORS' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'GSBC 1 STATUS', status1: false, status2: false },
    { parameter: 'GSBC 2 STATUS', status1: false, status2: false },
    { parameter: 'GSBC 3 STATUS', status1: true, status2: true },
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
      text: 'prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'done',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245004'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'12/12'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight11
