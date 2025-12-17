import App from "./App.jsx";
import App2 from "./App2.jsx";
import "./Layout.css";

export default function Layout() {


    return (
        <div className="main">
            <div className="card">
                <h2>Lewo (App1)</h2>
                <App />
            </div>

            <div className="card">
                <h2>Prawo (App2)</h2>
                <App2 />
            </div>
        </div>
    );
}
