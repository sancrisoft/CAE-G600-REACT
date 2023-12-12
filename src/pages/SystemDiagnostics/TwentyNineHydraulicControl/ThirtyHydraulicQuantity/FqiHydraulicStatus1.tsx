import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const FqiHydraulicStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data = [
    { parameter: 'HYD FILL IN PROGRESS', status1: true, status2: true },
    { parameter: 'HYD SVC SW INPUT FAULT', status1: true, status2: true },
    { parameter: 'FQI CRITICAL FAULT', status1: true, status2: true },
    { parameter: 'FQI MEASUREMENT FAULT', status1: true, status2: true },
    { parameter: 'FQI USER INTERFACE FAULT', status1: true, status2: true },
    { parameter: 'FQI MAINTENANCE FAULT', status1: true, status2: true },
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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'293002'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'FQI Hydraulic Reservoir QTY Status'} right={'2/4'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} hasDobleTitle title1="TX 1" title2="TX2" />
    </DefaultLayout>
  )
}

export default FqiHydraulicStatus1
