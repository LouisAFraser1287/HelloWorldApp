import './App.css';

function App() {

const sendTeams = () => {
    const user = "louis.fraser@gov.bc.ca";  
    const msg = " Test message!";
    window.open(`https://teams.microsoft.com/l/chat/0/0?users=${user}&message=${msg}`);
}

return (
    <div className="page"> 
        <div className="msg-container">
            <form className="msg-box">
                <h1> Send me a message in teams</h1>
                <h2> Button redirects you to open teams</h2>
                <button type="submit" onClick={sendTeams}>Send message</button>
            </form>
        </div>

        
    </div>
);



}


export default App; 