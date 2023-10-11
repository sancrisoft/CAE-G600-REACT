import clsx from 'clsx'
import React from 'react'
import styles from './ToggleSwitch.module.scss'

/* Gratefully hijacked from https://levelup.gitconnected.com/build-an-accessible-switch-component-with-react-and-typescript-d455a405aaa */

interface SwitchProperties {
  id: string
  label?: string
  onChange?: (isChecked: boolean) => void
  checked?: boolean
  disabled?: boolean
  className?: string
}

const ToggleSwitch: React.FC<SwitchProperties> = ({ id, label, onChange, className, ...props }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.checked)
  }

  const labelId = `label-${id}`

  return (
    <label htmlFor={id} className={clsx(styles.Switch, className)}>
      <input
        className={styles.SwitchInput}
        id={id}
        type="checkbox"
        role="switch"
        onChange={handleOnChange}
        aria-labelledby={labelId}
        {...props}
      />
      <div className={styles.SwitchLabels}>
        {label && (
          <span className={styles.Label} id={labelId}>
            {label}
          </span>
        )}
      </div>
    </label>
  )
}

export default ToggleSwitch
