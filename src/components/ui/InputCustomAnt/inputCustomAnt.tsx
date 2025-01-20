import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import { FieldValues, FieldError, Control, Controller, RegisterOptions, Path } from 'react-hook-form'

import styles from './inputCustomAnt.module.scss'

interface inputCustomAntProps<T extends FieldValues> extends InputProps {
  name: Path<T>
  control: Control<T>
  rules?: RegisterOptions<T, Path<T>>
  prefix: React.ReactNode
  size?: 'small' | 'middle' | 'large'
  error?: string | FieldError
  placeholder?: string
}

const InputCustomAnt = <T extends FieldValues>({
  name,
  control,
  rules = {},
  prefix,
  size,
  placeholder,
  ...rest
}: inputCustomAntProps<T>) => {
  return (
    <div className={styles.inputContainer} style={{ marginBottom: '16px' }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Input
              className={`${styles.inputField} ${fieldState?.error ? styles.error : ''}`}
              {...field}
              {...rest}
              prefix={prefix}
              size={size}
              placeholder={placeholder}
              status={fieldState?.error ? 'error' : undefined}
            />
            {fieldState?.error && (
              <p style={{ color: 'red', fontSize: '12px', margin: 0 }} className={styles.errorMessage}>
                {fieldState.error.message}
              </p> // Отображаем ошибку
            )}
          </>
        )}
      />
    </div>
  )
}

export default InputCustomAnt
