import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const AircraftSystemsStatus = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'PARAMETER', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]
  const data = [
    { parameter: 'ON GROUND STATIONARY', statuses: [true, true] },
    { parameter: 'LEFT WHEEL LOW SPIN', statuses: [true, true] },
    { parameter: 'RIGHT WHEEL LOW SPIN', statuses: [true, true] },
    { parameter: 'LEFT MLG WOW', statuses: [true, true] },
    { parameter: 'RIGHT MLG WOW', statuses: [true, true] },
    { parameter: 'AIR DATA VALID', statuses: [true, true] },
    { parameter: 'INTERTIAL DATA VALID', statuses: [false, false] },
    { parameter: 'STAB COND NORMAL VALID', statuses: [true, true] },
    { parameter: 'FCC SPOST OK', statuses: [true, true] },
    { parameter: 'BFCU SPOST OK', statuses: [true, true] },
    { parameter: 'FCC ALTERNATE MODE', statuses: [false, false] },
    { parameter: 'MIN FLIGHT DECK AVAILABLE', statuses: [true, true] },
    { parameter: 'FCS MAINTENANCE SWITCH', statuses: [false, false] },
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
      text: 'FWD',
      href: '/systemdiagnostics/twentysevenflightcontrols/onefcsflightcontrolcomputer1/aircraftsystemsstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270140'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'aircraft systems status'} right={'1/3'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={mainHeaders} secondaryHeaders={secondaryHeaders} colspan={2} />
    </DefaultLayout>
  )
}

export default AircraftSystemsStatus
