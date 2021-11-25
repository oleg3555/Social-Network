import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Feed} from "./components/News/Feed";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType,
    addPost: (text: string) => void
    addMessage: (id: string, text: string) => void
}

const App: React.FC<AppPropsType> = ({state, ...props}) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile addPost={props.addPost}
                                 profilePageData={state.profilePage}/>}/>
                    <Route path="/dialogs/*" element={
                        <Dialogs addMessage={props.addMessage}
                                 dialogsPageData={state.dialogsPage}/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
