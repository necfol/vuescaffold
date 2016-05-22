var App = require('./App.vue')
var view0 = require('./components/view0.vue')
var view1 = require('./components/view1.vue')
var view2 = require('./components/view2.vue')
var signup = require('./components/signup.vue')
var signin = require('./components/signin.vue')
export default function (router) {
  router.map({
    '/': {
      name: 'app',
      component: App,
      subRoutes: {
        '/': {
          name: 'view0',
          component: view0
        },
        '/view0': {
          name: 'view0',
          component: view0
        },
        '/view1': {
          name: 'view1',
          component: view1
        },
        '/view2': {
          name: 'view2',
          component: view2
        }
      }
    },
    '/signup': {
      name: 'signup',
      component: signup
    },
    '/signin': {
      name: 'signin',
      component: signin
    }
  })
}
