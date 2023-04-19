import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38e6699a = () => interopDefault(import('..\\pages\\alternative.vue' /* webpackChunkName: "pages/alternative" */))
const _4478edbe = () => interopDefault(import('..\\pages\\calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _cea13510 = () => interopDefault(import('..\\pages\\charts.vue' /* webpackChunkName: "pages/charts" */))
const _3e9dd241 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _61f51be4 = () => interopDefault(import('..\\pages\\lock.vue' /* webpackChunkName: "pages/lock" */))
const _358591d4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4f7f409a = () => interopDefault(import('..\\pages\\pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _e602fbf4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _4568121c = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _dc5670d0 = () => interopDefault(import('..\\pages\\components\\buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _d424bb8c = () => interopDefault(import('..\\pages\\components\\cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _3c9d94ad = () => interopDefault(import('..\\pages\\components\\grid-system.vue' /* webpackChunkName: "pages/components/grid-system" */))
const _51a85a71 = () => interopDefault(import('..\\pages\\components\\icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _a6365382 = () => interopDefault(import('..\\pages\\components\\notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _0956c5e8 = () => interopDefault(import('..\\pages\\components\\typography.vue' /* webpackChunkName: "pages/components/typography" */))
const _2e40ae72 = () => interopDefault(import('..\\pages\\forms\\components.vue' /* webpackChunkName: "pages/forms/components" */))
const _10db34d3 = () => interopDefault(import('..\\pages\\forms\\elements.vue' /* webpackChunkName: "pages/forms/elements" */))
const _6a47eb56 = () => interopDefault(import('..\\pages\\forms\\validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _35ae60b3 = () => interopDefault(import('..\\pages\\maps\\google.vue' /* webpackChunkName: "pages/maps/google" */))
const _db6f6286 = () => interopDefault(import('..\\pages\\maps\\vector.vue' /* webpackChunkName: "pages/maps/vector" */))
const _4e368df2 = () => interopDefault(import('..\\pages\\pages\\timeline.vue' /* webpackChunkName: "pages/pages/timeline" */))
const _eae8f608 = () => interopDefault(import('..\\pages\\pages\\user.vue' /* webpackChunkName: "pages/pages/user" */))
const _622da075 = () => interopDefault(import('..\\pages\\tables\\paginated.vue' /* webpackChunkName: "pages/tables/paginated" */))
const _91829c78 = () => interopDefault(import('..\\pages\\tables\\regular.vue' /* webpackChunkName: "pages/tables/regular" */))
const _aa03b200 = () => interopDefault(import('..\\pages\\tables\\sortable.vue' /* webpackChunkName: "pages/tables/sortable" */))
const _1b9593ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/alternative",
    component: _38e6699a,
    name: "alternative"
  }, {
    path: "/calendar",
    component: _4478edbe,
    name: "calendar"
  }, {
    path: "/charts",
    component: _cea13510,
    name: "charts"
  }, {
    path: "/dashboard",
    component: _3e9dd241,
    name: "dashboard"
  }, {
    path: "/lock",
    component: _61f51be4,
    name: "lock"
  }, {
    path: "/login",
    component: _358591d4,
    name: "login"
  }, {
    path: "/pricing",
    component: _4f7f409a,
    name: "pricing"
  }, {
    path: "/register",
    component: _e602fbf4,
    name: "register"
  }, {
    path: "/widgets",
    component: _4568121c,
    name: "widgets"
  }, {
    path: "/components/buttons",
    component: _dc5670d0,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _d424bb8c,
    name: "components-cards"
  }, {
    path: "/components/grid-system",
    component: _3c9d94ad,
    name: "components-grid-system"
  }, {
    path: "/components/icons",
    component: _51a85a71,
    name: "components-icons"
  }, {
    path: "/components/notifications",
    component: _a6365382,
    name: "components-notifications"
  }, {
    path: "/components/typography",
    component: _0956c5e8,
    name: "components-typography"
  }, {
    path: "/forms/components",
    component: _2e40ae72,
    name: "forms-components"
  }, {
    path: "/forms/elements",
    component: _10db34d3,
    name: "forms-elements"
  }, {
    path: "/forms/validation",
    component: _6a47eb56,
    name: "forms-validation"
  }, {
    path: "/maps/google",
    component: _35ae60b3,
    name: "maps-google"
  }, {
    path: "/maps/vector",
    component: _db6f6286,
    name: "maps-vector"
  }, {
    path: "/pages/timeline",
    component: _4e368df2,
    name: "pages-timeline"
  }, {
    path: "/pages/user",
    component: _eae8f608,
    name: "pages-user"
  }, {
    path: "/tables/paginated",
    component: _622da075,
    name: "tables-paginated"
  }, {
    path: "/tables/regular",
    component: _91829c78,
    name: "tables-regular"
  }, {
    path: "/tables/sortable",
    component: _aa03b200,
    name: "tables-sortable"
  }, {
    path: "/",
    component: _1b9593ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
