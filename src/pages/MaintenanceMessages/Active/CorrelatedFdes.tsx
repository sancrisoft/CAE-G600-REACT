import DefaultLayout from '../../../components/Layout'
import Title from '../../../components/Title'
import Accordion, { AccordionItem } from '../../../components/Accordion'
import { NavBarButtonType } from '../../../components/NavBar'
import Footer from '../../../components/Footer'

const CorrelatedFdes = () => {
  const items: AccordionItem[] = [
    { text: 'Caution' },
    { text: 'Advisory' },
    { text: 'Status' },
  ]

  const navBarButton: NavBarButtonType = {
    text: 'Main MSG',
    disabled: false,
    position: 4,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]}>
      <Title>Active Correlated FDEs</Title>
      <Accordion items={items} />
      <Footer>Monitor Warn Function 1 Selected</Footer>
    </DefaultLayout>
  )
}

export default CorrelatedFdes
