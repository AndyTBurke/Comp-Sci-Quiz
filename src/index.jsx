import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"

function Loader() {
        
    const [play, setPlay] = React.useState(false)
    
    function IntroScreen() {
        return (
        <div className="intro-screen">
        <h1>Welcome to CompSci Trivia!</h1>
        <button className="check-button" onClick={() => setPlay(true)}>CLICK HERE TO BEGIN!</button>
        </div>
        )}
    
    return (
        <div classname="loader">
        {play ? <App /> : <IntroScreen />}
        </div>
    )
}


ReactDOM.render(<Loader />, document.getElementById("root"))