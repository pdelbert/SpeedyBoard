import usersUseCase from '../../useCase/usersUseCases'

export const getTotalUsers = () => {
    const { getRegisteredUsers } = usersUseCase();
    return getRegisteredUsers();
}

export const getActivelUsers = () => {
    const { getActiveUsers } = usersUseCase();
    return getActiveUsers();
}

export const getUserGrowth = () => {
    const { getUserGrowth } = usersUseCase();
    const dataset = getUserGrowth();

    const series = [
        { dataKey: 'total_users', label: 'Total Users' },
        { dataKey: 'active_users', label: 'Active Users' }
    ]

    return { dataset, series }
}



