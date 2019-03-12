import {createAppContainer, createStackNavigator, createSwitchNavigator} from "react-navigation";
import {WelcomeScreen} from "../screens/welcome";
import SignInScreen from "../screens/signin";
import {SignUpScreen} from "../screens/signup";
import {WalkthtoughScreen} from "../screens/walkthtough";
import {HomeScreen} from "../screens/home";
import {PlannerScreen} from "../screens/planner";
import SettingsScreen from "../screens/settings";
import {DeedsScreen} from "../screens/deeds";

const AppStack = createStackNavigator({
        Settings: SettingsScreen,
        Walkthtough: WalkthtoughScreen,
        Home: HomeScreen,
        Planner: PlannerScreen,
        Deeds: DeedsScreen,
    }, {
        headerMode: 'none'
    });

const AuthStack = createStackNavigator({
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
    }, {
        headerMode: 'none'
    });

const AppNavigator = createSwitchNavigator({
        AuthLoading: WelcomeScreen,
        App: AppStack,
        Auth: AuthStack,
    }, {
        initialRouteName: 'AuthLoading'
    }
);

export const AppContainer = createAppContainer(AppNavigator);
