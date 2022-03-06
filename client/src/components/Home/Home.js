import { useNavigate } from 'react-router';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()

    const toShift = () => {
        navigate('/shiftswap')
    }

    const toPit = () => {
        navigate('/dailyswap')
    }

    const toQA = ()=>{
        navigate('/Q-and-A')
    }

    return (
        <div className='Home'>
            <h1 className="Home-title">SSE</h1>
            <h2 className='Home-name'>Self Service Entry</h2>
            <div className='Home-buttons'>
                <Stack spacing={6} direction='column' sx={{ marginTop: "20%" }}>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={toShift}
                    >
                        Shift Swap
                    </Button>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={toPit}
                    >
                        Daily Swap
                    </Button>
                </Stack>
            </div>
            <footer className="Home-footer">
                    <div className="Home-footer-QA" onClick={toQA}>Q&nbsp;&amp;&nbsp;A</div>
                <a href="https://github.com/partyVic/self-service-entry/">
                    <div className="Home-footer-logo">
                        <span className="Home-footer-logo-guide">User Guide&nbsp;</span>
                        <img className="Home-footer-logo-img" src="/images/githubLogo.svg" alt="User Guide" />
                    </div>
                </a>
            </footer>
        </div>
    )
}

export default Home