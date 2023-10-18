import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const WingTempLeft = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER-DCN' }, { title: 'IOGM1' }, { title: 'IOGM3' }]
  const data1 = [
    { parameter: 'L WING TEMP LOW', status1: false, status2: 'N/A' },
    { parameter: 'L WING HOT', status1: true, status2: 'N/A' },
    { parameter: 'R WING TEMP LOW', status1: 'N/A', status2: false },
    { parameter: 'R WING HOT', status1: 'N/A', status2: true },
  ]

  const tableHeader2 = [{ title: 'PARAMETER-FCC' }, { title: 'IOGM1' }, { title: 'IOGM3' }]
  const data2 = [
    { parameter: 'L WING TEMP LOW', status1: false, status2: 'N/A' },
    { parameter: 'L WING HOT', status1: true, status2: 'N/A' },
    { parameter: 'R WING TEMP LOW', status1: 'N/A', status2: false },
    { parameter: 'R WING HOT', status1: 'N/A', status2: true },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'361211'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'WING ANTI-ICE INDICATION'} right={'1/1'} />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader1} hasDobleTitle title1="RDC17" title2="RDC18" />
      <StatusTable data={data2} tableHeader={tableHeader2} hasDobleTitle title1="FCC1" title2="FCC2" />
    </DefaultLayout>
  )
}

export default WingTempLeft
