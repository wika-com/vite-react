import { useState } from "react";

export default function NaszApp() {
    const [liczba, setLiczba] = useState(0);

    function bigger() {
        setLiczba(liczba + 1);
    }

    return (
        <div>
            <button onClick={bigger}>przycisk</button>
            <h3>
                numer: <span>{liczba}</span>
            </h3>
        </div>
    );
}
