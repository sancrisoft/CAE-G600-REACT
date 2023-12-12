import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriFaultStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'fault name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'plt ch a com ln can fault', statuses: [true, true, true, true] },
    { parameter: 'plt ch a mon ln can fault', statuses: [true, true, true, true] },
    { parameter: 'plt ch b com ln can fault', statuses: [false, true, false, false] },
    { parameter: 'plt ch b mon ln can fault', statuses: [false, true, false, false] },
    { parameter: 'cplt ch a com ln can fault', statuses: [true, true, true, true] },
    { parameter: 'cplt ch a mon ln can fault', statuses: [true, true, true, true] },
    { parameter: 'cplt ch b com ln can fault', statuses: [true, true, true, true] },
    { parameter: 'cplt ch b mon ln can fault', statuses: [true, true, true, true] },
    { parameter: 'ibit - force offset check ', statuses: [true, true, true, true] },
    { parameter: 'ibit - force', statuses: [true, true, true, true] },
    { parameter: 'ibit - channel engagement', statuses: [true, true, true, true] },
    { parameter: 'ibit - roll movement ', statuses: [true, true, true, true] },
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
      text: 'fwd',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus3',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270503'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'3/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus2
