import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const AircraftSystemsStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'AIRCRAFT TYPE', alignLeft: true }, { title: 'FCC1' }, { title: 'FCC2' }]
  const mainHeaders2 = [{ title: 'DISPATCH CONDITION', alignLeft: true }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: 'IOGM2' }, { title: 'IOGM3' }]

  const data = [
    { parameter: 'GVII-G500', statuses: [false, false] },
    { parameter: 'GVII-G600', statuses: [true, true] },
  ]
  const data2 = [
    { parameter: 'FCS LIMITED DISPATCH', statuses: [false, false] },
    { parameter: 'FCS NO DISPATCH', statuses: [false, false] },
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
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'FWD',
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus2',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270141'} right={['selec fwd to continue', 'Select prev to go back']} />}
    >
      <DataHeader left={'aircraft systems status'} right={'2/3'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} colspan={2} />
      <DynamicTable
        data={data2}
        mainHeaders={mainHeaders2}
        secondaryHeaders={secondaryHeaders}
        colspan={2}
        hasMarginTop
      />
    </DefaultLayout>
  )
}

export default AircraftSystemsStatus1
