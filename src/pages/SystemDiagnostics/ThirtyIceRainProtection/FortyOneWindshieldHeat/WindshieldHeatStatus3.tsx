import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const WindshieldHeatStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'R SIDE wshld status' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data1 = [
    { parameter: 'R SIDE HEAT FAIL', status1: true, status2: true },
    { parameter: 'R SIDE FILM FAIL', status1: true, status2: true },
    { parameter: 'R SIDE HEAT FAULT', status1: true, status2: true },
    { parameter: 'R SIDE OVERHEAT', status1: true, status2: true },
    { parameter: 'R SIDE SENSOR 1', status1: true, status2: true },
    { parameter: 'R SIDE SENSOR 2', status1: true, status2: true },
    { parameter: 'R SIDE SENSOR 3', status1: true, status2: true },
  ]

  const tableHeader2 = [{ title: 'R SIDE temp sensors' }, { title: 'IOGM1' }, { title: 'IOGM2' }]
  const data2 = [
    { parameter: 'SENSOR 1 TEMP', status1: '78 F', status2: '78 F' },
    { parameter: 'SENSOR 2 TEMP', status1: '79 F', status2: '79 F' },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'304104'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'Windshield heat status'} right={'4/4'} />
      <Legend title="NO FAULT" title2="FAULT" />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default WindshieldHeatStatus3
