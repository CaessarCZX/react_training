import { useState } from "react"
import PropTypes from 'prop-types'

export function TwitterFollowCard({ initialIsFollowing, formatUserName, userName, name }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt='El avatar de midudev' />
        <div className='tw-followCard-info'>
          <strong>
            {name}
          </strong>
          <span className='tw-followCard-infoUserName'>
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

TwitterFollowCard.propTypes = {
  initialIsFollowing: PropTypes.bool.isRequired,
  formatUserName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
