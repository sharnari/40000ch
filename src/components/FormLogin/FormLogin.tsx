import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UserOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import InputCustomAnt from '../ui/InputCustomAnt'

import styles from './formLogin.module.scss'
import logoWhite from '../../assets/logoArmotech-thin4px-white.svg'

interface LoginFormValues {
  username: string
  password: string
}

function FormLogin() {
  const [loading, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: 'onChange' })

  const submit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <div className={styles.pageForm}>
      <form onSubmit={handleSubmit(submit)} className={styles.formRegistration}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
          <img src={logoWhite} alt="logo" style={{ width: '70px' }} />
          <div style={{ width: '70px' }}>
            <Divider style={{ borderColor: '#ffffff' }}></Divider>
          </div>
          <h2>Вход</h2>
        </div>
        <InputCustomAnt
          name="username"
          control={control}
          rules={{ required: 'Имя обязательно для заполнения' }}
          size="large"
          prefix={<UserOutlined />}
          placeholder="Ваше имя при регистрации"
          status={errors.username ? 'error' : undefined}
        />
        <InputCustomAnt
          name="password"
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          size="large"
          prefix={<UserOutlined />}
          placeholder="Введите пароль"
          status={errors.username ? 'error' : undefined}
        />
        <Button style={{ borderRadius: '20px' }} size="large" type="primary" htmlType="submit" loading={loading}>
          Войти
        </Button>
      </form>
      <p className={styles.loginAncor}>
        Нет Аккаунта? <a href="#">Зарегистрироваться</a>
      </p>
    </div>
  )
}

export default FormLogin
