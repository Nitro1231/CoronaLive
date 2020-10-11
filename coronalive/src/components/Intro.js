import React from 'react'
import RTE from 'react-typing-effect'
import BG from '../assets/img/header-background.jpg'

class Intro extends React.Component {
    render() {
        return (
            <>
                <div className='bg'>
                    <img className='bgImg' src={BG} />
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
                        <a className='btn' href='https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms'>
                            Symptoms
                        </a>
                        <a className='btn' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'>
                            Public Advice
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
export default Intro