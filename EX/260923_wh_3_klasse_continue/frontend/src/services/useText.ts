/*
NEW: custom hook:
collection of state (var, function),
which can be used in a component
prefix as a convention: "use" + name of the hook

GOAL: text to uppercase
1. state
2. function
3. return of the uppercase-text
 */

import {useState} from "react";

export const useText = () => {
    const[upper, setUpper] = useState<string>('')

    function toUpper(text:string):void {
        setUpper(text.toUpperCase());
    }

    // return of a function as a reference
    return {upper, toUpper};
}