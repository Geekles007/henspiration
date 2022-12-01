import './App.css'
import PlayerUI from "./modules/player";
import {createContext} from "react";
import {useGlobal} from "./hooks/use-global";
import styled from "styled-components";

export const AppContext = createContext<any>(null);

const AppWrapper = styled.div<{cover: string}>`
  background: url(${({cover}) => cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function App() {
    const globalState = useGlobal();

    return (
        <AppContext.Provider value={globalState}>
            <AppWrapper cover={globalState?.album?.images?.[0]?.url ?? ""}>
                <PlayerUI/>
            </AppWrapper>
        </AppContext.Provider>
    )
}

export default App
