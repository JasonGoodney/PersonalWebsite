import React from 'react';
import Layout from '../../components/Layout';
import { Title, SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectLinkTitle, SkillContainer } from './styles';
import MyBarbellIcon from '../../assets/images/mybarbell-icon.png'
import CCXMonitorIcon from '../../assets/images/ccx-monitor-icon.png'
import WikioKiIcon from '../../assets/images/wikio-ki-icon.png'

const Projects = ({ user }) => {

    const getIcon = name => {
        switch (name) {
            case 'mybarbell-icon.png':
                return MyBarbellIcon
            case 'ccx-monitor-icon.png':
                return CCXMonitorIcon
            case 'wikio-ki-icon.png':
                return WikioKiIcon
        }
    }
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <Title>App Store</Title>
                <ul>
                    {user.projects.appStore.map((project, i) => (
                        <ProjectItem key={i}>
                            <div>
                                <ProjectLinkTitle href={project.website} target="_blank">{project.name}</ProjectLinkTitle>
                                <img className="AppStoreIcon" src={getIcon(project.icon)} width="24px" height="24px" />
                            </div>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>

                <Title>GitHub Repos</Title>
                <ul>
                    {user.projects.github.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectLinkTitle href={project.githubUrl} target="_blank">{project.name}</ProjectLinkTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>

                <Title>Web Design</Title>
                <ul>
                    {user.projects.responsiveWebDesign.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectLinkTitle href={project.website} target="_blank">{project.name}</ProjectLinkTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>

                <Title>Front End Libraries</Title>
                <ul>
                    {user.projects.frontEndLibraries.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectLinkTitle href={project.website} target="_blank">{project.name}</ProjectLinkTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.languages, ...project.libraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout >
    );
};

export default Projects;