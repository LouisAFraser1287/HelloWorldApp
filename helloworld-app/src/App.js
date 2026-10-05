import './App.css';

function App() {

const sendTeams = () => {
    const user = "louis.fraser@gov.bc.ca";  
    const msg = " Test button, Hello from the web app!";
    window.open(`https://teams.microsoft.com/l/chat/0/0?users=${user}&message=${msg}`);
}

return (
    <div className="page"> 
        <div className="login-container">
            <form className="login-form">
                <input type="username" id="Username" placeholder="Username" />
                <input type="password" id="Password" placeholder="Password" /> 
                <button type="submit" onClick={sendTeams}>Login</button>
            </form>
        </div>

        
    </div>
);



}


export default App; 