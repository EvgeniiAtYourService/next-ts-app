import React from 'react'
import styles from './Tag.module.css'
import TagProps from './Tag.props'
import cn from 'classnames'

export const Tag = ({
  children,
  heightType = 's',
  color = 'ghost',
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(
        styles.common,
        {
          [styles.s]: heightType === 's',
          [styles.m]: heightType === 'm',
        },
        {
          [styles.ghost]: color === 'ghost',
          [styles.red]: color === 'red',
          [styles.green]: color === 'green',
          [styles.primary]: color === 'primary',
          [styles.grey]: color === 'grey',
        }
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}
