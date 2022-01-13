import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import registerRootComponent from 'expo/build/launch/registerRootComponent';

import Routes from './Routes';

registerRootComponent(Routes);
