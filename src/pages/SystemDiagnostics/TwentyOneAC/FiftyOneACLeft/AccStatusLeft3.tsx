import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft3 = () => {
  const data1 = [
    { parameter: 'AFT TAV TM FAULT', status1: true, status2: true },
    { parameter: 'AFT ZONE SENSOR FAULT', status1: true, status2: true },
    { parameter: 'AFT DUCT SENSOR FAULT', status1: true, status2: true },
    { parameter: 'AFT DUCT OVERTEMP', status1: true, status2: true },
    { parameter: 'AFT TAV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'AFT TAV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'AFT TAV GADCIII FAULT', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'AFT CAB IN AUTO', status1: true, status2: true },
    { parameter: 'AUTO TEMP FAIL A', status1: false, status2: false },
  ]
  const tableHeader = [
    { title: 'AFT CABIN PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft4',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215104'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'4/8'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data2} tableHeader={tableHeader} hasHeader={false} />
    </DefaultLayout>
  )
}

export default AccStatusLeft3
