import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import TwoColumnsTable from "../../../../components/TwoColumnsTable";

const AccStatusLeft6 = () => {
  const tableHeader1 = [{ title: 'PARAMETER FROM LACC' }]
  const data1 = [
    { fan: 'L LOW LIMIT VLV CMD', description: '0.00 MA' },
    { fan: 'L PACK INLET VLV CMD', description: '66.00 MA' },
    { fan: 'FWD CAB TAV AUTO CMD', description: '0.00 MA' },
    { fan: 'AFT CAB TAV AUTO CMD', description: '0.00 MA' },
  ]

  const tableHeader2 = [{ title: 'PARAMETER TO LACC' }]
  const data2 = [
    { fan: 'FWD CAB TAV MAN CMD VOLT', description: '-0.00 V' },
    { fan: 'FWD CAB ZONE TEMP SENS', description: '84.75 DEG F' },
    { fan: 'FWD CAB DUCT TEMP SENS', description: '83.50 DEG F' },
    { fan: 'AFT CAB TAV MAN CMD VOLT', description: '-0.00 V' },
    { fan: 'AFT CAB ZONE TEMP SENS', description: '84.75 DEG F' },
    { fan: 'AFT CAB DUCT TEMP SENS', description: '84.00 DEG F' },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentyoneac/fiftyoneacleft/accstatusleft7',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'215107'} right={['Select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'Left air cond controller status'} right={'7/8'} isTitleLeft />
      <TwoColumnsTable data={data1} tableHeader={tableHeader1} rowLeft={false} separation />
      <TwoColumnsTable data={data2} tableHeader={tableHeader2} rowLeft={false} />
    </DefaultLayout>
  )
}

export default AccStatusLeft6
