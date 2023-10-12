import Accordion, { AccordionItem } from "../../../components/Accordion"
import FlightDetail from "../../../components/FlightDetail"
import DefaultLayout from "../../../components/Layout"
import { NavBarButtonType } from "../../../components/NavBar"
import Title from "../../../components/Title"

const HistoricalByDate = () => {
  const items: AccordionItem[] = [
    {
      text: '21 AIR CONDITIONING',
      children: [
        { text: '20 AIR DISTRIBUTION SYSTEM' },
        { text: '30 PRESSURIZATION CONTROL' },
        { text: '50 COOLING' },
      ],
    },
    {
      text: '22 AUTOFLIGHT',
      children: [
        { text: '10 AUTOPILOT' },
        { text: '30 AUTO THROTTLE' },
      ],
    },
    {
      text: '23 COMMUNICATIONS',
      children: [
        { text: '00 COMMUNICATIONS' },
        { text: '10 SPEECH COMMUNICATIONS' },
        { text: '20 DATA TRANSMISSION AND AUTO-CALLING' },
        { text: '50 AUDIO INTEGRATING' },
        { text: '70 AUDIO AND VIDEO MONITORING' },
      ],
    },
    {
      text: '24 ELECTRICAL POWER',
      children: [
        { text: '20 AC GENERATION' },
        { text: '80 ELECTRICAL POWER MULTIPLEXING' },
      ],
    },
    {
      text: '25 EQUIPMENT/FURNISHINGS',
      children: [
        { text: '10 FLIGHT COMPARTMENT' },
      ],
    },
    {
      text: '27 FLIGHT CONTROLS',
      children: [
        { text: '00 FLIGHT CONTROLS' },
        { text: '10 AILERON CONTROL SYSTEM' },
        { text: '20 RUDDER CONTROL SYSTEM' },
        { text: '30 ELEVATOR CONTROL SYSTEM' },
        { text: '50 FLAP CONTROL SYSTEM' },
        { text: '60 SPOILER CONTROL SYSTEM' },
      ],
    },
    { text: '28 FUEL' },
    { text: '30 ICE AND RAIN PROTECTION' },
    { text: '31 INDICATING/RECORDING SYSTEMS' },
    { text: '32 LANDING GEAR' },
    { text: '33 LIGHTS' },
    { text: '34 NAVIGATION' },
    { text: '36 PNEUMATIC SYSTEMS' },
    { text: '38 WATER/WASTE' },
    { text: '42 INTEGRATED MODULAR AVIONICS' },
    { text: '44 CABIN SYSTEMS' },
    { text: '45 CENTRAL MAINTENANCE SYSTEMS' },
    { text: '46 INFORMATION SYSTEMS' },
    { text: '49 AIRBORNE AUXILIARY POWER' },
    { text: '52 DOORS' },
    { text: '73 ENGINE FUEL AND CONTROL' },
    { text: '75 AR' },
    { text: '76 ENGINE CONTROLS' },
    { text: '77 ENGINE INDICATING' },
    { text: '78 EXHAUST' },
    { text: '79 OIL' },
    { text: '80 STARTING' },
  ]

  const navBarButton: NavBarButtonType = {
    text: 'FDE',
    href: '/maintenancemessages/active/correlatedfdes',
    disabled: false,
    position: 5,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]}>
      <Title>Stored Maintenance Messages</Title>
      <FlightDetail left="ALL DATES" right="ALL FLIGHT LEGS" />
      <Accordion items={items} />
    </DefaultLayout>
  )
}

export default HistoricalByDate
