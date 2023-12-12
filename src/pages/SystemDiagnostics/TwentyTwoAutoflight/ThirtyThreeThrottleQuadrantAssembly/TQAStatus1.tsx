import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import StatusTable from "../../../../components/StatusTable";

const TQAStatus1 = () => {
  const data = [
    {
      parameter: 'LH A/T DISC SW',
      statuses: [true],
      hasBorderBottom: true,
    },
    {
      parameter: 'RH A/T DISC SW',
      statuses: [true],
      hasBorderBottom: true,
    },
    {
      parameter: 'LH A/T ENGAGE',
      statuses: [true],
      hasBorderBottom: true,
    },
    {
      parameter: 'RH A/T ENGAGE',
      statuses: [true],
      hasBorderBottom: true,
    },
  ]

  const tableHeader = [
    { title: 'PARAMETER' },
    { title: 'STATUS' },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentytwoautoflight/thirtythreethrottlequadrantassembly/tqastatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'223302'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'tqa status'} right={'2/3'} />
      <Legend title="open" title2="closed" />
      <StatusTable data={data} hasHeader tableHeader={tableHeader} isHalfWidth />
    </DefaultLayout>
  )
}

export default TQAStatus1
