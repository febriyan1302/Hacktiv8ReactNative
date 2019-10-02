import Home from "../home";
import List from "../list";
import { createDrawerNavigator } from 'react-navigation-drawer';
export const Drawer = createDrawerNavigator({
  Home: Home,
  List: List
});