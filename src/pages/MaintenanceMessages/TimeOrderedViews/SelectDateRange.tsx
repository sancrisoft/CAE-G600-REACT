import Accordion, { AccordionItem } from "../../../components/Accordion"
import DefaultLayout from "../../../components/Layout"
import Title from "../../../components/Title"

const SelectDateRange = () => {
  const items: AccordionItem[] = [
    {
      text: '2023',
      children: [
        { text: 'February',
          children: [
            {
              text: '16 Thursday'
            }
          ]
        },
        { text: 'March',
          children: [
            {
              text: '07 Tuesday'
            },
            {
              text: '19 Sunday'
            },
            {
              text: '20 Monday'
            },
            {
              text: '21 Tuesday'
            },
            {
              text: '26 Sunday'
            },
            {
              text: '29 Wednesday'
            },
            {
              text: '31 Friday'
            },
          ]
        },
        { text: 'April',
          children: [
            { text: '02 Sunday' },
            {
              text: '04 Tuesday',
              children: [{ text: 'FLIGHT LEG 1 ' }],
            },
            {
              text: '09 Sunday',
              children: [
                {
                  text: 'FLIGHT LEG 1',
                  children: [
                    { text: 'Previous 7 Days' },
                    { text: 'Previous 14 Days' },
                    { text: 'Next 7 Days' },
                    { text: 'Next 14 Days' },
                  ],
                },
              ],
            },
            {
              text: '18 Tuesday',
              children: [{ text: 'FLIGHT LEG 1' }],
            },
          ],
        },
      ],
    },
  ]

  return (
    <DefaultLayout showNavBar>
      <Title variant="secondary">Select a Flight Leg</Title>
      <Accordion items={items} />
    </DefaultLayout>
  )
}

export default SelectDateRange
