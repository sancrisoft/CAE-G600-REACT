import { useNavigate } from "react-router-dom";
import DataFooter from "../../../../components/DataFooter";
import DataHeader from "../../../../components/DataHeader";
import DefaultLayout from "../../../../components/Layout";
import { NavBarButtonType } from "../../../../components/NavBar";
import Warning from "../../../../components/Warning";
import Text from "../../../../components/Text";
import styles from './DataFooter.module.scss'


const TestNicTwoModuleResetTestPassed = () => {
  const navigate = useNavigate();
  const navBarButtons: NavBarButtonType[] = [
    {
      text: '',
      disabled: true,
      position: 1,
    },
    {
      text: 'ABORT',
      disabled: false,
      position: 3,
      onClick: () => { 
        navigate(-2)
      },
    },
  ]

  return (
    <DefaultLayout 
      showNavBar 
      navBarButtons={navBarButtons}
      footer={<DataFooter left={''} right={['Press either bezel to abort this test']} notLeft={true}/>}
    >
      <DataHeader left={'TEST: TNIC2 MODULE RESET TEST'} isSuccess={true} right={''} />
      <Text indentSize={'l'} text={''} />
      <div className={styles.Body}>
        <div className={styles.Section}>
          <span className={styles.Title}>TEST IN PROGRESS (01:00)</span>
        </div>
      </div>
      <Text indentSize={'l'} text={''} />
    </DefaultLayout>
  )
}

export default TestNicTwoModuleResetTestPassed
