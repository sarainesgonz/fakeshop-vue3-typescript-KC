import { RouteLocation } from "vue-router";

const haveSessionGuard = (to:RouteLocation, from:RouteLocation, next: any) => {
    const userSession = localStorage.getItem("access_token");
    if (userSession !== null) {
        next()
    } else {
        alert("Login to continue");
        next({ name: "loginView" });
    }
}

export default haveSessionGuard