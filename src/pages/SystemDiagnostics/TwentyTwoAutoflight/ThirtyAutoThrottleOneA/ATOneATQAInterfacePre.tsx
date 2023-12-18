import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Warning from "../../../../components/Warning";
import Text from "../../../../components/Text";

const ATOneATQAInterfacePre = () => {
  const navigate = useNavigate();
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
      text: 'CONFIRM',
      href: '/systemdiagnostics/twentytwoautoflight/thirtyautothrottleonea/atoneatqainterfacestatus',
      disabled: false,
      position: 2,
    },
  ]

  return (
    <DefaultLayout
      showNavBar
      navBarButtons={navBarButtons}
      footer={<DataFooter left={'223017'} right={['Select confirm to continue']} />}
    >
      <DataHeader left={'ATA1 TQA Interface Precondition'} right={'1/1'} />
      <Text text={'Purpose: To view TQA interface data'} />
      <Text indentSize={'l'} text={'over channel 1 command lane (A)'} />
      <Warning>
        <Text text={'Warning'} />
        <ol>
          <li>
            <Text text={'1.Only move one throttle lever at a time.'} />
          </li>
          <li>
            <Text text={'2.Return the throttle lever to the idle'} />
            <Text indentSize={'m'} text={'position before moving the other'} />
            <Text indentSize={'m'} text={'throttle lever.'} />
          </li>
          <li>
            <Text text={'3.L & R throttle lever greater than 22 deg'} />
            <Text indentSize={'m'} text={'will cause transition to in-air status'} />
            <Text indentSize={'m'} text={'and exit the a/t system diagnostic tests.'} />
          </li>
        </ol>
      </Warning>
      <Text text={'Operator procedure:'} />
      <Text indentSize={'m'} text={'select the *confirm* bezel to view'} />
      <Text indentSize={'m'} text={'TQA RX/TX DATA.'} />
    </DefaultLayout>
  )
}

export default ATOneATQAInterfacePre
