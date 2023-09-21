//Imports:
//--Standard React
import * as React from 'react';
//--Navigation & ikoner
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//--Komponenter
import GrocerylistScreen from "./components/GrocerylistScreen";
import RecipeScreen from "./components/RecipeScreen";
import StackNavigator from "./components/StackNavigator";


//Konstanter
//--Konstant for tabnavigator.
const Tab = createBottomTabNavigator();

//--Tekst brugeren vises i de to "screen" komponenter
const GrocerylistScreenText = "Grocerylist!"
const RecipeScreenText = "Recipes!"


//Standard react applikation - root komponentet
function App() {
  return (
      //Navigations beholderen
      <NavigationContainer>
        {/* Navigationen kaldes som styrer tabsne
            screenOptions bruges til at bestemme ruten */}
        <Tab.Navigator screenOptions={({ route }) => ({
          /* styling af navigationsbaren */
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          /* Styling af tab-bar ikonerne
              Ionicons kaldes. https://ionic.io/ionicons 
              if-statement for at ikonerne fastsættes til de enkelte navigationer*/
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Grocerylist') {
              return (
                  <Ionicons
                      name={'cart-outline'}
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Recipe') {
              return (
                  <Ionicons
                      name='restaurant-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name='md-list-outline'
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        /* De importeret Screen-komponenter kaldes 
        Komponentet vises gennem en funktion som returner de komponenter der er fastlagt til Tab-navigationen  
        Hvert komponent bruger prop til at fremvise den tekst der er blevet angivet i konstanterne
        */
        >
          <Tab.Screen name="Recipe" children={()=><RecipeScreen prop={RecipeScreenText}/>} />
          <Tab.Screen name="Grocerylist" children={()=><GrocerylistScreen prop={GrocerylistScreenText}/>} />
          {/* nested stacknavigator der vil blive fremvist i settings */}
          <Tab.Screen name="Settings" component={StackNavigator} />
          {/* Tab-navigationen afsluttes */}
        </Tab.Navigator>
        {/* Navigations beholderen afsluttes */}
      </NavigationContainer>
  );
}

//Eksport
export default App