import { useNavigate } from 'react-router';
import ChaletIcon from '@mui/icons-material/Chalet';
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate()

    const toHome = ()=>{
        navigate('/')
    }

    return (
        <div className="NavBar">
            <header className="NavBar-header">
                <nav className="NavBar-Home" onClick={toHome}>
                    <ChaletIcon sx={{mr:1}}/>
                    Home
                </nav>
            </header>
        </div>
    )
}

export default NavBar