const TIMEOUT = 100;

const fakeAuth = {
    isAuthenticated: false,
    authenticate: (cb, timeout) => {
        this.isAuthenticated = true;
        setTimeout(cb, timeout || TIMEOUT) // fake async
    },
    signout: (cb, timeout) => {
        this.isAuthenticated = false
        setTimeout(cb, timeout || TIMEOUT)
    }
}

export default fakeAuth