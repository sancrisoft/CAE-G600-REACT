import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatus8 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'LOCKOUT' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'LAXC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LEDC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMDC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMFPC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDXC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDXC ANTI CYCLING',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
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
      footer={<DataFooter left={'246004'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'ppdl power status'} right={'9/9'} />
      <Legend title="no fault" title2="lockout" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatus8
