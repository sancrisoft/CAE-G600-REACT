import { FC } from 'react'
import styles from './Text.module.scss'

export interface TextProps {
  text: string
  style?: 'header' | 'body'
  indentSize?: 's' | 'm' | 'l'
  aqua?: boolean
}

const Text: FC<TextProps> = ({ text, style, indentSize, aqua }) => {
  const extend = style === 'header' ? styles.HeaderStyle : styles.BodyStyle
  const indent =
    indentSize === 's'
      ? styles.SmallIn
      : indentSize === 'm'
      ? styles.MediumIn
      : indentSize === 'l'
      ? styles.LargeIn
      : ''
  const color = aqua ? styles.Aqua : ''
  return <p className={`${extend} ${indent} ${color} ${styles.Text}`}>{text}</p>
}

export default Text
