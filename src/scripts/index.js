// libs
//----------------------------------------------
window.$ = window.jQuery = require('jquery');
require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

// app
//---------------------------------------------
import APP from './components/app';

APP.init();
// atom test

require('./components/swiper/index');
require('./components/fadeIn/index');
require('./components/modal/index');

import '../styles/index.scss';
