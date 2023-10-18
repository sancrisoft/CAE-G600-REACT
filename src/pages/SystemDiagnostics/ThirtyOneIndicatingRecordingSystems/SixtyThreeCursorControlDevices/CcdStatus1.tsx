import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const CcdStatus1 = () => {
  const navigate = useNavigate();
  const header1 = [{ title: 'PILOT CCD' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const header2 = [{ title: 'COPILOT CCD' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const data1 = [{ parameter: 'CCD STATUS', statuses: [false, false, false, false] }]
  const data2 = [{ parameter: 'SCROLL WHEEL POS', statuses: ['0', '0', '0', '0'] }]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 1,
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
      footer={<DataFooter left={'316302'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'CCD Status'} right={'2/2'} />
      <Legend title="valid" title2="invalid" />
      <StatusTable data={data1} tableHeader={header1} />
      <StatusTable data={data2} tableHeader={header1} />
      <StatusTable data={data1} tableHeader={header2} />
      <StatusTable data={data2} tableHeader={header2} />
    </DefaultLayout>
  )
}

export default CcdStatus1
