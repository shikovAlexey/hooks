import React, { useState, useEffect } from "react";
import reactDom from "react-dom";

const App = () => {

    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);
    if (visible) {
        return (
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}
                >
                    +
                </button>
                <button
                    onClick={() => setVisible(false)}
                >
                    hide
                </button>

                <HookCounter counter={value} />
            </div>
        );
    } else {
        return <button
            onClick={() => setVisible(true)}
        >
            show
        </button>
    }
}

const HookCounter = ({ counter }) => {

    useEffect(() => {
        console.log('use effect()');
    }, [counter])

    return (
        <p>{counter}</p>
    );
};

reactDom.render(<App />, document.getElementById('root'));