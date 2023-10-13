import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const GcuGenStatusLeft3 = () => {
  const navigate = useNavigate();
  const tableHeader = [{ title: 'CAN ERROR COUNT' }, { title: 'IOGM 1' }, { title: 'IOGM 4' }]

  const data = [
    { parameter: 'L CAN A NB RST', status1: '0 ', status2: '0 ' },
    { parameter: 'L CAN A REC', status1: '0 ', status2: '0 ' },
    { parameter: 'L GEN A TEC', status1: '0 ', status2: '0 ' },
    { parameter: 'L CAN B NB RST', status1: '0 ', status2: '0 ' },
    { parameter: 'L CAN B REC', status1: '0 ', status2: '0 ' },
    { parameter: 'L CAN B TEC', status1: '0 ', status2: '0 ' },
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
      text: 'prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'242505'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'left gcu & gen'} right={'4/4'} />
      <DataTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default GcuGenStatusLeft3
