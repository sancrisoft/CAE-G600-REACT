import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DuAgmStatus = () => {
  const navigate = useNavigate();

  const header1 = [{ title: 'DISPLAY UNIT STATUS' }, { title: 'AGM' }]
  const data1 = [
    { parameter: 'DU1', status1: true },
    { parameter: 'DU2', status1: true },
    { parameter: 'DU3', status1: true },
    { parameter: 'DU4', status1: true },
  ]

  const header2 = [{ title: 'AGM1 STATUS' }, { title: 'CMC' }]
  const data2 = [
    { parameter: 'AGM1', status1: true },
    { parameter: 'AGM2', status1: true },
    { parameter: 'AGM3', status1: true },
    { parameter: 'AGM4', status1: true },
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
      text: 'FWD',
      href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/fortyonemaudisplaylogic1/duagmstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'314110'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'DU/AGM Status'} right={'1/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data1} tableHeader={header1} />
      <StatusTable data={data2} tableHeader={header2} />
    </DefaultLayout>
  )
}

export default DuAgmStatus
