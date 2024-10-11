import { NativeWindStyleSheet } from "nativewind";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/Home";
import AboutScreen from "./screens/About";
import ContactScreen from "./screens/Contact";
import { AppWindow,  Info, Phone } from 'lucide-react-native'; 
const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#ffffff', 
            borderTopColor: 'transparent',
          },
          headerShown: false, 
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => <AppWindow color={color} />, 
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            tabBarIcon: ({ color }) => <Info color={color} />, 
          }} 
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{
            tabBarIcon: ({ color }) => <Phone color={color} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


NativeWindStyleSheet.setOutput({
  default: "native",
});