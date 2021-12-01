import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

const App = () => {

    const [color, setColor] = useState('white');
    const [fontSize, setFontSize] = useState(16);
    const [fontWeight, setFontWeight] = useState(600);

    return (
        <div style={{
            padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`, fontWeight: fontWeight
        }}>
            <p>Hello World!</p>
            <button style={{}}
                onClick={
                    () => setColor('white')
                }
            >
                White
            </button>
            <button
                onClick={() => setColor('gray')}
            >
                Black
            </button>
            <button
                onClick={() => setFontSize((fontSize) => fontSize + 2)}
            >
                +
            </button>
            <button
                onClick={() => setFontSize((fontSize) => fontSize - 2)}
            >
                -
            </button>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));