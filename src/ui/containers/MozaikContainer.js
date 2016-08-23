import { connect } from 'react-redux'
import Mozaik      from '../components/Mozaik'
import {
    fetchConfiguration
} from '../actions/configurationActions'


const mapStateToProps = state => {
    const {
        configuration,
        dashboards: {
            dashboards,
            current,
        }
    } = state

    return {
        ...configuration,
        dashboards,
        currentDashboard: current,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchConfiguration: () => {
        dispatch(fetchConfiguration())
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Mozaik)