import logo from './assets/react-logo.png';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Dashboard from './components/Dashboard';
//shift alt arrow copies
//alt and arrow moves where you want it
function App() {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            <h1 className= "px-8 py-6 text-3xl font-bold">Anime List</h1>
            <Dashboard />
        </div>
    );
}


export default App;
