import { useNavigate } from "react-router-dom";
import { NavBarButtonType } from "../../../../components/NavBar";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";

const PpdlPdbPowerStatusRight = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'R MAIN AC VOLTS PH A', status1: '114.0 VAC', status2: '114.0 VAC' },
    { parameter: 'R MAIN AC VOLTS PH B', status1: '114.0 VAC', status2: '114.0 VAC' },
    { parameter: 'R MAIN AC VOLTS PH C', status1: '114.0 VAC', status2: '114.0 VAC' },
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
      text: 'fwd',
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245051'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'1/12'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight
