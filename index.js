/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App'; // we are importing the app
import Apppro from './AppPro';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App); // we are registering the app for runing , we are registering the component 
