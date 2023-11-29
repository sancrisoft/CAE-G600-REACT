import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Text from "../../../../components/Text";

const TestPrcSixModuleResetTestOne = () => {
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/twentyprocessormodulesix/testprcsixmoduleresettesttwo',
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
      <DataFooter left={'422061'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'PRC6 MODULE RESET TEST'} right={'1/2'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />

      <Text text={'THIS TEST WILL INITIATE SOFTWARE RESET'} />
      <Text text={'OF MAU 1 PROCESSOR MODULE 6'} />
      <Text indentSize={'l'} text={''} />
      <Text indentSize={'l'} text={''} />
      <Text text={'RUNNING THIS TEST WILL CAUSE THE'} />
      <Text text={'FOLLOWING CAS MESSAGES TO BE DISPLAYED:'} />
      <Text indentSize={'s'} text={'     CMF 2 FAIL'} />
    </DefaultLayout>
  )
}

export default TestPrcSixModuleResetTestOne
