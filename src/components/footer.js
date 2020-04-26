import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'
import Emoji from './emoji'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className='footer center has-background-light'>
        <div className='content has-text-centered'>
          <p className='is-size-4'>
            Juan Esteban Pérez | User Experience Designer{' '}
            <Emoji emoji='📱' />
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
