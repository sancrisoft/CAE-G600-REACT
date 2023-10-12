import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft2 = () => {
  const data1 = [
    { parameter: 'FWD TAV TM FAULT', status1: true, status2: true },
    { parameter: 'FWD ZONE SENSOR FAULT', status1: true, status2: true },
    { parameter: 'FWD DUCT SENSOR FAULT', status1: true, status2: true },
    { parameter: 'FWD DUCT OVERTEMP', status1: true, status2: true },
    { parameter: 'FWD TAV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'FWD TAV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'FWD TAV GADCIII FAULT', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'FWD CAB IN AUTO', status1: true, status2: true },
    { parameter: 'AUTO TEMP FAIL F', status1: false, status2: false },
  ]
  const tableHeader = [
    { title: 'FWD CABIN PARAMETERS' },
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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215103'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'3/8'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data2} tableHeader={tableHeader} hasHeader={false} />
    </DefaultLayout>
  )
}

export default AccStatusLeft2
