import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons'
import { Input, Button, Divider } from 'antd'

import styles from './formRegistration.module.scss'
import logoWhite from '../../../assets/logoArmotech-thin4px-white.svg'
import { Link } from 'react-router-dom'

interface RegistrationFormValues {
  username: string
  email: string
  password: string
  repeatPassword: string
}

function FormRegistration() {
  const [loading, setLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({ mode: 'onChange' })

  const submit: SubmitHandler<RegistrationFormValues> = (data) => {
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
          <h2>РЕГИСТРАЦИЯ</h2>
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
                placeholder="Придумайте имя"
                status={errors.username ? 'error' : undefined}
              />
            )}
          />
          {errors.username && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.username.message}</p>}
        </div>
        <div className={styles.inputContainer} style={{ marginBottom: '16px' }}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Почта обязательна для заполнения',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email',
              },
            }}
            render={({ field }) => (
              <Input
                className={styles.inputField}
                size="large"
                {...field}
                prefix={<MailOutlined />}
                placeholder="Введите почту"
                type="email"
                status={errors.email ? 'error' : undefined}
              />
            )}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.email.message}</p>}
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
                placeholder="Придумайте пароль"
                type="password"
                status={errors.password ? 'error' : undefined}
              />
            )}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.password.message}</p>}
        </div>
        <div className={styles.inputContainer} style={{ marginBottom: '16px' }}>
          <Controller
            name="repeatPassword"
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
                placeholder="Повторите пароль"
                type="password"
                status={errors.password ? 'error' : undefined}
              />
            )}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: 0 }}>{errors.password.message}</p>}
        </div>
        <Button style={{ borderRadius: '20px' }} size="large" type="primary" htmlType="submit" loading={loading}>
          Продолжить
        </Button>
      </form>
      <p className={styles.loginAncor}>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  )
}

export default FormRegistration
