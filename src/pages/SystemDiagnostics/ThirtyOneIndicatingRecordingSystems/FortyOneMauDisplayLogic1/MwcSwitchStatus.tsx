import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const MwcSwitchStatus = () => {
  const navigate = useNavigate();

  const header1 = [{ title: 'SWITCH' }, { title: 'IOGM1' }, { title: 'IOGM4' }]
  const data1 = [
    { parameter: 'MASTER WARNING/CAUTION', statuses: [true, true] },
    { parameter: 'CAS CHIME MUTE', statuses: [true, true] },
  ]
  const header2 = [{ title: 'SWITCH' }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const data2 = [{ parameter: 'GS INHIBIT', statuses: [true, true] }]

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
      footer={<DataFooter left={'314108'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Master Warn/Caution Switch Status'} right={'1/1'} />
      <Legend />
      <StatusTable data={data1} tableHeader={header1} reducedHeaderTitle={true}/>
      <StatusTable data={data2} tableHeader={header2} reducedHeaderTitle={true}/>
    </DefaultLayout>
  )
}

export default MwcSwitchStatus
