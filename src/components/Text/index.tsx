import { FC } from 'react'
import styles from './Text.module.scss'

export interface TextProps {
  text: string
  style?: 'header' | 'body'
  indentSize?: 's' | 'm' | 'l'
  aqua?: boolean
  marginTop?: boolean;
}

const Text: FC<TextProps> = ({ text, style, indentSize, aqua, marginTop }) => {
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
  const marginTopClass = marginTop ? styles.MarginTop : '';
  return <p className={`${extend} ${indent} ${color} ${marginTopClass} ${styles.Text}`}>{text}</p>
}

export default Text
