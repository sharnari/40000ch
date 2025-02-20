import FormLogin from '../FormLogin'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
// Route, Link
// import FormRegistration from '../FormRegistration'

import '../../index.css'
import styles from './app.module.scss'

function App() {
  return (
    <Router>
      <header>
        <div className={styles.containerBGForm}>
          <FormLogin />
        </div>
      </header>
      <section></section>
      <footer></footer>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Link to="/">Главная</Link> | <Link to="/about">О нас</Link> */}
      </Routes>
    </Router>
  )
}

export default App
