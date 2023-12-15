import { useNavigate } from "react-router-dom";
import Accordion, { AccordionItem } from "../../../../components/Accordion";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";

const ProgrammableCasContents = () => {
  const navigate = useNavigate();

  const children = [
    {
      text: 'Severity - PROG',
      textLowerCase: true,
    },
    {
      text: 'Type - OPEN/GND',
      textLowerCase: true,
    },
    {
      text: 'Debounce - 0.0 SECONDS',
      textLowerCase: true,
    },
    {
      text: 'Enabled - NO',
      textLowerCase: true,
    },
  ]

  const items: AccordionItem[] = [
    {
      text: 'IDENT',
      children: [
        {
          text: 'PROG',
          children: [
            {
              text: 'MESSAGE #1 (346)',
              children: children,
            },
            {
              text: 'MESSAGE #10 (424)',
              children: children,
            },
            {
              text: 'MESSAGE #11 (427)',
              children: children,
            },
            {
              text: 'MESSAGE #12 (437)',
              children: children,
            },
            {
              text: 'MESSAGE #13 (485)',
              children: children,
            },
            {
              text: 'MESSAGE #14 (489)',
              children: children,
            },
            {
              text: 'MESSAGE #15 (566)',
              children: children,
            },
            {
              text: 'MESSAGE #16 (567)',
              children: children,
            },
            {
              text: 'MESSAGE #17 (568)',
              children: children,
            },
            {
              text: 'MESSAGE #18 (569)',
              children: children,
            },
            {
              text: 'MESSAGE #19 (570)',
              children: children,
            },
            {
              text: 'MESSAGE #2 (370)',
              children: children,
            },
            {
              text: 'MESSAGE #20 (571)',
              children: children,
            },
            {
              text: 'MESSAGE #21 (572)',
              children: children,
            },
            {
              text: 'MESSAGE #22 (573)',
              children: children,
            },
            {
              text: 'MESSAGE #23 (574)',
              children: children,
            },
            {
              text: 'MESSAGE #24 (575)',
              children: children,
            },
            {
              text: 'MESSAGE #25 (576)',
              children: children,
            },
            {
              text: 'MESSAGE #26 (577)',
              children: children,
            },
            {
              text: 'MESSAGE #27 (578)',
              children: children,
            },
            {
              text: 'MESSAGE #28 (579)',
            },
            {
              text: 'MESSAGE #29 (581)',
              children: children,
            },
            {
              text: 'MESSAGE #3 (371)',
              children: children,
            },
            {
              text: 'MESSAGE #30 (582)',
              children: children,
            },
            {
              text: 'MESSAGE #31 (583)',
              children: children,
            },
            {
              text: 'MESSAGE #32 (584)',
              children: children,
            },
            {
              text: 'MESSAGE #4 (380)',
              children: children,
            },
          ],
        },
      ],
    },
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
      text: 'DONE',
      href: '/systemdiagnostics',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'314001'} right={['Select done to continue']} />}
    >
      <DataHeader left={'Programmable Cas Contents'} right={'1/1'} />
      <Accordion items={items} />
    </DefaultLayout>
  )
}

export default ProgrammableCasContents
