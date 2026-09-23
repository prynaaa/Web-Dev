import {useEffect, useState} from "react";

type Props = {
    text:string
    setText: () => void
}

function Text (props:Props) {

    return (
        <>
            Text comp:
            {props.text}

            <button onClick={ () => props.setText()}>clear the text</button>
        </>
    );
};

export default Text;