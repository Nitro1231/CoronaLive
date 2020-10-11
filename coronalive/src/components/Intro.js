import React from 'react'
import RTE from 'react-typing-effect'
import BG from '../assets/img/header-background.jpg'
import LOGO from '../assets/img/logo.png'

class Intro extends React.Component {
    render() {
        return (
            <>
                <div className='bg'>
                    <img className='bgImg' src={BG} />
                    <img className='logo' src={LOGO} />
                    <div className='introBox'>
                        CoronaLive <br />
                        {'Stay '}
                        <strong>
                            <RTE
                                speed='80'
                                eraseDelay='1200'
                                typingDelay='80'
                                text={[
                                    'SAFE',
                                    'HEALTHY',
                                    'HOME',
                                    'AWARE',
                                ]}
                            />
                        </strong>
                        <p><br />CoronaLive shares the data about COVID-19 in real-time.</p>
                        <a className='btn' href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html' target='_blank'>
                            Symptoms
                        </a>
                        <a className='btn' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' target='_blank'>
                            Public Advice
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
export default Intro