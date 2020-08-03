import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SideNavItems, SideNavLink, Spacer } from 'carbon-components-react/lib/components/UIShell'
import { StyledSideNav, Image, ProfileLink } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faAppStoreIos,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

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
                return faGithubSquare
            case 'App Store':
                return faAppStoreIos
            case 'LinkedIn':
                return faLinkedin

        }
    }
    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                <Image src={user.basics.picture} />
                <h3>{user.basics.name}</h3>
                <p>{user.basics.email}</p>

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
        </StyledSideNav>
    )
}

export default Sidebar