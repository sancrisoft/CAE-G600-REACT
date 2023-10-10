import clsx from 'clsx'
import { HTMLAttributes, ElementType, FC } from 'react'
import styles from './Title.module.scss'

export type TitleVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

export type TitleSize = 'auto' | 'subtitle'

export type Align = 'left'

export interface TitleProps<As extends ElementType = ElementType> extends HTMLAttributes<HTMLHeadingElement> {
  ariaLabel?: string
  children: React.ReactNode
  element?: As
  size?: TitleSize
  variant?: TitleVariant
  align?: Align
}

const Title: FC<TitleProps> = (props) => {
  const {
    ariaLabel,
    className,
    children,
    element: Element = 'h1',
    size = 'auto',
    variant = 'primary',
    style = {},
    align = 'center',
    ...rest
  } = props

  const rootClasses = clsx(styles.Title, styles[variant], styles[size], styles[align], className)

  return (
    <Element className={rootClasses} aria-label={ariaLabel ?? undefined} style={style} {...rest}>
      {children}
    </Element>
  )
}

export default Title
