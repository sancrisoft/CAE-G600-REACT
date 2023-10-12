import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusRight = () => {
  const navigate = useNavigate();

  const data = [
    { parameter: 'PIV TM FAULT', status1: true, status2: true },
    { parameter: 'COMPRESSOR OUTLET SENS FAULT', status1: true, status2: true },
    { parameter: 'COMPRESSOR OVERTEMP', status1: true, status2: true },
    { parameter: 'PIV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'PIV ARINC RX FAULT', status1: true, status2: true },
    { parameter: 'PV GADCIII FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET OVERTEMP', status1: true, status2: true },
    { parameter: 'LLV TM FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET SENS FAULT', status1: true, status2: true },
    { parameter: 'TURBINE INLET SENS FAULT', status1: true, status2: true },
    { parameter: 'TURBINE  UNDERTEMP', status1: true, status2: true },
    { parameter: 'LLV CHANNEL FAULT', status1: true, status2: true },
    { parameter: 'PACK OUTLET UNDERTEMP', status1: true, status2: true },
  ]

  const tableHeader = [
    { title: 'PARAMETERS' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215109'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'Right air cond controller status'} right={'1/6'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AccStatusRight
