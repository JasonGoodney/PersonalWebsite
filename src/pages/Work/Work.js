import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
    const getMonthName = month => {
        switch (month) {
            case 3:
                return "Mar"
            case 12:
                return "Dec"
        }
    }
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Work</SectionTitle>
                <ul>
                    {user.work.map((work, i) => (
                        <WorkItem key={i}>
                            <WorkTitle>{work.position}</WorkTitle>
                            <div>
                                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                                <span> &sdot; </span>
                                <span>
                                    {getMonthName(work.start.month)} {work.start.year} to {getMonthName(work.end.month)} {work.end.year}
                                </span>
                            </div>
                            <Paragraph>{work.summary}</Paragraph>
                        </WorkItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Work;