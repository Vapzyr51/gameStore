import Cookies from 'js-cookie';

export function checkSessionInfos() {
    const cookie = Cookies.get('XSRF-TOKEN');
    return cookie !== undefined;
}

// function to remove the cookie of the last ongoing session. 
// It should be called when disconnecting the user.
export function removeSessionInfos() {
    Cookies.remove('XSRF-TOKEN');
    return true;
}