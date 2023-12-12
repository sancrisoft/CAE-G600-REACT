import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const FqiHydraulicStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data1 = [{ parameter: 'WEIGHT ON WHEELS', status1: true, status2: true }]

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
      text: 'DONE',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'293004'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'FQI Hydraulic Reservoir QTY Status'} right={'4/4'} isTitleLeft />
      <Legend title="ground" title2="in air" />
      <StatusTable data={data1} tableHeader={tableHeader1} hasDobleTitle title1="TX 1" title2="TX2" />
    </DefaultLayout>
  )
}

export default FqiHydraulicStatus3
