import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusRight4 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'PARAMETER' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const tableHeader2 = [
    { title: 'TEMP. SENSOR FAULT' },
    { title: 'CH A' },
    { title: 'CH B' },
  ]

  const data = [
    {
      parameter: 'INT TO RGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'AGCU TO RGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'EXT TO RGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'EXT TO LBPCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data2 = [
    {
      parameter: 'PDB TEMP OUT OF RANGE',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'done',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'246009'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'ppdr bpcu status'} right={'5/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusRight4
