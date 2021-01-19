/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

import SvgImg from './SvgImg.vue';

export default { 
    install(app, options) {
        app.component("svg-img",SvgImg);
    }
}