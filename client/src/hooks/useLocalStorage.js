import {useState} from "react";

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        //set up state
        const item = window.localStorage.getItem(key)
        //gets the key from localstorage
       console.log(item)

        return item ? JSON.parse(item) : initialValue;
        //QUESTION: Why is there nothing in LocalStorage? This still goes dark mode without the code here
    })

    const setValue = value => {
        //setter function
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}


export default useLocalStorage