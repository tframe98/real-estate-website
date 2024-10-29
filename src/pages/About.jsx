import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css';
import headshot from '../img/headshot.jpg';

const About = () => {
    return (
        <div className="container">
            <img src={headshot} className="headshot" alt="A headshot of a team member" />
            <div className="text-content">
                <h1>About Me</h1>
                <p>Having lived in Northern Nevada since 2018, Sam believes that buying or selling a home should be a seamless and enjoyable experience.


With a strong commitment to client satisfaction and a keen understanding of the local real estate market, Sam is dedicated to helping you achieve your real estate goals.


Whether you’re seeking your first home, a modern downtown condo, or an investment property, Sam is equipped with the insights and resources to help you make informed decisions.


When not working with clients, Sam enjoys exploring Lake Tahoe, playing guitar, hiking in the nearby mountains, and engaging with the local community.


Let’s connect and start your journey today!</p>
            </div>
        </div>
    );
};

export default About;
