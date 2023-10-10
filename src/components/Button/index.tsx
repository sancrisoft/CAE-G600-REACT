import clsx from 'clsx'
import { ButtonHTMLAttributes, ElementType, FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export type ButtonVariant = 'primary' | 'unstyled' | 'twolines'

export type ButtonSize = 'auto' | 'large' | 'medium' | 'small'

export interface ButtonProps<As extends ElementType = ElementType> extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  disabled?: boolean
  element?: As
  href?: string
  link?: boolean | null
  size?: ButtonSize
  type?: 'submit' | 'reset' | 'button'
  variant?: ButtonVariant
}

const Button: FC<ButtonProps> = (props) => {
  const {
    ariaLabel,
    className,
    children,
    disabled = false,
    element: Element = props.href ? 'a' : 'button',
    link = false,
    size = 'large',
    type = 'button',
    variant = 'primary',
    onClick,
    style = {},
    ...rest
  } = props

  const rootClasses = clsx(
    styles[variant],
    styles[size],
    {
      [styles.Button]: !link,
      [styles.Link]: link,
      [styles.disabled]: disabled,
    },
    className
  )

  if (props.href) {
    return (
      <Link to={props.href} className={rootClasses} aria-label={ariaLabel ?? undefined} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <Element
      className={rootClasses}
      type={rest.href ? undefined : type}
      aria-label={ariaLabel ?? undefined}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default Button
