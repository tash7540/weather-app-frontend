
import { combineReducers } from 'redux';

import posts from './posts';
import forecastData from './forecast';
export const reducers = combineReducers({ posts,forecastData });
