import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import TwoColumnsTable from "../../../../components/TwoColumnsTable";

const AccStatusRight5 = () => {
  const data = [
    { fan: 'R LOW LIMIT VLV CMD', description: '0.00 MA' },
    { fan: 'R PACK INLET VLV CMD', description: '66.00 MA' },
    { fan: 'COCKPIT TAV AUTO CMD', description: '0.00 MA' },
  ]

  const tableHeader = [
    { title: 'PARAMETER FROM RACC' },
  ]
  const data2 = [
    { fan: 'COCKPIT TAV MAN CMD VOLT', description: '-0.00 V' },
    { fan: 'COCKPIT ZONE TEMP SENS', description: '86.50 DEG F' },
    { fan: 'COCKPIT DUCT TEMP SENS', description: '83.50 DEG F' },
    { fan: 'R COMP OUTLET TEMP SENS', description: '83 DEG F' },
    { fan: 'R PACK OUTLET TEMP SENS', description: '82.50 DEG F' },
    { fan: 'R TURBINE INLET TEMP SENS', description: '83.50 DEG F' },
  ]
  const tableHeader2 = [
    { title: 'PARAMETER TO RACC' },
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
      footer={<DataFooter left={'215114'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Right air cond controller status'} right={'6/6'} isTitleLeft />
      <TwoColumnsTable data={data} tableHeader={tableHeader} rowLeft={false} separation />
      <TwoColumnsTable data={data2} tableHeader={tableHeader2} rowLeft={false} separation />
    </DefaultLayout>
  )
}

export default AccStatusRight5
