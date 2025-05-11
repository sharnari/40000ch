import FormLogin from '../form/FormLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormRegistration from '../form/formRegistration'
import FormShell from '../../components/form/FormShell'

import '../../index.css'

function App() {
  return (
    <Router basename="/40000ch">
      <Routes>
        <Route path="/" element={<FormShell />}>
          <Route path="login" element={<FormLogin />} />
          <Route path="registration" element={<FormRegistration />} />
        </Route>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Link to="/">Главная</Link> | <Link to="/about">О нас</Link> */}
      </Routes>
    </Router>
  )
}

export default App
