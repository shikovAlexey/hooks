import React, { useContext } from "react";
import reactDom from "react-dom";

const MyContext = React.createContext();

const App = () => {
    return (
        <MyContext.Provider value="Hello World Context">
            <Child />
        </MyContext.Provider>
    );
};

const Child = () => {
    const value = useContext(MyContext);

    return (
        <p>{value}</p>
    );
};

reactDom.render(<App />, document.getElementById('root'));