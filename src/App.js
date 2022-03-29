import React, { useState, useEffect } from 'react';
import { api } from './api';
import TeamMember, {TeamMemberForm} from './components/TeamMember';
import './App.css';

const App = (props) => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api.get('/team');

            setTeam(response.data);
            setLoading(false);
        } catch (error) {
            // try again after half a second if fails due to race condition
            console.log('retrying initial data request...');
            setTimeout(() => {
                fetchData();
            }, 500);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const submitForm = async (teamMember) => {
        api.post('/team', teamMember).then((res) => {
            res.status != 500 ? fetchData() : console.log('res')
        });
    }

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="app">
            <h1>Meet the Team!</h1>
            <div className="team-grid" />
            {team.map((member) => (
                <TeamMember
                    key={member.id}
                    name={`${member.firstName} ${member.lastName}`}
                    title={member.title}
                    photoUrl={member.photoUrl}
                    story={member.story}
                    favoriteColor={member.favoriteColor}
                />
            ))}
            {/* Make this new team member link to your form! */}
            <TeamMemberForm submitForm={submitForm} id="new" name="Join us!" title="New Teammate" />
        </div>
    );
};

export default App;
