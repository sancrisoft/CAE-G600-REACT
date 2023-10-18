import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const LeftBleedAirStatus4 = () => {
  const navigate = useNavigate();

  const tableHeader1 = [{ title: 'PARAMETER FROM LBAC' }, { title: '' }]
  const data1 = [
    { parameter: 'FAV AIR VLV CMD', status1: '0.00 MA' },
    { parameter: 'HI STGE VLV CMD', status1: '0.00 MA' },
    { parameter: 'WING ANTI ICE VLV CMD', status1: '0.00 MA' },
  ]

  const tableHeader2 = [{ title: 'PARAMETER TO LBAC' }, { title: '' }]
  const data2 = [
    { parameter: 'WING PLENUM TEMP SENS', status1: '83.00 DEG F' },
    { parameter: 'MANIFOLD PRESSURE', status1: '0 PSIG' },
    { parameter: 'PRECOOLER INLET TEMP SENS', status1: '82 DEG F' },
    { parameter: 'PRECOOLER OUTLET TEMP SENS', status1: '83 DEG F' },
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
      footer={<DataFooter left={'361205'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'LEFT BLEED AIR CONTROLLER STATUS'} right={'5/5'} isTitleLeft />
      <StatusTable data={data1} tableHeader={tableHeader1} />
      <StatusTable data={data2} tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default LeftBleedAirStatus4
