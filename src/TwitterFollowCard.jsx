import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const follow = isFollowing ? 'Siguiendo' : 'Sígueme'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="../src/assets/react.svg" alt="Logo react" />
                <div className='tw-followCard-info' >
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {follow}
                </button>
            </aside>
        </article>
    )
}

/** 
 * También asi: src={`https://nnnn.nn/${userName}`}
 * 
 * formatUserName(userName)
 * 
 * Uso de children
 * <div className='tw-followCard-info' >
                    {children}
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>

    
    
 *  */