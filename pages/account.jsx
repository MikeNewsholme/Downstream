import React from 'react'
import { useSession, signOut } from 'next-auth/react'


const Account = () => {
    const { data: session, status }  = useSession({required: true})

    if (status === "authenticated") {
        return (
            <div>
                <p>
                    welcome {session.user.name}
                </p>
            </div>
        )
    }else {
        return (
            <div>
                <p>You are not logged in</p>
            </div>
        )
    }
}

export default Account

