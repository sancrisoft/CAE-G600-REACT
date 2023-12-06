import Accordion, { AccordionItem } from "../../../components/Accordion";
import DefaultLayout from "../../../components/Layout";
import { NavBarButtonType } from "../../../components/NavBar";
import Title from "../../../components/Title";

const MemberSystemStatus = () => {

  const items: AccordionItem[] = [
    {
      text: '21 AIR CONDITIOINING',
    },
    {
      text: '22 AUTOFLIGHT',
    },
    {
      text: '23 communications',
      color: 'cyan',
    },
    {
      text: '24 Electrical power',
    },
    {
      text: '25 equipment/furnishings',
    },
    {
      text: '27 flight controls',
    },
    {
      text: '28 Fuel',
    },
    {
      text: '31 indicating/recording systems',
    },
    {
      text: '32 Landing gear',
    },
    {
      text: '33 Lights',
    },
    {
      text: '34 navigation',
      children: [
        {
          text: '10 attitute heading reference system 1',
          secondColumn: ' operational',
        },
        {
          text: '10 attitute heading reference system 1',
          secondColumn: ' operational',
        },
        {
          text: '10 attitute heading reference system 2',
          secondColumn: ' operational',
        },
        {
          text: '10 attitute heading reference system 2',
          secondColumn: ' operational',
        },
        {
          text: '15 air daa application 1',
          secondColumn: ' operational',
        },
        {
          text: '15 air daa application 2',
          secondColumn: ' operational',
        },
        {
          text: '40 weather radar',
          secondColumn: ' operational',
        },
        {
          text: '40 weather radar (wx-700)',
          secondColumn: ' operational',
        },
        {
          text: '50 global positioning system 1 gnssu',
          secondColumn: ' operational',
        },
        {
          text: '50 global positioning system 2',
          secondColumn: ' operational',
        },
        {
          text: '61 fms application 1',
          secondColumn: ' operational',
        },
        {
          text: '61 fms application 2',
          secondColumn: ' operational',
        },
      ],
    },
    {
      text: '36 pneumatic systems',
    },
    {
      text: '42 Integrated Modular Avionics',
    },
    {
      text: '44 Cabin Systems',
      color: "cyan"
    },
    {
      text: '45 Central Maintenance Systems',
    },
    {
      text: '46 Information Systems',
    },
    {
      text: '49 Airborne Auxiliary power',
      color: 'cyan'
    },
    {
      text: '52 Doors',
    },
    {
      text: '73 Engine Fuel and control',
    },
    {
      text: '79 Oil',
    },
  ]

  const navBarButton: NavBarButtonType = {
    text: '',
    disabled: false,
    position: 4,
  }

  return (
    <DefaultLayout showNavBar navBarButtons={[navBarButton]}>
      <Title >member system status</Title>
      <Accordion items={items} />
    </DefaultLayout>
  )
};

export default MemberSystemStatus;
