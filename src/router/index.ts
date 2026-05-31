import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Entradas from "@/pages/entradas/Entradas.vue";
import Pasarela from "@/pages/entradas/Pasarela.vue";
import ComoLlegar from "@/pages/como-llegar/ComoLlegar.vue";

// Subpáginas de Programa
import Artistas from "@/pages/programa/Artistas.vue";
import DetalleArtista from "@/pages/programa/DetalleArtista.vue";
import Talleres from "@/pages/programa/Talleres.vue";
import DetalleTaller from "@/pages/programa/DetalleTaller.vue";
import Horarios from "@/pages/programa/Horarios.vue";

// Subpáginas de Información
import Normas from "@/pages/informacion/Normas.vue";
import PreguntasFrecuentes from "@/pages/informacion/PreguntasFrecuentes.vue";
import Recinto from "@/pages/informacion/Recinto.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { fullWidth: true } // <-- HOME A PANTALLA COMPLETA
    },
    {
      path: '/entradas',
      name: 'entradas',
      component: Entradas
    },
    {
      path: '/entradas/pasarela',
      name: 'entradas-pasarela',
      component: Pasarela
    },
    {
      path: '/como-llegar',
      name: 'como-llegar',
      component: ComoLlegar
    },
    // Programa - Nested Routes
    {
      path: '/programa',
      children: [
        {
          path: 'artistas',
          name: 'programa-artistas',
          component: Artistas,
          meta: { fullWidth: true } // <-- ARTISTAS A PANTALLA COMPLETA 
        },
        {
          path: 'artistas/:id',
          name: 'detalle-artista',
          component: DetalleArtista
        },
        {
          path: 'talleres',
          name: 'programa-talleres',
          component: Talleres,
          meta: { fullWidth: true }
        },
        {
          path: 'talleres/:id',
          name: 'detalle-taller',
          component: DetalleTaller
        },
        {
          path: 'horarios',
          name: 'programa-horarios',
          component: Horarios
        }
      ]
    },
    // Información - Nested Routes
    {
      path: '/informacion',
      children: [
        {
          path: 'normas',
          name: 'informacion-normas',
          component: Normas
          
        },
        {
          path: 'preguntas-frecuentes',
          name: 'informacion-preguntas',
          component: PreguntasFrecuentes,
          meta: { fullWidth: true } // <-- NORMAS A PANTALLA COMPLETA
        },
        {
          path: 'recinto',
          name: 'informacion-recinto',
          component: Recinto
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
