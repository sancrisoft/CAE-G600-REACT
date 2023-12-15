import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const WindshieldHeatStatus2 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'L SIDE wshld status' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data1 = [
    { parameter: 'L SIDE HEAT FAIL', status1: true, status2: true },
    { parameter: 'L SIDE FILM FAIL', status1: true, status2: true },
    { parameter: 'L SIDE HEAT FAULT', status1: true, status2: true },
    { parameter: 'L SIDE OVERHEAT', status1: true, status2: true },
    { parameter: 'L SIDE SENSOR 1', status1: true, status2: true },
    { parameter: 'L SIDE SENSOR 2', status1: true, status2: true },
    { parameter: 'L SIDE SENSOR 3', status1: true, status2: true },
  ]

  const tableHeader2 = [{ title: 'L SIDE temp sensors' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data2 = [
    { parameter: 'SENSOR 1 TEMP', status1: '77 F', status2: '77 F' },
    { parameter: 'SENSOR 2 TEMP', status1: '76 F', status2: '76 F' },
    { parameter: 'SENSOR 3 TEMP', status1: '76 F', status2: '76 F' },
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
      href: '/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus3',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'304103'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Windshield heat status'} right={'3/4'} />
      <Legend title="NO FAULT" title2="FAULT" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default WindshieldHeatStatus2
