/**
 * Created by zyt on 15-5-2.
 */

var apply = require('common/util/apply');

function Component (config) {

    this.initConifg = config;

    apply(this, config);

    this.init();
};

Component.prototype = {

    init: function () {
        console.log('init component');
    }

};