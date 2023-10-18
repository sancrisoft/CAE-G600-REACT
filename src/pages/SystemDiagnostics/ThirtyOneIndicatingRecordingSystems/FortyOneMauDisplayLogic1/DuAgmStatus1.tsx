import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DuAgmStatus1 = () => {
  const navigate = useNavigate();

  const header = [{ title: 'FIBER CH' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const data = [
    { parameter: 'DU1 - PRI', statuses: [true, true, true, true] },
    { parameter: 'DU1 - SEC', statuses: [true, true, true, true] },
    { parameter: 'DU1 - TER', statuses: [true, true, true, true] },
    { parameter: 'DU2 - PRI', statuses: [true, true, true, true] },
    { parameter: 'DU2 - SEC', statuses: [true, true, true, true] },
    { parameter: 'DU2 - TER', statuses: [true, true, true, true] },
    { parameter: 'DU3 - PRI', statuses: [true, true, true, true] },
    { parameter: 'DU3 - SEC', statuses: [true, true, true, true] },
    { parameter: 'DU3 - TER', statuses: [true, true, true, true] },
    { parameter: 'DU4 - PRI', statuses: [true, true, true, true] },
    { parameter: 'DU4 - SEC', statuses: [true, true, true, true] },
    { parameter: 'DU4 - TER', statuses: [true, true, true, true] },
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
      footer={<DataFooter left={'314111'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'DU/AGM Status'} right={'2/2'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={header} />
    </DefaultLayout>
  )
}

export default DuAgmStatus1
