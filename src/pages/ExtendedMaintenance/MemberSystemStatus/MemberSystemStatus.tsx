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
          text: '02 modular Radio Cabinet1 - nav Clust',
          secondColumn: ' operational',
        },
        {
          text: '02 modular Radio Cabinet2 - nav Clust',
          secondColumn: ' operational',
        },
        {
          text: '12 air data system 1',
          secondColumn: 'operational',
        },
        {
          text: '12 air data system 2',
          secondColumn: 'operational',
        },
        {
          text: '12 air data system 3',
          secondColumn: 'operational',
        },
        {
          text: '12 air data system 4',
          secondColumn: 'operational',
        },
        {
          text: '23 attitude heading reference system1',
          secondColumn: 'operational',
        },
        {
          text: '23 attitude heading reference system2',
          secondColumn: 'operational',
        },
        {
          text: '26 head up display',
          secondColumn: 'operational',
        },
        {
          text: '27 standby flight display1',
          secondColumn: 'operational',
        },
        {
          text: '27 standby flight display2',
          secondColumn: 'operational',
        },
        {
          text: '29 enhanced vision system sp',
          secondColumn: 'operational',
        },
        {
          text: '42 intertial reference system 1',
          secondColumn: 'operational',
        },
        {
          text: '42 intertial reference system 2',
          secondColumn: 'operational',
        },
        {
          text: '42 intertial reference system 3',
          secondColumn: 'operational',
        },
        {
          text: '44 weather radar',
          secondColumn: 'operational',
        },
        {
          text: '46 enhanced ground proximity warning 1',
          secondColumn: 'operational',
        },
        {
          text: '46 enhanced ground proximity warning 2',
          secondColumn: 'operational',
        },
        {
          text: '47 traffic collission avoidance system',
          secondColumn: 'operational',
        },
        {
          text: '52 global positioning system 1',
          secondColumn: 'operational',
        },
        {
          text: '52 global positioning system 2',
          secondColumn: 'operational',
        },
        {
          text: 'navcom',
          secondColumn: 'operational',
        },
        {
          text: '61 flight management system 1',
          secondColumn: 'operational',
        },
        {
          text: '61 flight management system 2',
          secondColumn: 'operational',
        },
        {
          text: '61 flight management system 3',
          secondColumn: 'operational',
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
