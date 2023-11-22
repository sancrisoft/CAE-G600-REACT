import Accordion, { AccordionItem } from "../../../components/Accordion"
import FlightDetail from "../../../components/FlightDetail"
import DefaultLayout from "../../../components/Layout"
import { NavBarButtonType } from "../../../components/NavBar"
import Title from "../../../components/Title"

const PresentLeg = () => {
  const items: AccordionItem[] = [
    {
      text: '21 Air Conditioning',
      children: [
        { text: '20 AIR DISTRIBUTION SYSTEM' },
        { text: '30 PRESSURIZATION CONTROL' },
        { text: '50 COOLING' },
      ],
    },
    {
      text: '22 Autoflight',
      children: [
        { text: '10 AUTOPILOT' },
        { text: '30 AUTO THROTTLE' },
      ],
    },
    { 
      text: '23 Communications',
      children: [
        { text: '00 COMMUNICATIONS'},
        { text: '10 SPEECH COMMUNICATIONS'},
        { text: '20 DATA TRANSMISSION AND AUTO-CALLING'},
        { text: '50 AUDIO INTEGRATING'},
        { text: '70 AUDIO AND VIDEO MONITORING'}
      ]
    },
    { 
      text: '24 Electrical Power',
      children: [
        { text: '20 AC GENERATION' },
        { text: '80 ELECTRICAL POWER MULTIPLEXING' }
      ] 
    },
    { 
      text: '25 EQUIPMENT/FURNISHINGS',
      children: [
        { text: '10 FLIGHT COMPARTMENT'}
      ] 
    },
    { 
      text: '27 Flight Controls',
      children: [
        { text: '00 FLIGHT CONTROLS' },
        { text: '10 ALERON CONTROL SYSTEM' },
        { text: '20 RUDDER CONTROL SYSTEM' },
        { text: '30 ELEVATOR CONTROL SYSTEM' },
        { text: '50 FLAP CONTROL SYSTEM' },
        { text: '60 SPOILER CONTROL SYSTEM' }
      ]
    },
    { text: '28 Fuel' },
    { text: '30 Ice And Rain Protection' },
    { text: '31 Indicating/Recording Systems' },
    { text: '32 Landing Gear' },
    { text: '33 Lights' },
    { text: '34 Navigation' },
    { text: '36 Pneumatic Systems' },
    { text: '38 Water/Waste' },
    { text: '42 Integrated Modular Avionics' },
    { text: '44 Cabin Systems' },
    { text: '45 Central Maintenance Systems' },
    { text: '46 Information Systems' },
    { text: '49 Airborne Auxiliary Power' },
    { text: '52 Doors' },
    { text: '73 Engine Fuel And Control' },
    { text: '75 Air' },
    { text: '76 Engine Controls' },
    { text: '77 Engine Indicating' },
    { text: '78 Exhaust' },
    { text: '79 Oil' },
    { text: '80 Starting' },
  ]

  const navBarButton: NavBarButtonType = {
    text: 'FED',
    href: '/maintenancemessages/active/correlatedfdes',
    disabled: false,
    position: 5,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]}>
      <Title>Stored Maintenance Messages</Title>
      <FlightDetail left="April 18, 2023" right="FlightLEG1" />
      <Accordion items={items} />
    </DefaultLayout>
  )
}

export default PresentLeg
