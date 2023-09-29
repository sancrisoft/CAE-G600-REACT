import DefaultLayout from '../../components/Layout'
import Title from '../../components/Title'
import { AccordionItem, AccordionProvider } from '../../lib/context/AccordionContext'
import Accordion from '../../components/Accordion'
import { NavBarButtonType } from '../../components/NavBar'
import Footer from '../../components/Footer'

const ActivePage = () => {
  const items: AccordionItem[] = [
    {
      text: 'Warning',
      children: [
        {
          text: 'mgb oil press',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/warning/fde-details',
            },
          ],
        },
        {
          text: 'rotor low',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/warning/rotor-fde-details',
            },
          ],
        },
      ],
    },
    {
      text: 'caution',
      children: [
        {
          text: '1-2 ap off',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/caution/ap-fde-details',
            },
          ],
        },
        {
          text: '1-2 fuel pump',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/caution/fuel-pump-fde-details',
            },
          ],
        },
        {
          text: '1-2 hyd oil press',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: '1-2 servo',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: '1-2-4 hyd pump',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'aux batt off',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'avionic fault',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'cabin door',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'cockpit door',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'emer ldg press',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'ext pwr door',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'fms/gps mscp unavl',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'hyd util press',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'main batt off',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'nose whl unlk',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
        {
          text: 'park brk press',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
            },
          ],
        },
      ],
    },
    {
      text: 'advisory',
      children: [
        {
          text: 'ext pwr on',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/advisory/ext-pwr-fde-details',
            },
          ],
        },
      ],
    },
    {
      text: 'status',
      children: [
        {
          text: 'maintenance',
          secondColumn: 'active',
          children: [
            {
              text: '<fde details>',
              href: '/maintenance-messages/active/status/maintenance-fde-details',
            },
          ],
        },
      ],
    },
  ]

  const navBarButton: NavBarButtonType = {
    text: 'Maint MSG',
    disabled: false,
    position: 4,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]} footer={<Footer>Monitor Warn Function 1 Selected</Footer>}>
      <Title variant="secondary">Active Correlated FDEs</Title>
      <AccordionProvider pageIdentifier={'active'} hasAccordion={true}>
        <Accordion items={items} />
      </AccordionProvider>
    </DefaultLayout>
  )
}

export default ActivePage
