import "./index.css"
function Menu () {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><LInk to="/contato">Contato</LInk></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
}
export default Menu;