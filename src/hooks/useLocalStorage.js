const useLocalStorage = () => {
    return {
        storage: {
            username: localStorage.getItem('username') ?? '',
            password: localStorage.getItem('password') ?? '',
            confirmPassword: localStorage.getItem('confirmPassword') ?? ''
        },
        setStorage: (key, value) => {
            localStorage.setItem(key, value);
        }
    }
}
export default useLocalStorage;