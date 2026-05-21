import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/home/Home.vue";
import Entradas from "@/pages/entradas/Entradas.vue";
import ComoLlegar from "@/pages/como-llegar/ComoLlegar.vue";

// Subpáginas de Programa
import Artistas from "@/pages/programa/Artistas.vue";
import DetalleArtista from "@/pages/programa/DetalleArtista.vue";
import Talleres from "@/pages/programa/Talleres.vue";
import Horarios from "@/pages/programa/Horarios.vue";

// Subpáginas de Información
import Normas from "@/pages/informacion/Normas.vue";
import PreguntasFrecuentes from "@/pages/informacion/PreguntasFrecuentes.vue";
import Recinto from "@/pages/informacion/Recinto.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/entradas',
      name: 'entradas',
      component: Entradas
    },
    {
      path: '/como-llegar',
      name: 'como-llegar',
      component: ComoLlegar
    },
    // Programa
    {
      path: '/programa/artistas',
      name: 'programa-artistas',
      component: Artistas
    },
    {
      path: '/programa/artistas/:id',
      name: 'detalle-artista',
      component: DetalleArtista
    },
    {
      path: '/programa/talleres',
      name: 'programa-talleres',
      component: Talleres
    },
    {
      path: '/programa/horarios',
      name: 'programa-horarios',
      component: Horarios
    },
    // Información
    {
      path: '/informacion/normas',
      name: 'informacion-normas',
      component: Normas
    },
    {
      path: '/informacion/preguntas-frecuentes',
      name: 'informacion-preguntas',
      component: PreguntasFrecuentes
    },
    {
      path: '/informacion/recinto',
      name: 'informacion-recinto',
      component: Recinto
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})