import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import "./App.scss"
import Advantages from "./components/Advantages/Advantages";

function App() {
    return (
        <div className="App">
            <div className="bg-dark">
                <Navigation/>
                <Introduction/>
            </div>
            <Advantages/>

        </div>
    );
}

export default App;
