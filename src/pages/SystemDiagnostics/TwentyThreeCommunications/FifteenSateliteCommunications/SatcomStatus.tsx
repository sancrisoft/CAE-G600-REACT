import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const SatcomStatus = () => {
  const navigate = useNavigate();
  const data = [
    {
      parameter: 'CMU DATA LINK',
      status1: true,
      hasBorderBottom: true,
      noData: true,
    },
    {
      parameter: 'SATCOM COCKPIT VOICE',
      status1: true,
      hasBorderBottom: true,
      noData: true,
    },
  ]
  const dataCmu = [
    {
      parameter: 'CMU 1 BUS',
      status1: true,
      hasBorderBottom: true,
      noData: true,
    },
  ]
  const dataSatcom = [
    {
      parameter: 'LOSS OF IRS DATA',
      status1: true,
      hasBorderBottom: true,
    },
    {
      parameter: 'SATCOM DATA FAILURE',
      status1: true,
      hasBorderBottom: true,
      noData: true,
    },
    {
      parameter: 'MESSAGE ALERT WITH CHIME',
      status1: true,
      hasBorderBottom: true,
      noData: true,
    },
  ]

  const tableHeader = [{ title: 'parameters' }, { title: 'IOGM1' }]
  const tableHeader2 = [{ title: 'parameter' }, { title: 'IOGM1' }]

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
      footer={<DataFooter left={'231501'} right={['Select done to continue']} />}
    >
      <DataHeader left={'satcom sdu status'} right={'1/1'} />
      <Legend title="avail" title2="not avail" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} />
      <Legend title="active" title2="inactive" />
      <StatusTable data={dataCmu} hasHeader tableHeader={tableHeader2} />
      <Legend title="inactive" title2="active" />
      <StatusTable data={dataSatcom} hasHeader tableHeader={tableHeader} />
    </DefaultLayout>
  )
}

export default SatcomStatus
