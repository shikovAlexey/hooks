import React, { useState, useEffect } from "react";
import reactDom from "react-dom";

const App = () => {

    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button
                    onClick={() => {
                        if (value < 60) {
                            setValue((v) => ++v)
                        }
                    }
                    }
                >
                    +
                </button>
                <button
                    onClick={() => {
                        if (value > 1) {
                            setValue((v) => --v)
                        }
                    }
                    }
                >
                    -
                </button>
                <button
                    onClick={() => setVisible(false)}
                >
                    hide
                </button>
                <PlanetInfo id={value} />
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

const usePlanetInfo = (id) => {

    const [planetName, setPlanetName] = useState(null);

    function getPlanetName(id) {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/` + id)
            .then(res => res.json())
            .then((planet) => !cancelled && setPlanetName(planet.name))
        return () => cancelled = true;
    };

    useEffect(() => {
        getPlanetName(id)
    }, [id]);

    return planetName;
}

const PlanetInfo = ({ id }) => {

    const name = usePlanetInfo(id);

    return (
        <div>
            {id} - {name}
        </div>
    );
};

reactDom.render(<App />, document.getElementById('root'));