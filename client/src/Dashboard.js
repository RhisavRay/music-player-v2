import React from 'react'

import useAuth from './useAuth'

const Dashboard = ({code}) => {
    const accessToken = useAuth(code);
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard