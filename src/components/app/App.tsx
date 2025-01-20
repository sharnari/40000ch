import FormLogin from '../FormLogin'
import FormRegistration from '../FormRegistration'

import '../../index.css'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <header>
        <div className={styles.containerBGForm}>
          <FormLogin />
        </div>
      </header>
      <section></section>
      <footer></footer>
    </>
  )
}

export default App
