import { useState } from 'react'
import UserContext from './UserContext.js'

const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);
    // This includes password / userInfo / ...

    return (
       <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;