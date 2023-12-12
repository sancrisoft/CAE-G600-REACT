import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AhtmuStatus1 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETER' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data = [{ parameter: 'TRANSMIT PERCENT COMP.', status1: '0 %', status2: '0 %' }]

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
      footer={<DataFooter left={'463502'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'AHTMU status'} right={'2/2'} />
      <StatusTable data={data} tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default AhtmuStatus1
