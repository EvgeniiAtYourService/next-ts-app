import React, { useContext } from 'react'
import cn from 'classnames'
import styles from './Menu.module.css'
import { AppContext } from '../../context/app.context'

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)
  return (
    <div>
      {' '}
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
