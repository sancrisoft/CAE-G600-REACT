import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight4 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: ' CONTACTOR' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'RAXC CMD', status1: true, status2: true },
    { parameter: 'RAXC STATUS', status1: true, status2: true },
    { parameter: 'ATAC CMD', status1: false, status2: false },
    { parameter: 'ATAC STATUS', status1: false, status2: false },
    { parameter: 'EAC CMD', status1: true, status2: true },
    { parameter: 'EAC STATUS', status1: true, status2: true },
    { parameter: 'REDCB STATUS', status1: false, status2: false },
    { parameter: 'LMDXC CMD', status1: false, status2: false },
    { parameter: 'LMDXC STATUS', status1: false, status2: false },
    { parameter: 'LEDXC CMD', status1: false, status2: false },
    { parameter: 'LEDXC STATUS', status1: false, status2: false },
    { parameter: 'RMFPC CMD', status1: false, status2: false },
    { parameter: 'RMFPC STATUS', status1: false, status2: false },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright5',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246007'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'5/12'} />
      <Legend title="closed" title2="open" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight4
