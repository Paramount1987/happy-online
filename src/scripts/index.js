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

// atom test 43 new line 33

require('./components/swiper/index');
require('./components/fadeIn/index');
require('./components/modal/index');

import '../styles/index.scss';
