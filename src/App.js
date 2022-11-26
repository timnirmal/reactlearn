import './App.css';
import Gallery from "./Gallery";

const welcomeText = "Hello World!";

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

// Passing Objects with double curly braces
const config = {
    name: 'React',
    version: '17.0.2',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Gallery person={{name:"tim", age:12 }}
                         images={["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]}
                         endText="End of Gallery"
                />
                <p style={config.theme}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {welcomeText}
                </a>
                <p>Today is {formatDate(today)}</p>
            </header>
        </div>
    );
}

export default App;
