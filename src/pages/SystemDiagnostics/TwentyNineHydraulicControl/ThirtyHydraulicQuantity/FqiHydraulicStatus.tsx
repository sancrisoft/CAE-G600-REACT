import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const FqiHydraulicStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'SGIO2' }]
  const data = [
    { parameter: 'L HYD QTY LOW', status1: true, status2: true },
    { parameter: 'L HYD SENSOR FAULT', status1: true, status2: true },
    { parameter: 'L HYD TEMP SENSOR FAULT', status1: true, status2: true },
    { parameter: 'R HYD QTY LOW', status1: true, status2: true },
    { parameter: 'R HYD SENSOR FAULT', status1: true, status2: true },
    { parameter: 'R HYD TEMP SENSOR FAULT', status1: true, status2: true },
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
      href: '/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'293001'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'FQI Hydraulic Reservoir QTY Status'} right={'1/4'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} hasDobleTitle title1="TX 1" title2="TX2" />
    </DefaultLayout>
  )
}

export default FqiHydraulicStatus
