import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Text from "../../../../components/Text";


const TestIOGFourModuleResetTestOne = () => {
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/thirtytwoinputoutputgatewayfourwithvideo/iogfourmoduleresettesttwo',
      disabled: false,
      position: 2,
    },
  ]

  return (
    <DefaultLayout 
    showNavBar 
    navBarButtons={navBarButtons}
    footer={
      <>
      <DataFooter left={''} right={['Select test menu to abort']} notLeft={true}/>
      <DataFooter left={'423203'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'IOG4 MODULE RESET TEST'} right={'1/2'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />

      <Text text={'THIS TEST WILL INITIATE SOFTWARE RESET'} />
      <Text text={'OF MAU 2 INPUT/OUTPUT GATEWAY MODULE 4'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />
      <Text text={'RUNNING THIS TEST WILL CAUSE THE'} />
      <Text text={'FOLLOWING CAS MESSAGES TO BE DISPLAYED:'} />
      <Text indentSize={'s'} text={'     IOGM 4 FAIL'} />
    </DefaultLayout>
  )
}

export default TestIOGFourModuleResetTestOne
