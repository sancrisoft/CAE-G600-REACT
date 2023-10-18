import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const SidestickLPriModeStatus1 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'mode name' }, { title: 'LEFT' }, { title: 'right' }]
  const secondaryHeaders = [{ title: 'a' }, { title: 'b' }, { title: 'a' }, { title: 'b' }]
  const data = [
    { parameter: 'stick shaker active', statuses: [false, false, false, false] },
    { parameter: 'stick operable', statuses: [true, true, true, true] },
    { parameter: 'ch active available', statuses: [false, false, false, false] },
    { parameter: 'ch active linked available ', statuses: [false, false, false, false] },
    { parameter: 'active mode', statuses: [false, false, false, false] },
    { parameter: 'jam detected', statuses: [false, false, false, false] },
    { parameter: 'no dispatch', statuses: [true, true, true, true] },
    { parameter: 'ferry flight only', statuses: [false, false, false, false] },
    { parameter: 'mmel dispatch', statuses: [false, false, false, false] },
    { parameter: 'fcc receiver on secondary', statuses: [false, false, false, false] },
    { parameter: 'channel fault', statuses: [true, true, true, true] },
    { parameter: 'pre-flt test interrupt', statuses: [false, false, false, false] },
    { parameter: 'pre-flt test in progress', statuses: [false, false, false, false] },
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
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270508'} right={['SELECT PREV TO GO BACK', 'Select done to continue']} />}
    >
      <DataHeader left={'acs mode status'} right={'2/2'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default SidestickLPriModeStatus1
