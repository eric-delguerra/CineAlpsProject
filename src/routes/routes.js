import Vitrine from "../components/vitrine";
import LoginForm from "../components/Login";
import SignInForm from "../components/signIn";

const routes = [
    {
        path: "/",
        component: Vitrine
    },
    {
        path: "/log",
        component: LoginForm
    },
    {
        path: "/sign",
        component: SignInForm
    }
]

export default routes
