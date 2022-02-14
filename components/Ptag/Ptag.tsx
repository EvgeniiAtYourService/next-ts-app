import React from 'react'
import styles from './Ptag.module.css'
import PtagProps from './Ptag.props'
import cn from 'classnames'

export const Ptag = ({
  size = 'm',
  className,
  children,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.commonP, className, {
        [styles.small]: size === 's',
        [styles.medium]: size === 'm',
        [styles.large]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  )
}
