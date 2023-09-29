import clsx from 'clsx'
import { HTMLAttributes, ElementType, FC, Children } from 'react'
import styles from './Menu.module.scss'

export interface MenuProps<As extends ElementType = ElementType> extends HTMLAttributes<HTMLUListElement> {
  ariaLabel?: string
  children: React.ReactNode
  element?: As
}

const Menu: FC<MenuProps> = (props) => {
  const { ariaLabel, className, children, element: Element = 'ul', style = {}, ...rest } = props

  const rootClasses = clsx(styles.Menu, className)

  const wrappedChildren = Children.map(children, (child, index) => {
    return (
      <li key={index} className={styles.MenuItem}>
        {child}
      </li>
    )
  })

  return (
    <Element className={rootClasses} aria-label={ariaLabel ?? undefined} style={style} {...rest}>
      {wrappedChildren}
    </Element>
  )
}

export default Menu
