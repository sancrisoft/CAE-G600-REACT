import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const PpdlBpcuStatusLeft4 = () => {
  const navigate = useNavigate();

  const tableHeader = [
    { title: 'FREQUENCY REF. FAULT' },
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
      parameter: 'AGCU TO LGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'RBPCU TO LGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'AGCU TO RBPCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'INT TO LGCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'INT TO RBPCU REF FAULT',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const data2 = [
    {
      parameter: 'pdb temp out of range',
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
        navigate('/systemdiagnostics');
      },
    },
    {
      text: 'prev',
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
      footer={<DataFooter left={'246006'} right={['select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'ppdl bpcu status'} right={'5/5'} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="no fault" title2="fault" />
      <StatusTable data={data2} hasHeader tableHeader={tableHeader2} />
    </DefaultLayout>
  )
}

export default PpdlBpcuStatusLeft4
