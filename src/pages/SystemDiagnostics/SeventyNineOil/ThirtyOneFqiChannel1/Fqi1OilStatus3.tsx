import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const Fqi1OilStatus3 = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS', alignLeft: true }, { title: 'TX1', hasBorderBottom: false }, { title: 'TX2', hasBorderBottom: false }]
  const secondaryHeaders = [{ title: 'IOGM3',  customSpan:2} , { title: 'IOGM2' }]

  const tableHeader2 = [{ title: 'PARAMETER', alignLeft: true }, { title: 'TX1', hasBorderBottom: false }, { title: 'TX2', hasBorderBottom: false }]
  const secondaryHeaders2 = [{ title: 'IOGM3',  customSpan:2} , { title: 'IOGM2' }]

  const data1 = [
    { parameter: 'L FUEL SHUTOFF SWITCH', statuses: [false, false], customSpan: 2 },
    { parameter: 'R FUEL SHUTOFF SWITCH', statuses: [false, false], customSpan: 2 },
  ]

  const data2 = [
    { parameter: 'CONFIGURATION-2 G500', statuses: [true, true], customSpan: 2  },
    { parameter: 'CONFIGURATION-3 G600', statuses: [false, false], customSpan: 2  },
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
      text: 'Prev',
      disabled: false,
      position: 4,
      onClick: () => { 
        navigate(-1)
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
      footer={<DataFooter left={'793104'} right={['Select prev to go back', 'Select done to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'4/4'} />
      <Legend title="run" title2="cut" />
      <DynamicTable data={data1} mainHeaders={tableHeader} secondaryHeaders={secondaryHeaders} />
      <Legend title="no" title2="yes" />
      <DynamicTable data={data2} mainHeaders={tableHeader2} secondaryHeaders={secondaryHeaders2} />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus3
