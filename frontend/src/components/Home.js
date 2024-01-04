import "./Home.css";
import Dashboard from "./Dashboard";


function Home() {
    return (
        <div className="Home">
                <Dashboard />
                <div className="Content">
                    <div className="left-right" id="trending">
                        <h1>Trending Products!</h1>
                    </div>
                </div>
        </div>
    ); 
}

export default Home;