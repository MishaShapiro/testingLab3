const USERS = [{
    mail: "mishashapiro@mail.ru", pass: "admin", data: "Mikhail"
}, {
    mail: "123@123.com", pass: "123", data: "123"
}, {
    mail: "qwerty@gmail.com", pass: "qwerty", data: "QWERTY"
}]

export function getUserData(data: any) {
    const currUser = USERS.filter((user) => {
        return data.mail === user.mail && data.pass === user.pass
    })
    if (currUser.length) {
        return currUser[0].data
    }
    return null
}