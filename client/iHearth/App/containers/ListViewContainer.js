import { connect } from 'react-redux';
import ListView from '../components/ListView';
import { push, pop } from '../actions/nav-actions/navRootActions';
import { fetchPosts } from '../actions/listViewActions.js';
import { _handleNavigate } from '../lib/utils/navUtils';

function mapStateToProps(state) {
  return {
    coupons: state.listReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    fetchCoupons: () => dispatch(fetchPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);