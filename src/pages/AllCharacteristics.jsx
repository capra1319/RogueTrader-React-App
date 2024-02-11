import Characteristic from '../assets/characteristic'

//variable

//Function HTML section
function AllCharacteristics() {
  return (
    <section
      id="CharacteristicStats"
      className="container"
    >
      <h1>Characteristics</h1>
      <div className="container-grid">
        <div className="Weapon-Skill">
          <Characteristic skill={'Weapon-Skill'} />
        </div>
        <div className="Ballistic-Skill">
          <Characteristic skill={'Ballistic-Skill'} />
        </div>
        <div className="Strength">
          <Characteristic skill={'Strength'} />
        </div>
        <div className="Toughness">
          <Characteristic skill={'Toughness'} />
        </div>
        <div className="Agility">
          <Characteristic skill={'Agility'} />
        </div>
        <div className="Intelligence">
          <Characteristic skill={'Intelligence'} />
        </div>
        <div className="Perception">
          <Characteristic skill={'Perception'} />
        </div>
        <div className="Willpower">
          <Characteristic skill={'Willpower'} />
        </div>
        <div className="Fellowship">
          <Characteristic skill={'Fellowship'} />
        </div>
      </div>
    </section>
  );
}

export default AllCharacteristics;