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
    { text: '23 Communications' },
    { text: '24 Electrical Power' },
    { text: '25 EQUIPMENT/FURNISHINGS' },
    { text: '27 Flight Controls' },
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
    { text: '79 Oil' },
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
