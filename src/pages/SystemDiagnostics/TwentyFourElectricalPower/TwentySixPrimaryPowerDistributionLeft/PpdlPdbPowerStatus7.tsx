import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatus7 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'CONTACTOR' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'LAXC LOCKOUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LEDC LOCKOUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMDC LOCKOUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMFPC LOCKOUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDXC LOCKOUT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDXC LOCKOUT',
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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus8',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246003'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl power status'} right={'8/9'} />
      <Legend title="no fault" title2="lockout" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatus7
