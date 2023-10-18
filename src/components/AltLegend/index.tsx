import Text from '../Text'
import styles from './AltLegend.module.scss'

const AltLegend = () => {
  return (
    <div className={styles.Container}>
      <Text text="DISAGREE-0" />
      <Text text="FALSE-1" />
      <Text text="TRUE-2" />
      <Text text="NO DATA-3" />
    </div>
  )
}

export default AltLegend
