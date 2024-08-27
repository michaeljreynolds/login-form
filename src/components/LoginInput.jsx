import '../styles/loginInput.css';

const LoginInput = ({ inputName, label, inputValue, inputType, changeCB, hasError, autoFocus }) => {
    return (
        <div className="input-container">
            <label for={inputName}>{label}</label>
            <input
                type={inputType}
                name={inputName}
                id={inputName}
                value={inputValue}
                onChange={(e) => { changeCB(inputName, e.target.value) }}
                className={hasError ? 'error' : ''}
                autoFocus={autoFocus}
            />
        </div>
    );
}
export default LoginInput;