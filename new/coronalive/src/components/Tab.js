import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions.js'

class Tab extends React.Component {
    render() {
        const btn = this.props.tab
        const locate = () => {
            window.location.hash = 'top';
            window.location.hash = window.location.href.split('#')[0];
        }
        return (
            <>
                <div className='tabBox'>
                    <div
                        className={`tabItem ${btn === 0 ? 'enable' : 'disable'}`}
                        onClick={() => {
                            this.props.setTab(0);
                            locate();
                        }}>
                        Dashboard
                    </div>
                    <div
                        className={`tabItem ${btn === 1 ? 'enable' : 'disable'}`}
                        onClick={() => {
                            this.props.setTab(1);
                            locate();
                        }}>
                        Graphs
                    </div>
                    <div
                        className={`tabItem ${btn === 2 ? 'enable' : 'disable'}`}
                        onClick={() => {
                            this.props.setTab(2);
                            locate();
                        }}>
                        Map
                    </div>
                    <div
                        className={`tabItem ${btn === 3 ? 'enable' : 'disable'}`}
                        onClick={() => {
                            this.props.setTab(3);
                            locate();
                        }}>
                        COVID-19
                    </div>
                    <div
                        className={`tabItem ${btn === 4 ? 'enable' : 'disable'}`}
                        onClick={() => {
                            this.props.setTab(4);
                            locate();
                        }}>
                        Information
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    tab: state.tab
})
export default compose(connect(mapStateToProps, actions))(Tab)