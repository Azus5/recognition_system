// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import Vue from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue';
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';

InertiaProgress.init();

createInertiaApp({
  resolve: name => require(`../pages/${name}`),
  setup({ el, App, props }) {
    if (!window.axios) window.axios = axios;
    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
});