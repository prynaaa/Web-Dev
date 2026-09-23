import {useEffect, useState} from "react";
import {useText} from "../services/useText.ts";
import Text from "./Text.tsx";

const Mirror = () => {

    const [text, setText] = useState<string>('');

    // use of custom hook
    const {upper, toUpper} = useText();

    useEffect(() => {
        toUpper(text)
    }, [text]);

    return (
        <>
            <h1>Mirror</h1>
            <input type="text"
               placeholder="Enter Mirror..."
               value={text}
               onChange={
                   (e) => {
                          console.log("inputted smth");
                          setText(e.target.value)
                   }
               }
            />
            Input: {text}
            <br/>
            Upper: {upper}
            <br/>
            <Text text={text} setText={() => setText}/>
        </>
    );
};

export default Mirror;