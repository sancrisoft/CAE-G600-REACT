import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DataTable from "../../../../components/DataTable";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const GcuGenStatus2 = () => {
  const navigate = useNavigate();

  const tableHeaderRx = [{ title: 'can error count' }, { title: 'IOGM 1' }, { title: 'IOGM 4' }]

  const dataTx = [
    { parameter: 'aux can a nb rst', status1: '0 ', status2: '0 ' },
    { parameter: 'aux can a rec', status1: '0 ', status2: '0 ' },
    { parameter: 'aux can a tec', status1: '0 ', status2: '0 ' },
    { parameter: 'aux can b nb rst', status1: '0 ', status2: '0 ' },
    { parameter: 'aux can b rec', status1: '0 ', status2: '0 ' },
    { parameter: 'aux can b tec', status1: '0 ', status2: '0 ' },
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
      footer={<DataFooter left={'242204'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'APU GCU & GEN'} right={'3/3'} />
      <DataTable data={dataTx} mainHeaders={tableHeaderRx} />
    </DefaultLayout>
  )
}

export default GcuGenStatus2
