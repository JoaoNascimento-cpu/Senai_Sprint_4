export const userLogado = () => localStorage.getItem('token') !== null

export const parseJWT = () =>
{
    let base64 = localStorage.getItem('token').split('.')[1]

    return JSON.parse(window.atob(base64))
}