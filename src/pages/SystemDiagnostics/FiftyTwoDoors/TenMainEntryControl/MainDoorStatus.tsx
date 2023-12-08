import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import Legend from "../../../../components/Legend";
import { NavBarButtonType } from "../../../../components/NavBar";
import DynamicTable from "../../../../components/DynamicTable";

const MainDoorStatus = () => {
  const navigate = useNavigate();

  const tableHeader = [{ title: 'DISCRETES', alignLeft:true }, { title: 'ch1' }, { title: 'ch2' }]
  const data = [
    { parameter: '11-28V L MAIN SUPPLY VMON', statuses: [true, true], customSpan: 2,  },
    { parameter: '12-28V L ESS SUPPLY VMON', statuses: [true, true], customSpan: 2,  },
    { parameter: '13-EBATT1 SUPPLY VMON', statuses: [true, true], customSpan: 2,  },
    { parameter: '14-EBATT2 SUPPLY VMON', statuses: [true, true], customSpan: 2,  },
    { parameter: '15-SW SUPPLY BLOCK INTLK VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '16-LATCH HI DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '17-UNLATCH HI DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '18-LATCH UNLATCH LO DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '19-LATCH UNLATCH LO DRIVE IMON', statuses: [false, false], customSpan: 2, },
    { parameter: '20-UNLOCK HI DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '21-UNLOCK LO DRIVE VMON', statuses: [false, false], customSpan: 2, },
    { parameter: '22 UNLOCK LO DRIVE IMON', statuses: [false, false], customSpan: 2, },
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
      href: '/systemdiagnostics/fiftytwodoors/tenmainentrycontrol/maindoorstatus1',
      disabled: false,
      position: 5,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'521008'} right={['Select fwd to continue']} />}
    >
      <DataHeader left={'DOOR STATUS #1 (A429 L352/L363)'} right={'1/6'} />
      <Legend title="true" title2="false" />
      <DynamicTable data={data} mainHeaders={tableHeader} />
    </DefaultLayout>
  )
}

export default MainDoorStatus
