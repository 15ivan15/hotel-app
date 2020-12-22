import vueRouter from 'vue-router'
import HotelesZona from './components/HotelesZona'
import HotelesCiudad from './components/HotelesCiudad'
import Inicio from './components/Inicio'
import App from './App'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: "root",
      component: App
    },
    {
      path: '/hotel/search',
      name: "HotelesZona",
      component: HotelesZona
    },
    {
      path: '/hotelname/:ciudad/:mes',
      name: "HotelesCiudad",
      component: HotelesCiudad
    },
    {
      path: '/inicio',
      name: "Inicio",
      component: Inicio
    },
  ]
})
export default router
