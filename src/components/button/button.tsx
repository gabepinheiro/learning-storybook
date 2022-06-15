import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from './button.module.css'

export type Size = 'small' | 'medium' | 'large'

export type ButtonProps = {
  children: ReactNode
  primary?: boolean
  size?: Size
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button ({
  children,
  primary = false,
  size = 'small',
  icon,
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size],
    styles[primary ? 'primary' : 'secondary']
  ].join(' ')

  return (
    <button className={classNames} {...props}>
      {icon && icon}
      {children}
    </button>
  )
}
