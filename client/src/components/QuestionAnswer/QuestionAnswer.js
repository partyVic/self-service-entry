
import { useNavigate } from 'react-router';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import styles from '../Styles/MaterialNav';
import './QuestionAnswer.css'


const QuestionAnswer = () => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }
    return (
        <div className="QA">

            <footer className="QA-footer">
                <div className="QA-footer-nav">
                    <Fab
                        variant="extended"
                        sx={styles.root}
                        onClick={goHome}>
                        <HomeIcon sx={{ mr: 1 }} />
                        HOME
                    </Fab>
                </div>
            </footer>

            <div className="QA-container">
                <div className="QA-accordion">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Does SSE sync to ESS, and perform the swap process?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Sadly to say NO. I don't have the API. SSE is a platform to share info at the moment.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Why I can't delete or edit my post?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                This feature will be implemented in the next build. So far is under stage 3.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Why some times the wait of loading shifts is long?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                SSE is hosted by Netlify &amp; Heroku (free). May move to a paid host for better user experiences if needed.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Why my mobile phone shows a different layout, does it has the same function as the web?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                YES! All the components are 100% responsive. Different mobile devices may display vary due to resolution.
                                The future build will be added IOS/Android App. Approx how long depends on my daily Baccarat free hand/new shoe counts T.T. So far is under stage 1.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Are there any new features later on?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, SSE is built by MERN.
                                Full of possibility to adopt any new features inculding gamimg, video streaming, chat room and more...
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Will my personal information be stolen/compromised when using SSE?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Absolutely NOT! All the codes are open sourced on Github.
                                No personal cookies &amp; sessions are been stored! Feel free to use SSE.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Can I give my thoughts on the features/styles?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Sincerely welcome! Github Pull requests are highly appreciated. Or send email to vicwang128@gmail.com.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnswer