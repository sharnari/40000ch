import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Button, Divider } from 'antd'

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
        <div className={styles.inputContainer} style={{ marginBottom: '16px' }}>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'Имя обязательно для заполнения' }}
            render={({ field }) => (
              <Input
                className={styles.inputField}
                size="large"
                {...field}
                prefix={<UserOutlined />}
                placeholder="Ваше имя при регистрации"
                status={errors.username ? 'error' : undefined}
              />
            )}
          />
          {errors.username && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.username.message}</p>}
        </div>
        <div className={styles.inputContainer} style={{ marginBottom: '16px' }}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать не менее 6 символов',
              },
            }}
            render={({ field }) => (
              <Input
                className={styles.inputField}
                size="large"
                {...field}
                prefix={<LockOutlined />}
                placeholder="Введите пароль"
                type="password"
                status={errors.password ? 'error' : undefined}
              />
            )}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.password.message}</p>}
        </div>
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
