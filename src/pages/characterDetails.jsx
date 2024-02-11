import CharData from "../assets/data/character.json"

let CharacterData = CharData;

export default function CharacterDetails(props) {
	return (
		<section className="section Main-Content" id="mainDetails">
			<div>
				<div className="Character-Name">
					<p>
						<strong>Character Name:</strong> {CharacterData.FullName}
					</p>
				</div>
				<div className="Character-player">
					<p>
						<strong>Character Player:</strong> {CharacterData.Player}
					</p>
				</div>
				<div className="Character-Rank">
					<p>
						<strong>Rank:</strong> {CharacterData.Rank}
					</p>
				</div>
				<div className="Character-Career">
					<p>
						<strong>Career:</strong> {CharacterData.Career}
					</p>
				</div>
				<div className="Character-Motivation">
					<p>
						<strong>Motivation:</strong> {CharacterData.Motivation}
					</p>
				</div>
				<div className="Character-HomeWorld">
					<p>
						<strong>Home World:</strong> {CharacterData.Home_world}
					</p>
				</div>
			</div>
			<div className="Character-Description">
				<strong>Description: </strong> {CharacterData.Description}
			</div>
		</section>
	);
}
