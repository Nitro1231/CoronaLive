import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Intro from '../components/Intro'
import Tab from '../components/Tab'

import Dashboard from '../pages/Tabs/Dashboard'
import Graphs from '../pages/Tabs/Graphs'
import Map from '../pages/Tabs/Map'
import COVID from '../pages/Tabs/COVID'
import Information from '../pages/Tabs/Information'

class Main extends React.Component {
    render() {
        var page
        switch (this.props.tab) {
            case 0:
                page = <Dashboard />
                break
            case 1:
                page = <Graphs />
                break
            case 2:
                page = <Map />
                break
            case 3:
                page = <COVID />
                break
            case 4:
                page = <Information />
                break
            default:
                page = <Dashboard />
        }
        return (
            <>
                <Intro />
                <Tab />
                <div className='page' id='top'>
                    {page}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    tab: state.tab
})
export default compose(connect(mapStateToProps, actions))(Main)