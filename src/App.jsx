// import logo from './logo.svg';
import './App.css';
import AllCharacteristics from './pages/AllCharacteristics';
import CharacterDetials from './pages/characterDetails';
import Navbar from './assets/Navbar.js';

function App() {
	return (
		<div className="App" id="homeAnchor">
			<header id="header" className="App-header">
				<Navbar />
				<img
					src={
						'https://roguetrader.owlcat.games/assets/preorder/images/RTlogo.png'
					}
					className="App-logo"
					alt="Desined text saying Warhammer 40,000, Rogue Trader."
					style={{ width: '500px', height: 'auto' }}
				/>
			</header>
			<CharacterDetials />
			<AllCharacteristics />
		</div>
	);
}

export default App;
