import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseImage from './components/ui/BaseImage.vue'
import SquareSvg from './components/svg/SquareSvg.vue';
import LineSvg from './components/svg/LineSvg.vue';
import SvgRight from './components/svg/SvgRight.vue';
import SvgLeft from './components/svg/SvgLeft.vue';
import SvgArrow from './components/svg/SvgArrow';
import BaseProyect from './components/ui/BaseProyect.vue';

const app = createApp(App)

app.use(router);

app.component('square-svg', SquareSvg);
app.component('base-image', BaseImage);
app.component('line-svg', LineSvg);
app.component('svg-right', SvgRight);
app.component('svg-left', SvgLeft);
app.component('svg-arrow', SvgArrow);
app.component('base-proyect', BaseProyect)

app.mount('#app');
