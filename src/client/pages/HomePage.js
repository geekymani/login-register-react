import React from 'react';
import { Link , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../state-management/actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();    
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    handleLogout(e){
        this.props.logout();
    }

    render() {
        const { user, users , loggedIn} = this.props;
        if(!users.loading && !loggedIn){
            return <Redirect to="/login"/>;
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user?.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users?.loading && <em>Loading users...</em>}
                {users?.error && <span className="text-danger">ERROR: {users?.error}</span>}
                {users?.items &&
                    <ul>
                        {users?.items?.map((user, index) =>
                            <li key={user?.id}>
                                {user?.firstName + ' ' + user?.lastName}
                                {
                                    user?.deleting ? <em> - Deleting...</em>
                                    : user?.deleteError ? <span className="text-danger"> - ERROR: {user?.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user?.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <a  onClick={this.handleLogout}>Logout</a>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user, loggedIn } = authentication;
    return { user, users, loggedIn };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    logout: userActions.logout,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };