import FormRegistration from './components/formRegistration'

import './index.css'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <header>
        <div className={styles.containerBGForm}>
          <FormRegistration />
        </div>
      </header>
      <section></section>
      <footer></footer>
    </>
  )
}

export default App
