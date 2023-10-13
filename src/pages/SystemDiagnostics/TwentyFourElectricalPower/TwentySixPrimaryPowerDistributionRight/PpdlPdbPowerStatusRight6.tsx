import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlPdbPowerStatusRight6 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: ' R AC CONT FAULT STATUS' }, { title: 'CH A' }, { title: 'CH B' }]

  const data = [
    { parameter: 'RAC STATUS MISMATCH', status1: true, status2: true },
    { parameter: 'EAC FAULT', status1: true, status2: true },
    { parameter: 'RAXC FAULT', status1: true, status2: true },
    { parameter: 'ATAC FAULT', status1: true, status2: true },
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
      href: '/systemdiagnostics/twentyfourelectricalpower/twentysixprimarypowerdistributionright/ppdlpdbpowerstatusright7',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'245028'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'ppdr power status'} right={'7/12'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default PpdlPdbPowerStatusRight6
