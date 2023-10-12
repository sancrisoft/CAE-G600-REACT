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
        navigate(-1)
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
    <DefaultLayout showNavBar navBarButtons={navBarButtons}>
      <DataHeader left={'ATA1 TQA Interface Precondition'} right={'1/1'} />
      <Text text={'Purpose: To view TQA interface data'} />
      <Text indentSize={'l'} text={'over channel 1 command lane (A)'} />
      <Warning>
        <Text text={'Warning'} />
        <ol>
          <li>
            <Text text={'Only move one throttle lever at a time.'} />
          </li>
          <li>
            <Text text={'Return the throttle lever to the idle'} />
            <Text indentSize={'s'} text={'position before moving the other'} />
            <Text indentSize={'s'} text={'throttle lever.'} />
          </li>
          <li>
            <Text text={'L & R throttle lever greater than 22 deg'} />
            <Text indentSize={'s'} text={'will cause transition to in-air status'} />
            <Text indentSize={'s'} text={'and exit the a/t system diagnostic tests.'} />
          </li>
        </ol>
      </Warning>
      <Text text={'Operator procedure:'} />
      <Text indentSize={'s'} text={'select the *confirm* bezel to view'} />
      <Text indentSize={'s'} text={'TQA RX/TX DATA.'} />
      <DataFooter left={'223017'} right={['Select confirm to continue']} />
    </DefaultLayout>
  )
}

export default ATOneATQAInterfacePre
