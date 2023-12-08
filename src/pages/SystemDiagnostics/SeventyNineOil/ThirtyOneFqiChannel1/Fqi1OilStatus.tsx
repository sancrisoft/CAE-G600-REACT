import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const Fqi1OilStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'PARAMETERS', alignLeft: true }, { title: 'TX1', hasBorderBottom: false }, { title: 'TX2', hasBorderBottom: false }]
  const secondaryHeaders = [{ title: 'IOGM3',  customSpan:2} , { title: 'IOGM2' }]

  const data = [
    { parameter: 'L ENG OIL QTY LOW', statuses: [true, true], customSpan: 2 },
    { parameter: 'L ENG OIL SENSOR FAULT', statuses: [true, true], customSpan: 2 },
    { parameter: 'R ENG OIL QTY LOW', statuses: [true, true], customSpan: 2 },
    { parameter: 'R ENG OIL SENSOR FAULT', statuses: [true, true], customSpan: 2 },
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
      text: 'FWD',
      href: '/systemdiagnostics/seventynineoil/thirtyonefqichannel1/fqi1oilstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'793101'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'fqi eng oil status'} right={'1/4'} />
      <Legend />
      <DynamicTable data={data} mainHeaders={tableHeader} secondaryHeaders={secondaryHeaders}  />
    </DefaultLayout>
  )
}

export default Fqi1OilStatus
