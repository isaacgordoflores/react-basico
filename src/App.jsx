import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'isaacgordoflores',
        name: 'Isaac Gordo Flores',
        isFollowing: true
    },
    {
        userName: 'otrousuario',
        name: 'Otro nombre',
        isFollowing: true
    },
]

export function App() {

    // const formatUserName = (userName) => `@${userName}`
    /**
     * Ejemplo de psasr elemento como prop, en este caso el elemento span
     *     const formattedUserName = (<span>@isaacgordoflores</span>)
     */

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing} key={userName}> {/* la key mejor un id de base de datos */}
                            <strong>{name}</strong>
                            Mas cositas aquí...
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}

/**
 * Ejemplo de como pasar funciones o elementos como parámetros
 * const formatUserName = (userName) => `@${userName}`
 * 
 * <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="isaacgordoflores" namme="Isaac Gordo Flores" />
 * 
 * Uso de children
 *         <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="isaacgordoflores" >
                <strong> Isaac Gordo Flores</strong>
                Mas cositas aquí
            </TwitterFollowCard>
 */