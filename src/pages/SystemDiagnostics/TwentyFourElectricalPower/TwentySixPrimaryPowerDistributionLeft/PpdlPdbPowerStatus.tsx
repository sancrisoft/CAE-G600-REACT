import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";

const PpdlPdbPowerStatus = () => {
  const navigate = useNavigate();
  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'L MAIN AC VOLTS PH A', status1: '114.0 VAC', status2: '114.0 vac' },
    { parameter: 'L MAIN AC VOLTS PH B', status1: '114.0 VAC', status2: '114.0 vac' },
    { parameter: 'L MAIN AC VOLTS PH C', status1: '114.0 VAC', status2: '114.0 vac' },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionleft/ppdlpdbpowerstatus1',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245050'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'ppdl power status'} right={'1/9'} />
      <DataTable data={data} mainHeaders={tableHeader} leftAlign />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatus
