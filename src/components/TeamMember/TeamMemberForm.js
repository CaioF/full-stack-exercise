import React, { useState } from 'react';
import { pickRandomColor } from './colors';
import './TeamMember.css';

const TeamMemberForm = (props) => {
    const [color] = useState(pickRandomColor());
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');

    // On form submit, add new member to our database and update team member list
    const onSubmit = event => {
        event.preventDefault();
        props.submitForm({firstName, lastName, title, favoriteColor: color});
    }

    return (
        <div className="container">
            <header>
                <div className="avatar-container">
                    <img className="avatar" src="/img/avatar.jpeg" alt="join" />
                </div>
                <h2 className="title">New Teammate</h2>
                <h1 className="name">Join us!</h1>
            </header>
            <div className="body">
                <form onSubmit={onSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="last-name">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button type="submit" disabled={firstName === '' || lastName === '' || title === ''}>Submit</button>
                </form>
            </div>
            <footer style={{ backgroundColor: color }}>
                <div className="full-width-flex-box">
                    <div className="one-third-flex-box stat">9.0</div>
                    <div className="one-third-flex-box stat bordered">9.0</div>
                    <div className="one-third-flex-box stat">9.0</div>
                </div>
                <div className="full-width-flex-box">
                    <div className="one-third-flex-box">HONEST</div>
                    <div className="one-third-flex-box">FUN</div>
                    <div className="one-third-flex-box">AGILE</div>
                </div>
            </footer>
        </div>
    );
};

export default TeamMemberForm;
