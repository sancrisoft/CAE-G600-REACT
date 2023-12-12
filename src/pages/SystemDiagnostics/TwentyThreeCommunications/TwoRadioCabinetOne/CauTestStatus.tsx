import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const CauTestStatus = () => {
  const navigate = useNavigate();
  const datalx = [
    {
      parameter: 'PILOT CAU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'COPILOT CAU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'OBSVR CAU',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const tableHeader = [
    { title: 'CAU FAIL STATUS' },
    { title: 'NIM1' },
    { title: 'NIM2' },
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
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'230201'} right={['Select done to continue']} />}
    >
      <DataHeader left={'cau status'} right={'1/1'} />
      <Legend title="no fail" title2="fail" />
      <StatusTable data={datalx} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default CauTestStatus
