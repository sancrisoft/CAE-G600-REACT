import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight9 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'LOCKOUT' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'ADBC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'ATAC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'EAC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'EDC/ADC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'LEDXC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'LMDXC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'RAXC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'REDC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'RMDC ANTI CYCLING', status1: true, status2: true },
    { parameter: 'RMFPC ANTI CYCLING', status1: true, status2: true },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright10',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246008'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'10/12'} />
      <Legend title="no fault" title2="lockout" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight9
