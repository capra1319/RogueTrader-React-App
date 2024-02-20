import './Navbar.css';

document.querySelectorAll('div a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function Navbar () {
    return (
        <div className="navbar">
            <a href='#homeAnchor' className="navbar-option">Home</a>
            <a href="#CharacteristicStats" className="navbar-option">Characteristics</a>
        </div>
    );
}

export default Navbar;