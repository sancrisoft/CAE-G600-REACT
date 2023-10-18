import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriFaultStatus3 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'fault name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'ibit - pitch movement', statuses: [true, true, true, true] },
    { parameter: 'ibit - roll motor drive', statuses: [true, true, true, true] },
    { parameter: 'ibit - pitch motor drive', statuses: [true, true, true, true] },
    { parameter: 'ibit - analog', statuses: [true, true, true, true] },
    { parameter: 'ibit - memory', statuses: [true, true, true, true] },
    { parameter: 'cbit - seat id', statuses: [true, true, true, true] },
    { parameter: 'cbit - roll performance', statuses: [true, true, true, true] },
    { parameter: 'cbit - pitch performance', statuses: [true, true, true, true] },
    { parameter: 'cbit -  power supply ', statuses: [true, true, true, true] },
    { parameter: 'cbit - roll motor drive', statuses: [true, true, true, true] },
    { parameter: 'cbit - pitch motor drive', statuses: [true, true, true, true] },
    { parameter: 'cbit - inline monitor', statuses: [true, false, true, true] },
  ]

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
      href: '/systemdiagnostics/twentysevenflightcontrols/oneactivecontrolstickleftcha/sidesticklprifaultstatus4',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270504'} right={['select prev to go back', 'Select fwd to continue']} />}
    >
      <DataHeader left={'acs fault status'} right={'4/6'} />
      <Legend title="no fault" title2="fault" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriFaultStatus3
