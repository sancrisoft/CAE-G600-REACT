import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const Fcc2AircraftSystemsStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'PARAMETER', alignLeft: true }, { title: 'FCC1' }, { title: 'FCC2' }]
  const secondaryHeaders = [{ title: 'IOGM1' }, { title: 'IOGM2' }, { title: 'IOGM3' }, { title: 'IOGM4' }]
  const data = [
    { parameter: 'ICE DETECTED #1', statuses: [false, false, false, false] },
    { parameter: 'ICE DETECTED #2', statuses: [false, false, false, false] },
    { parameter: 'ICE DETECTOR VLD', statuses: [true, true, true, true] },
    { parameter: 'WING TEMP LOW', statuses: [true, true, true, true] },
    { parameter: 'WING TEMP HIGH', statuses: [false, false, false, false] },
    { parameter: 'HIPF MODE 1', statuses: [true, true, true, true] },
    { parameter: 'HIPF MODE 2', statuses: [false, false, false, false] },
    { parameter: 'HIPF MODE 3', statuses: [false, false, false, false] },
    { parameter: '', statuses: ['', '', '', ''] },
    { parameter: 'FCC AP CAPABLE', statuses: [false, false, false, false] },
    { parameter: 'FCC SAM CAPABLE', statuses: [false, false, false, false] },
    { parameter: 'FCS PFT AVAIL', statuses: [false, false, false, false] },
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
      footer={<DataFooter left={'270142'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'aircraft system status'} right={'3/3'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} hasBorder />
    </DefaultLayout>
  )
}

export default Fcc2AircraftSystemsStatus2
