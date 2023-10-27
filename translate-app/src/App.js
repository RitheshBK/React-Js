import 'bulma/css/bulma.css'
import ProfileCard from "./components/ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    console.log(AlexaImage);
    console.log(CortanaImage);
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                    Personal Digital Assistants
                    </p>
                </div>
            </section>
            <div className="container">
                <section className='section'>
                    <div class="columns">
                        <div class="column is-3">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Alexa was created by Amazon and helps you buy things"
                            />
                        </div>
                        <div class="column is-3">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                image={CortanaImage}
                                description="Cortana was made by Microsoft"
                            />
                        </div>
                        <div class="column is-3">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                image={SiriImage}
                                description="Siri was made by Apple"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;