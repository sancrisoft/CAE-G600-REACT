import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestNicTwoModuleResetTestOne = () => {
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevennictwo/testnictwomoduleresetpassed',
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
      <DataFooter left={'422103'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'NIC2 MODULE RESET TEST'} right={'1/2'} />
      <Text indentSize={'l'} text={''} />
      <div className={styles.Body}>
        <div className={styles.Section}>
          <span className={styles.Title}>PURPOSE:</span>
          <span className={styles.Description}>
            THIS TEST WILL INITIATE A SOFTWARE RESET OF MAU 1B TIMING NIC 2
          </span>
        </div>
        <div className={styles.Section}>
          <span className={styles.Title}>NOTE:</span>
          <span className={styles.Description2}>
            RUNNING THIS TEST WILL CAUSE THE CMC MODULE TO RESET IT WILL TAKE SEVERAL MINUTES FOR THE CMC TO FULLY POWER DOWN AND THE RESTART
          </span>
        </div>
      </div>
      <Text indentSize={'l'} text={''} />
    </DefaultLayout>
  )
}

export default TestNicTwoModuleResetTestOne
