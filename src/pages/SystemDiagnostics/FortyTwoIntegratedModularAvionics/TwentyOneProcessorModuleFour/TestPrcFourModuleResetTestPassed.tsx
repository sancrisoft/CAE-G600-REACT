import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestPrcFourModuleResetTestPassed = () => {
  const navigate = useNavigate();
  const navBarButtons: NavBarButtonType[] = [
    {
      text: 'TEST MENU',
      disabled: false,
      position: 1,
      onClick: () => { 
        navigate(-3)
      },
    },
  ]

  return (
    <DefaultLayout 
      showNavBar 
      navBarButtons={navBarButtons}
    >
      <DataHeader left={'TEST: PRC4 MODULE RESET TEST'} isSuccess={true} right={''} />
      <Text indentSize={'l'} text={''} />
      <div className={styles.Body}>
        <div className={styles.Section}>
          <span className={styles.Title}>TEST PASSED</span>
        </div>
      </div>
      <Text indentSize={'l'} text={''} />
    </DefaultLayout>
  )
}

export default TestPrcFourModuleResetTestPassed
