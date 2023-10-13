import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'CONTACTOR' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'LAXC CMD',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LAXC STATUS',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'LEDCB STATUS',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDXC CMD',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'RMDXC STATUS',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDXC CMD',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'REDXC STATUS',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMFPC CMD',
      status1: false,
      status2: false,
      hasBorderBottom: true,
    },
    {
      parameter: 'LMFPC STATUS',
      status1: false,
      status2: false,
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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246002'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl power status'} right={'4/9'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatus3
