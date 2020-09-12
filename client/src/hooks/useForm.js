// write your custom hook here to control your checkout form
import {useState} from "react";


const useInput = initialValue => {
    //useInput will pretty much be the same as useState
      const [value, setValue] = useState(initialValue);
      //setup state, initial value will hold value of username and password
      const handleChanges = updatedValue => {
        setValue(updatedValue);
        //whenever a change occurs it will update state
      };
      return [value, setValue, handleChanges];
      //this allows me to have state and handleChanges in the same hook. Cleaner code
  };

  export default useInput
  