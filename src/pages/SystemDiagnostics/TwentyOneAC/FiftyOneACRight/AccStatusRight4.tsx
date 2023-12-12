import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusRight4 = () => {
  const data = [{ parameter: 'BAGG COMPT LOW PRESSURE', status1: true, status2: 'N/A' }]

  const tableHeader = [
    { title: 'PARAMETER - DCN' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
  ]
  const data1 = [{ parameter: 'R AIR CON CONTROLLER FAILED', status1: true, status2: true }]
  const tableHeader1 = [
    { title: 'PARAMETER - DISCRETE' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
  ]

  const data2 = [
    { parameter: 'L PACK ON', status1: true, status2: true },
    { parameter: 'R PACK ON', status1: true, status2: true },
  ]
  const tableHeader2 = [
    { title: 'OHP PARAMETER - DCN' },
    { title: 'IOGM3' },
    { title: 'IOGM4' },
  ]
  const navigate = useNavigate();

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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacright/accstatusright5',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215113'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Right air cond controller status'} right={'5/6'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default AccStatusRight4
