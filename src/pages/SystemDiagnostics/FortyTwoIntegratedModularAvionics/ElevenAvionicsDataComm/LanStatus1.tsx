import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LanStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'CMC' }]
  const data = [
    { parameter: 'TSC1', status1: true },
    { parameter: 'TSC2', status1: true },
    { parameter: 'TSC3', status1: true },
    { parameter: 'TSC4', status1: true },
    { parameter: 'TSC5', status1: true },
    { parameter: 'WEATHER RADAR', status1: true },
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
      footer={<DataFooter left={'314104'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Lan status'} right={'2/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default LanStatus1
