import Styles from './input.module.scss'

export const Input = ({type, placeholder, pattern, required, onBlur}) => {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        className={Styles.input}
        onBlur={onBlur}
       />
    )
}