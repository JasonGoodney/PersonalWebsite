import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink, Spacer } from 'carbon-components-react/lib/components/UIShell'
import { StyledSideNav, Image, ProfileLink, EmailLink } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faGithubSquare,
    faAppStore,
    faAppStoreIos,
    faLinkedinIn,
    faLinkedin,
    faFreeCodeCamp
} from '@fortawesome/free-brands-svg-icons';
import {
    faHeart
} from '@fortawesome/free-solid-svg-icons'

const items = [
    { name: 'Me', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' },
]

const Sidebar = ({ user }) => {
    const location = useLocation()

    const getLogo = network => {
        switch (network) {
            case 'GitHub':
                return faGithub
            case 'App Store':
                return faAppStore
            case 'LinkedIn':
                return faLinkedinIn
            case 'freeCodeCamp':
                return faFreeCodeCamp

        }
    }
    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                <Image src={user.basics.picture} />
                <h3>{user.basics.name}</h3>
                <EmailLink href={`mailto: ${user.basics.email}`}>{user.basics.email}</EmailLink>

                <div className="Sidebar-page-links">
                    {items.map(item => (
                        <SideNavLink
                            isActive={
                                location.pathname === '/' && item.path === '/' ? true : location.pathname === item.path
                            }
                            element={Link}
                            to={item.path}
                            key={item.path}
                        >
                            {item.name}
                        </SideNavLink>
                    ))}
                </div>

                <div className="Sidebar-profile-links">
                    {user.basics.profiles.filter(profile => profile.network !== 'gitconnected').map((profile, i) => (
                        <ProfileLink key={profile.network}>
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                <FontAwesomeIcon icon={getLogo(profile.network)} />
                            </a>
                        </ProfileLink>
                    ))}
                </div>
            </SideNavItems>
            <div style={{ marginBottom: '1rem' }}>
                Made with <FontAwesomeIcon icon={faHeart} /> in Utica, NY
            </div>
        </StyledSideNav>
    )
}

export default Sidebar