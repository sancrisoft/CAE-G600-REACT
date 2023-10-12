import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft1 = () => {
  const data1 = [
    { parameter: 'LLV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'LLV GADCIII FAULT', status1: true, status2: true },
    { parameter: 'TBV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'ACS MAINT REQUIRED', status1: true, status2: true },
    { parameter: 'TBV MPT CIRCUIT FAULT', status1: true, status2: true },
    { parameter: 'TBV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'ACS DEFAULT MODE', status1: true, status2: true },
    { parameter: 'TBV GADCIII FAULT', status1: true, status2: true },
  ]

  const data2 = [
    { parameter: 'ACCS ON INDICATION', status1: true, status2: true },
    { parameter: 'tbv on cmd', status1: false, status2: false },
    { parameter: 'L PACK ON 28V DISCRETE', status1: true, status2: true },
    { parameter: 'WOW 28V DISCRETE', status1: true, status2: true },
  ]
  const tableHeader = [
    { title: 'PARAMETER' },
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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215102'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'2/8'} isTitleLeft />
      <Legend />
      <StatusTable data={data1} tableHeader={tableHeader} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data2} tableHeader={tableHeader} hasHeader={false} />
    </DefaultLayout>
  )
}

export default AccStatusLeft1
