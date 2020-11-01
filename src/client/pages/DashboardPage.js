import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getUser, removeUserSession } from '../util/common';


    class DashboardPage extends React.Component {
        state = {
            show: false
        };
        showModal = e => {
            this.setState({
                show: !this.state.show
            });
        };

        render() {
            return (
                <section>
                    <h1>Dashboard</h1>
                    <p>This is the dashboard.</p>
                    <Link to="/posts" className="button">
                        View Posts
                    </Link>
                    <Link to="/movies" className="button">
                        View Movies
                    </Link>
                    <Link to="/seat-select" className="button">
                        Select Seats
                    </Link>
                    <Button variant="primary">Primary</Button>{' '}
                </section>
            )
        }
    }

export default DashboardPage;


