import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DynamicTable from "../../../../components/DynamicTable";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";

const DeckSwStatus2 = () => {
  const navigate = useNavigate();

  const mainHeaders = [{ title: 'SWITCH NAME', alignLeft: true }, { title: 'IOGM2' }, { title: 'IOGM3' }]
  const secondaryHeaders = [{ title: '1A' }, { title: '1B' }, { title: '2A' }, { title: '2B' }]
  const thirdHeaders = [{ title: 'FCC1' }, { title: 'FCC2' }]

  const data = [
    {
      parameter: 'PILOT AP DISC SW NC',
      statuses: [false, true, true, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT AP DISC SW NC',
      statuses: [false, true, true, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
  ]

  const data2 = [
    {
      parameter: 'PILOT AP DISC SW NO',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
    {
      parameter: 'COPILOT AP DISC SW NO',
      statuses: [false, false, false, false],
      type: ['noData', 'square', 'square', 'noData'],
    },
  ]

  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'PREV',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
      },
    },
    {
      text: 'done',
      disabled: false,
      position: 5,
      href: '/systemdiagnostics',
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'270126'} right={['Select done to continue', 'select prev to go back']} />}
    >
      <DataHeader left={'flight deck switch status '} right={'3/3'} />
      <Legend title="close" title2="open" />
      <DynamicTable
        data={data}
        mainHeaders={mainHeaders}
        secondaryHeaders={secondaryHeaders}
        hasBorder
        thirdHeaders={thirdHeaders}
      />
      <DynamicTable data={data2} />
    </DefaultLayout>
  )
}

export default DeckSwStatus2
