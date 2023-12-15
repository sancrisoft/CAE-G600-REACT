import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const TQAStatus2 = () => {
  const datalx = [
    {
      parameter: 'LH TO/GA SW',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]

  const datarx = [
    {
      parameter: 'RH TO/GA SW',
      status1: true,
      status2: true,
      hasBorderBottom: true,
    },
  ]
  const tableHeader = [
    { title: 'PARAMETER' },
    { title: 'POLE1' },
    { title: 'POLE2' },
  ]
  const navigate = useNavigate();
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
      text: 'Prev',
      onClick: () => { 
        navigate(-1)
      },
      disabled: false,
      position: 4,
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
      footer={<DataFooter left={'223303'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'tqa status'} right={'3/3'} />
      <Legend title="open" title2="closed" />
      <StatusTable
        data={datalx}
        hasHeader
        tableHeader={tableHeader}
        isHalfWidth
        hasDobleTitle
        title1="SW"
        title2="SW"
      />
      <StatusTable
        data={datarx}
        hasHeader
        tableHeader={tableHeader}
        isHalfWidth
        hasDobleTitle
        title1="SW"
        title2="SW"
      />
    </DefaultLayout>
  )
}

export default TQAStatus2
