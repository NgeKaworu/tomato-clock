const TIMEOUT = 1000;

const fakeAuth = {
    fakeAsync: (cb, timeout) => {
        setTimeout(cb, timeout || TIMEOUT) // fake async
    }
}

export default fakeAuth