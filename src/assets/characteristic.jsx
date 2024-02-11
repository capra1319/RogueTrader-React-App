import charSheet from '../assets/data/character.json'

let advToken = ["[ ][ ][ ][ ]", "[*][ ][ ][ ]", "[*][*][ ][ ]", "[*][*][*][ ]", "[*][*][*][*]"]
// let characteristics = { "Weapon Skill (WS)": 46, "Ballistic Skill (BS)": 44, "Strength (S)": 60, "Toughness (T)": 50, "Agility (Ag)": 34, "Intelligence (Int)": 53, "Perception (Per)": 41, "Willpower (WP)": 38, "Fellowship (Fel)": 37 }
//let characteristicsAdvToken = ["[*][*][ ][ ]", "[*][*][ ][ ]", "[*][*][ ][ ]", "[*][*][ ][ ]", "[*][ ][ ][ ]", "[*][*][*][ ]", "[ ][ ][ ][ ]", "[ ][ ][ ][ ]", "[ ][ ][ ][ ]"]

export default function Characteristic(props) {
    return (
        <div>
            <div className='singleCharacteristic'>
                <p>
                    <span className='characteristicsName'>{props.skill}</span>
                    <br />
                    <span className='characteristicsValue'>{charSheet.Characteristics[props.skill]['value']}</span>
                    <br />
                    <span className='characteristicsAdvToken'>{advToken[charSheet.Characteristics[props.skill]['rank']]}</span>
                </p>
            </div>
        </div>
    )
};