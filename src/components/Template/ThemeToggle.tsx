import React, { FC, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { changeTheme } from '../../store/layoutSlice'
import { useAppDispatch } from '../../store/store'
import { useAppSelector } from '../../store/hooks'
const ThemeToggle:FC = () => {
    const theme  = useAppSelector(s => s.layout.theme)
    const dispatch = useAppDispatch()
    useEffect(() => { 
      document.querySelector('html')?.setAttribute('data-theme', theme)

    }, [theme])

  return (
    <div className='checkbox_theme_container'>
    <label htmlFor="checkbox_theme" className='toggler'>
        <input type={'checkbox'} id='checkbox_theme' defaultChecked={theme === 'dark'? true: false} onChange={() => {  dispatch(changeTheme(theme === 'dark' ? 'light' : 'dark')) }}/>
        <span className={`ball ${theme === 'dark'?'checkbox_checked': ''}`}></span>
        <FaSun className='sun'></FaSun>
        <FaMoon className='moon'></FaMoon>
    </label>
    </div>
  )
}

export default ThemeToggle