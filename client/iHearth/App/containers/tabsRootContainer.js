import { connect } from 'react-redux';
import TabsRoot from '../components/nav-components/TabsRoot';
import { changeTab } from '../actions/navActions';

function mapStateToProps(state) {
  return {
    tabs: state.tabReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (route) => dispatch(changeTab(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsRoot);