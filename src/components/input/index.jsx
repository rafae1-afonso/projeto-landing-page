import Styles from './input.module.scss'

export const Input = ({type, placeholder, pattern, required, onBlur, name, id, onChange, value}) => {
    return (
        <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        className={Styles.input}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
       />
    )
}