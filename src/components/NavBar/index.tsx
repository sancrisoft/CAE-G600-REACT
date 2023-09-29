import clsx from 'clsx'
import { HTMLAttributes, ElementType, FC } from 'react'
import Button from '../Button'
import styles from './NavBar.module.scss'

export interface NavBarButtonType {
  text: string
  href?: string
  onClick?: () => void
  disabled: boolean
  position?: 1 | 2 | 3 | 4 | 5
}

export interface NavBarProps<As extends ElementType = ElementType> extends HTMLAttributes<HTMLHeadingElement> {
  ariaLabel?: string
  element?: As
  buttons?: NavBarButtonType[]
  noPrev?: boolean
}

const NavBar: FC<NavBarProps> = (props) => {
  const { ariaLabel, className, element: Element = 'nav', style = {}, buttons, ...rest } = props

  const rootClasses = clsx(styles.NavBar, className)

  // const router = useRouter()

  const emptyItem: NavBarButtonType = {
    text: '',
    disabled: true,
  }

  const prev = props.noPrev
    ? emptyItem
    : {
        text: 'Prev',
        onClick: () => { 
          console.log('Back here')
          //router.back() 
        },
        disabled: false,
      }

  const navItems: NavBarButtonType[] = [
    {
      text: 'Main Menu',
      href: '/',
      disabled: false,
    },
    prev,
    emptyItem,
    emptyItem,
    emptyItem,
    emptyItem,
  ]

  const mergedItems: NavBarButtonType[] = [...navItems]

  buttons?.forEach(({ text, onClick, position, disabled, href }) => {
    if (position) {
      mergedItems[position] = { text, onClick, position, disabled, href }
    }
  })

  return (
    <Element className={rootClasses} aria-label={ariaLabel ?? undefined} style={style} {...rest}>
      {mergedItems.map((button, index) => {
        const { text, onClick, disabled, href } = button
        return (
          <div key={index} className={styles.NavItem}>
            <Button href={href || undefined} onClick={onClick || undefined} disabled={disabled}>
              {text}
            </Button>
          </div>
        )
      })}
    </Element>
  )
}

export default NavBar
