import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import { createStackNavigator } from "@react-navigation/stack";

import Aleatorios from "./src/componentes/aleatorios";
import Capturados from "./src/componentes/capturados";
import Favoritos from "./src/componentes/favoritos";
import Lista from "./src/componentes/lista";
import Usuario from "./src/componentes/usuario";
import Pokemon from "./src/componentes/pokemon";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function ListaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={ListaStack} />
        <Tab.Screen name="Aleatorios" component={Aleatorios} />
        <Tab.Screen name="Capturados" component={Capturados} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Usuario" component={Usuario} />
      </Tab.Navigator>
    /</NavigationContainer>
  );
}
