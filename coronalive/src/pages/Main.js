import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../reducers/actions'

import Intro from '../components/Intro'

class Main extends React.Component {
    render() {
        return (
            <>
                <Intro />
                <div className='page' id='top'>
                    awd
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    tab: state.tab
})
export default compose(connect(mapStateToProps, actions))(Main)