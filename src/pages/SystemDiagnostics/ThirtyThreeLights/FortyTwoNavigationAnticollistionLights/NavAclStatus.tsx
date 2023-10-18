import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const NavAclStatus = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'TAIL FAULT',
      status1: false,
      status2: false,
    },
    {
      parameter: 'LEFT WING FAULT',
      status1: false,
      status2: false,
    },
    {
      parameter: 'RIGHT WING FAULT',
      status1: false,
      status2: false,
    },
    {
      parameter: 'TAIL FAILURE',
      status1: false,
      status2: false,
    },
    {
      parameter: 'LEFT WING FAILURE',
      status1: false,
      status2: false,
    },
    {
      parameter: 'RIGHT WING FAILURE',
      status1: false,
      status2: false,
    },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM4' },
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
      footer={<DataFooter left={'334201'} right={['Select done to continue']} />}
    >
      <DataHeader left={'nav/acl status'} right={'1/1'} />
      <Legend title="false" title2="true" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default NavAclStatus
