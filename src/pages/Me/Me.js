
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink, StyledH1, StyledH4 } from './styles';
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
                    <StyledH1>Hi,</StyledH1>
                    <br />
                    <StyledH1>I'm {user.basics.name}</StyledH1>
                    <br />
                    {/* <StyledH4>app dev, crossfit</StyledH4> */}
                </div>
            </div>
        </Layout>
    );
};

export default Me;