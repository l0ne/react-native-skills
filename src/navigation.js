import {createAppContainer, createStackNavigator} from "react-navigation";
import {WelcomeScreen} from "./pages/welcome";
import {SignInScreen} from "./pages/signin";
import {SignUpScreen} from "./pages/signup";
import {WalkthtoughScreen} from "./pages/walkthtough";
import {HomeScreen} from "./pages/home";
import {PlannerScreen} from "./pages/planner";

const AppNavigator = createStackNavigator(
    {
        Welcome: WelcomeScreen,
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
        Walkthtough: WalkthtoughScreen,
        Home: HomeScreen,
        Planner: PlannerScreen,
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'none',
    }
);

export const AppContainer = createAppContainer(AppNavigator);
