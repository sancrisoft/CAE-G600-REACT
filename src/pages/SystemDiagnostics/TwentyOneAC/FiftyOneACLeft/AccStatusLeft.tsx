import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft = () => {
  const navigate = useNavigate();

  const data = [
    { parameter: 'PIV TM FAULT', status1: true, status2: true },
    { parameter: 'COMPRESSOR OUTLET SENS FAULT', status1: true, status2: true },
    { parameter: 'COMPRESSOR OVERTEMP', status1: true, status2: true },
    { parameter: 'PIV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'PIV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'PIV GADCIII FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET OVERTEMP', status1: true, status2: true },
    { parameter: 'LLV TM FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET sens fault', status1: true, status2: true },
    { parameter: 'turbine inlet sens fault', status1: true, status2: true },
    { parameter: 'TURBINE UNDERTEMP', status1: true, status2: true },
    { parameter: 'LLV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET UNDERTEMP', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215101'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'1/8'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AccStatusLeft
