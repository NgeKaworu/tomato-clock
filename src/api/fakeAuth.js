const TIMEOUT = 1000;

const fakeAuth = {
    authenticate: (cb, timeout) => {
        setTimeout(cb, timeout || TIMEOUT) // fake async
    },
    signout: (cb, timeout) => {
        setTimeout(cb, timeout || TIMEOUT)
    }
}

export default fakeAuth