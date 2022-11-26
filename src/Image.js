import logo from "./logo.svg";

export default function Image() {
    return (
        <div className="App">
            <img
                src={logo}
                className="App-logo"
                alt="logo"
            />
        </div>
    );
}