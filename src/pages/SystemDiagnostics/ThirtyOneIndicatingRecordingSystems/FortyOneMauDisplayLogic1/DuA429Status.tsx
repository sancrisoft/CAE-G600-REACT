import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const DuA429Status = () => {
  const navigate = useNavigate();

  const header1 = [{ title: 'A429 STATUS' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const header2 = [
    { title: 'CRC CHECK STATUS' },
    { title: 'AGM1' },
    { title: 'AGM2' },
    { title: 'AGM3' },
    { title: 'AGM4' },
  ]
  const data = [
    { parameter: 'DU1', statuses: [true, true, true, true] },
    { parameter: 'DU2', statuses: [true, true, true, true] },
    { parameter: 'DU3', statuses: [true, true, true, true] },
    { parameter: 'DU4', statuses: [true, true, true, true] },
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
      footer={<DataFooter left={'314105'} right={['Select done to continue']} />}
    >
      <DataHeader left={'DU A429 Status'} right={'1/1'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={header1} />
      <StatusTable data={data} tableHeader={header2} />
    </DefaultLayout>
  )
}

export default DuA429Status
