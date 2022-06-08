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
            <a href="#startSection01" className="navbar-option">Section 01</a>
            <a href="#startSection02" className="navbar-option">Section 02</a>
        </div>
    );
}

export default Navbar;