import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const WindshieldHeatStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'R front wshld status' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data1 = [
    { parameter: 'R FRONT HEAT FAIL', status1: true, status2: true },
    { parameter: 'R FRONT FILM FAIL', status1: true, status2: true },
    { parameter: 'R FRONT HEAT FAULT', status1: true, status2: true },
    { parameter: 'R FRONT OVERHEAT', status1: true, status2: true },
    { parameter: 'R FRONT SENSOR 1', status1: true, status2: true },
    { parameter: 'R FRONT SENSOR 2', status1: true, status2: true },
  ]

  const tableHeader2 = [{ title: 'R front temp sensors' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data2 = [
    { parameter: 'SENSOR 1 TEMP', status1: '73 F', status2: '73 F' },
    { parameter: 'SENSOR 2 TEMP', status1: '72 F', status2: '72 F' },
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
      href: '/systemdiagnostics/thirtyicerainprotection/fortyonewindshieldheat/windshieldheatstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'304102'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Windshield heat status'} right={'2/4'} />
      <Legend title="NO FAULT" title2="FAULT" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default WindshieldHeatStatus1
