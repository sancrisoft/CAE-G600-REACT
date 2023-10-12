import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusRight2 = () => {
  const data = [
    { parameter: 'COCKPIT TAV TM FAULT', status1: true, status2: true },
    { parameter: 'COCKPIT ZONE SENSOR FAULT', status1: true, status2: true },
    { parameter: 'COCKPIT DUCT SENSOR FAULT', status1: true, status2: true },
    { parameter: 'COCKPIT DUCT OVERTEMP', status1: true, status2: true },
    { parameter: 'COCKPIT  TAV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'COCKPIT TAV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'COCKPIT TAV GADCIII FAULT', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'COCKPIT CABIN PARAMETERS' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
  ]
  const data1 = [
    { parameter: 'COCKPIT CAB IN AUTO', status1: true, status2: true },
    { parameter: 'AUTO TEMP FAIL C', status1: false, status2: false },
  ]

  const navigate = useNavigate();

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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215111'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Right air cond controller status'} right={'3/6'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data1} hasHeader={false} />
    </DefaultLayout>
  )
}

export default AccStatusRight2
