
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink, Header1 } from './styles';
import backgroundImage from '../../assets/images/me_background.jpeg'

const Me = ({ user }) => {
    return (
        <Layout user={user}>
            {/* <div>
                <SectionTitle>About Me</SectionTitle>
                <Paragraph>{user.basics.summary}</Paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map(skill => (
                        <Pill key={skill.name}>{skill.name}</Pill>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {user.basics.profiles.map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div> */}
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                margin: '-2rem'
            }}>
                <div className='VerticalCenter'>
                    <Header1>Hi,</Header1>
                    <br />
                    <Header1>I'm {user.basics.name}</Header1>
                </div>
            </div>
        </Layout>
    );
};

export default Me;