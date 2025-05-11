import { Outlet } from 'react-router-dom'

import styles from './FormShell.module.scss'

const FormShell = () => {
  return(
    <div className={styles.containerBGForm}>
      <Outlet />
    </div>
  ) 
}

export default FormShell