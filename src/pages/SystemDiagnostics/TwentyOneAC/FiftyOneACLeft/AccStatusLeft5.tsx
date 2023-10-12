import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const AccStatusLeft5 = () => {
  const data = [{ parameter: 'BAGG COMPT LOW PRESSURE', status1: true, status2: true }]

  const tableHeader = [
    { title: 'PARAMETER-DCN' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
  ]

  const data2 = [{ parameter: 'L AIR CON CONTROLLER FAILED', status1: true, status2: true }]

  const tableHeader2 = [
    { title: 'PARAMETER-DISCRETE' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
  ]

  const data3 = [
    { parameter: 'L PACK ON', status1: true, status2: true },
    { parameter: 'R PACK ON', status1: true, status2: true },
  ]

  const tableHeader3 = [
    { title: 'OHP PARAMETER-DCN' },
    { title: 'IOGM1' },
    { title: 'IOGM2' },
  ]
  const navigate = useNavigate();

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
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft6',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215106'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'6/8'} isTitleLeft />
      <Legend />
      <StatusTable data={data} tableHeader={tableHeader} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
      <Legend title="ACTIVE" title2="INACTIVE" />
      <StatusTable data={data3} tableHeader={tableHeader3} />
    </DefaultLayout>
  )
}

export default AccStatusLeft5
