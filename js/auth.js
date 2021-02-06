export default function isAuthorithed() {
    const auth = localStorage.getItem('isAuthorized');
    if(!auth){
        return false;
    }
    return true;
  }