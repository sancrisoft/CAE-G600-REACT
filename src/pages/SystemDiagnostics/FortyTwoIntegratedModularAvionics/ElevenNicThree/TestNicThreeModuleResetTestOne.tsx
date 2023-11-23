import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Warning from "../../../../components/Warning";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestNicThreeModuleResetTestOne = () => {
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
      href: '/systemdiagnostics/fortytwointegratedmodularavionics/elevennicthree/testnicthreemoduleresetpassed',
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
      <DataFooter left={'422105'} right={['Select confirm to continue']} />
      </>
    }
    >
      <DataHeader left={'NIC3 MODULE RESET TEST'} right={'1/2'} />
      <Text indentSize={'l'} text={''} />
      <div className={styles.Body}>
        <div className={styles.Section}>
          <span className={styles.Title}>PURPOSE:</span>
          <span className={styles.Description}>
            THIS TEST WILL INITIATE A SOFTWARE RESET OF MAU 2B TIMING NIC 4
          </span>
        </div>
        <div className={styles.Section}>
          <span className={styles.Title}>NOTE:</span>
          <span className={styles.Description2}>
            MAY CAUSE DISPLAY TO BLANK OR FLASH WHILE THE TEST IS IN PROGRESS
          </span>
        </div>
      </div>
      <Text indentSize={'l'} text={''} />
    </DefaultLayout>
  )
}

export default TestNicThreeModuleResetTestOne
