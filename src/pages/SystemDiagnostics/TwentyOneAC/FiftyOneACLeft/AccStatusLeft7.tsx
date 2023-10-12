import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import TwoColumnsTable from "../../../../components/TwoColumnsTable";

const AccStatusLeft7 = () => {
  const data = [
    { fan: 'L COMP OUTLET TEMP SENS', description: '83 DEG F' },
    { fan: 'L PACK OUTLET TEMP SENS', description: '82.50 DEG F' },
    { fan: 'L TURBINE INLET TEMP SENS', description: '83.50 DEG F' },
  ]

  const tableHeader = [
    { title: 'PARAMETER FROM LACC' },
  ]

  const navigate = useNavigate();

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
      footer={<DataFooter left={'215108'} right={['Select prev to go back', 'Select DONE to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'8/8'} isTitleLeft />
      <TwoColumnsTable data={data} tableHeader={tableHeader} rowLeft={false} separation />
    </DefaultLayout>
  )
}

export default AccStatusLeft7
