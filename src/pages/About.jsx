import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';
import headshot from '../img/headshot.jpg';

const About = () => {
    return (
        <div className="container">
            <img src={headshot} className="headshot" alt="A headshot of a team member" />
            <div className="text-content">
                <h1>About Me</h1>
                <p>We are a leading real estate agency with years of experience.</p>
            </div>
        </div>
    );
};

export default About;
