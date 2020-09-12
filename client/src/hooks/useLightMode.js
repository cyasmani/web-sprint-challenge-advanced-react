import useLocalStorage from "./useLocalStorage"
import {useEffect} from 'react'

const useLightMode = () => {
    const [lightMode, setLightMode] = useLocalStorage('lightmode', false)
    //state

    useEffect(() => {
        //useEffect selects body and changes it to light mode
        const myBody = document.querySelector("body");
        if(lightMode) {
            //if lightmode == true then run this if statement
            myBody.classList.add("light-mode")
        } else {
            myBody.classList.remove("light-mode")
        }
    },[lightMode])

    
    return [lightMode, setLightMode]
};


export default useLightMode