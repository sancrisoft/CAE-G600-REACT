import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const Fqi1OilStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETERS' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data1 = [
    { parameter: 'L FUEL SHUTOFF SWITCH', status1: false, status2: false },
    { parameter: 'R FUEL SHUTOFF SWITCH', status1: false, status2: false },
  ]

  const tableHeader2 = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM2' }]
  const data2 = [
    { parameter: 'CONFIGURATION-2 G500', status1: true, status2: true },
    { parameter: 'CONFIGURATION-3 G600', status1: false, status2: false },
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
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
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
      footer={<DataFooter left={'793104'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'4/4'} />
      <Legend title="run" title2="cut" />
      <StatusTable data={data1} tableHeader={tableHeader1} hasDobleTitle title1="TX1" title2="TX2" />
      <Legend title="no" title2="yes" />
      <StatusTable data={data2} tableHeader={tableHeader2} hasDobleTitle title1="TX1" title2="TX2" />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus3
