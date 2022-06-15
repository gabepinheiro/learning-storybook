import { ButtonHTMLAttributes, ReactNode } from "react"

import styles from './button.module.css'

export type Size = 'small' | 'medium' | 'large'

export type ButtonProps = {
  children: ReactNode
  primary?: boolean
  size?: Size
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button ({
  children,
  primary = false,
  size = 'small',
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[size],
    styles[primary ? 'primary' : 'secondary']
  ].join(' ')

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
