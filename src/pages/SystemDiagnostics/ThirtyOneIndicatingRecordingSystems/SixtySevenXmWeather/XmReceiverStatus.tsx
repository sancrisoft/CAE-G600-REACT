import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const XmReceiverStatus = () => {
  const navigate = useNavigate();

  const header = [{ title: 'PARAMETER' }, { title: 'AGM1' }, { title: 'AGM2' }, { title: 'AGM3' }, { title: 'AGM4' }]
  const data = [
    { parameter: 'WXR INTERFACE', statuses: [true, true, true, true] },
    { parameter: 'ANTENNA FAIL', statuses: [true, true, true, true] },
    { parameter: 'DATA LOST', statuses: [true, true, true, true] },
    { parameter: 'DATA NOT RECVD', statuses: [true, true, true, true] },
    { parameter: 'RECEIVER FAL', statuses: [true, true, true, true] },
    { parameter: 'SRVC NOT ENABLED', statuses: [true, true, true, true] },
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
      footer={<DataFooter left={'316701'} right={['Select done to continue']} />}
    >
      <DataHeader left={'XM RECEIVER Status'} right={'1/1'} />
      <Legend title="No Fault" title2="Fault" />
      <StatusTable data={data} tableHeader={header} />
    </DefaultLayout>
  )
}

export default XmReceiverStatus
