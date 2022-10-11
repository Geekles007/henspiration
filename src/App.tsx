import './App.css'
import PlayerUI from "./modules/player";
import {createContext} from "react";
import {useGlobal} from "./hooks/use-global";

export const AppContext = createContext<any>(null);

function App() {
    const globalState = useGlobal();

    return (
        <AppContext.Provider value={globalState}>
            <div className="App">
                <PlayerUI/>
            </div>
        </AppContext.Provider>
    )
}

export default App
