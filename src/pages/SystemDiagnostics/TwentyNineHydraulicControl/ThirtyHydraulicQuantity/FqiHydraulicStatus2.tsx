import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const FqiHydraulicStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data1 = [
    { parameter: 'LEFT HYD TEMP 2', status1: '28 DEG C', status2: '28 DEG C' },
    { parameter: 'LEFT HYD QTY CMP', status1: '3.20 GAL', status2: '3.20 GAL' },
    { parameter: 'RIGHT HYD TEMP 2', status1: '28 DEG C', status2: '28 DEG C' },
    { parameter: 'RIGHT HYD QTY CMP', status1: '1.80 GAL', status2: '1.80 GAL' },
  ]

  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'A' }, { title: 'B' }]
  const data2 = [
    { parameter: 'LEFT HYD TEMP 1', status1: '29 DEG C', status2: '29 DEG C' },
    { parameter: 'LEFT HYD QTY CMP', status1: '3.20 GAL', status2: '3.20 GAL' },
    { parameter: 'RIGHT HYD TEMP 1', status1: '28 DEG C', status2: '28 DEG C' },
    { parameter: 'RIGHT HYD QTY CMP', status1: '1.79 GAL', status2: '1.79 GAL' },
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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentyninehydrauliccontrol/thirtyhydraulicquantity/fqihydraulicstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'293003'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'FQI Hydraulic Reservoir QTY Status'} right={'3/4'} isTitleLeft />
      <StatusTable data={data1} tableHeader={tableHeader1} hasDobleTitle title1="TX 1" title2="TX2" />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default FqiHydraulicStatus2
