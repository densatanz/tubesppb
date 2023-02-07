import { NativeBaseProvider, Icon, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignIn from "./page/Login";
import SignUp from "./page/Register";
import Home from "./page/Home";
import Friend from "./page/Friend";
import Account from "./page/Account";
import EditProf from "./page/EditProf";
import Membership from "./page/Membership";
import Payment from "./page/Payment";
import DetailPayment from "./page/DetailPayment";
import MemberAccount from "./page/MemberAccount";
import Splash from "./page/Splash";
import DetailDrakor from "./page/DetailDrakor";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigator = (props) => {
  const username = props.route.params.username;
  const email = props.route.params.email;
  const password = props.route.params.password;
  const paket = props.route.params.paket;
  const harga = props.route.params.harga;
  const metode = props.route.params.metode;
  const statusMember = props.route.params.statusMember;
  console.log(props);

  // const [username, setUsername] = useState(usernameDB);
  // const [email, setEmail] = useState(emailDB);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home-variant-outline";
          } else if (route.name === "Friend") {
            iconName = "clipboard-list";
          } else if (route.name === "Account") {
            iconName = "information-variant";
          }
          return (
            <Icon
              as={MaterialCommunityIcons}
              name={iconName}
              size={30}
              color={focused ? "#D6540B" : "#6E8FAD"}
            />
          );
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "#D6540B" : color} mb={2}>
              {children}
            </Text>
          );
        },
        tabBarStyle: {
          height: 50,
          borderTopWidth: 0,
          backgroundColor: "#DCDCDC",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ username, email, password, statusMember }}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Friend"
        component={Friend}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        initialParams={{ username, email, password, statusMember }}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={SignUp}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProf}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="Membership"
            component={Membership}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="Detail Payment"
            component={DetailPayment}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="MemberAccount"
            component={MemberAccount}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: "#D6540B" },
            }}
          />
          <Stack.Screen
            name="DetailDrakor"
            component={DetailDrakor}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
