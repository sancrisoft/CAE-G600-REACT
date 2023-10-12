import DefaultLayout from '../../../components/Layout'
import Title from '../../../components/Title'
import Accordion, { AccordionItem } from '../../../components/Accordion'
import { NavBarButtonType } from '../../../components/NavBar'

const Active = () => {
  const items: AccordionItem[] = [
    { text: '22 Autoflight' },
    { text: '23 Communications' },
    { text: '24 Electrical Power' },
    { text: '27 Flight Controls' },
    { text: '31 Indicating/Recording Systems' },
    { text: '32 Landing Gear' },
    { text: '34 Navigation' },
    { text: '36 Pneumatic Systems' },
    { text: '38 Water/Waste' },
    { text: '44 Cabin Systems' },
  ]

  const navBarButton: NavBarButtonType = {
    text: 'FED',
    href: '/maintenancemessages/active/correlatedfdes',
    disabled: false,
    position: 5,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]}>
      <Title>Active Maintenance Messages</Title>
      <Accordion items={items} />
    </DefaultLayout>
  )
}

export default Active
