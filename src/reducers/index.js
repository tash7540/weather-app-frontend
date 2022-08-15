
import { combineReducers } from 'redux';

import posts from './posts';
import forecastData from './forecast';
import timelineData from './timeline';
export const reducers = combineReducers({ posts,forecastData,timelineData});
