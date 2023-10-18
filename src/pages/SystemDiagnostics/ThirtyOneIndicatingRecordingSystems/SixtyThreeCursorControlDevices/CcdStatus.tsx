import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const CcdStatus = () => {
  const navigate = useNavigate();

  const header1 = [{ title: 'PILOT CCD' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const data1 = [
    { parameter: 'DU SELECT 1', statuses: [true, true, true, true] },
    { parameter: 'DU SELECT 2', statuses: [true, true, true, true] },
    { parameter: 'DU SELECT 3', statuses: [true, true, true, true] },
  ]
  const header2 = [{ title: 'COPILOT CCD' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const data2 = [
    { parameter: 'DU SELECT 2', statuses: [true, true, true, true] },
    { parameter: 'DU SELECT 3', statuses: [true, true, true, true] },
    { parameter: 'DU SELECT 4', statuses: [true, true, true, true] },
  ]

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
      text: 'FWD',
      href: '/systemdiagnostics/thirtyoneindicatingrecordingsystems/sixtythreecursorcontroldevices/ccdstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'316301'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'CCD Status'} right={'1/2'} />
      <Legend title="valid" title2="invalid" />
      <StatusTable data={data1} tableHeader={header1} />
      <StatusTable data={data2} tableHeader={header2} />
    </DefaultLayout>
  )
}

export default CcdStatus
