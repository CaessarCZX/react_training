import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'phealb',
    name: 'Pablo Heraldo',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: true
  }
]

const App = () => {
  const format = (userName) => `@${userName}`

  return (
    <section className='App'>
      {
        users.map((user) => {
          const {userName, name, isFollowing} = user
          return (
            <TwitterFollowCard 
              key={userName}
              initialIsFollowing={isFollowing}
              formatUserName={format}
              userName={userName}
              name={name}
            />
          )
        })
      }
    </section>
  )
}

export default App