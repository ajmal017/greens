export const signupUser = user => {
    return $.ajax({
        method: "POST",
        url: 'api/users',
        data: {user}
    })
}

export const loginUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/session",
        data: {user}
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: 'api/session'
    })
}

export const updateUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: {user}
    })
}