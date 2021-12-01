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
                    onClick={() => setValue((v) => v - 1)}
                >
                    -
                </button>
                <button
                    onClick={() => setVisible(false)}
                >
                    hide
                </button>

                <HookCounter counter={value} />
                <Notification />
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

    return (
        <p>{counter}</p>
    );
};

const Notification = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {visible && <p> Hello</p>}
        </div>
    );
}

reactDom.render(<App />, document.getElementById('root'));