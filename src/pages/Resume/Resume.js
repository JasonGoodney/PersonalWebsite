import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle } from '../../styles'
import ResumeDoc from '../../assets/documents/jasongoodney_resume.pdf'

const Resume = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Resume</SectionTitle>
                <div>
                    <embed src={ResumeDoc} width="500" height="600"
                        type="application/pdf"></embed>
                </div>
            </div>
        </Layout>
    )
}

export default Resume