import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Car from "./pages/Car.vue";
import Presation from "./pages/Prestation.vue"

import Cadillac from "./pages/Cars/Cadillac.vue";
import CoccinelleCox from "./pages/Cars/CoccinelleCox.vue";
import CombiT1 from "./pages/Cars/CombiT1.vue";
import LincolnTowncar from "./pages/Cars/LincolnTowncar.vue";
import NewBeetleCabriolet from "./pages/Cars/NewBeetleCabriolet.vue";
import CGU from "./pages/CGU.vue";
import MustangLegend from "./pages/Cars/MustangLegend.vue";
import AudiA4 from "./pages/Cars/AudiA4.vue";
import Porsche986 from "./pages/Cars/Porsche986.vue";
import MustangGT from "./pages/Cars/MustangGT.vue";
import RollsPhantom from "./pages/Cars/RollsPhantom.vue";
import BentleyContinentalGTSport from "./pages/Cars/BentleyContinentalGTSport.vue";
import AstonMartinVolante from "./pages/Cars/AstonMartinVolante.vue";
import DodgeCharger from "./pages/Cars/DodgeCharger.vue";
import FordCapri from "./pages/Cars/FordCapri.vue";
import RollsRoyceCorniche from "./pages/Cars/RollsRoyceCorniche.vue";
import Maserati from "./pages/Cars/Maserati.vue";
import Citroen from "./pages/Cars/2cv.vue";
import Mini from "./pages/Cars/mini.vue"

import Mariage from "./pages/prestations/Mariage.vue";
import Anniversaire from "./pages/prestations/Anniversaire.vue";
import Tournage from "./pages/prestations/Tournage.vue";
import Enterrement from "./pages/prestations/Enterrement.vue";
import Aeroport from "./pages/prestations/Aeroport.vue";
import Trajet from "./pages/prestations/Trajet.vue"


const routes = [
  { path: "/", component: Home, meta: {
    title: "Accueil - PrestaCar",
      metaTags: [
        {
          name: 'description',
          content: "Location de véhicules de prestige pour tous types d'événements."
        }
      ]
  }
  },
  {
    path: "/vehicules",
    component: Car,
    children: [
      {
        path: "cadillac-escalade",
        component: Cadillac,
        meta: {
          title: "Location Cadillac Escalade à Valenciennes - Confort et Luxe Assurés- PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Louez un Cadillac Escalade et profitez d'un véhicule spacieux et luxueux pour tous vos événements."
            }
          ]
        },
      },
      {
        path: "limousine-lincoln-towncar",
        component: LincolnTowncar,
        meta: {
          title: "Location Limousine Lincoln TownCar le luxe assurés à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Offrez-vous le summum de l'élégance avec notre Limousine Lincoln TownCar disponible à la location pour mariages, soirées VIP et événements spéciaux."
            }
            ]
        },
      },
      {
        path: "volkswagen-combi-t1",
        component: CombiT1,
        meta: {
          title: "Location Volkswagen Combi T1 à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Donnez une touche rétro à vos événements avec notre iconique Volkswagen Combi T1. Parfait pour mariages, photoshoots et occasions spéciales."
            }
            ]
        },
      },
      {
        path: "volkswagen-coccinelle",
        component: CoccinelleCox,
        meta: {
          title: " Location Volkswagen Coccinelle Cox à Valenciennes - Charme Vintage Assuré - Prestacar" ,
          metaTags: [
            {
              name: 'description',
              content: "Redécouvrez le plaisir de conduire avec la mythique Volkswagen Coccinelle. Idéale pour sorties romantiques, mariages ou simplement pour le plaisir."
            }
            ]
        },
      },
      {
        path: "volkswagen-new-beetle-cabriolet",
        component: NewBeetleCabriolet,
        meta: {
          title: "Location Volkswagen New Beetle Cabriolet à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Profitez d'une balade ensoleillée avec notre Volkswagen New Beetle Cabriolet. Location idéale pour une escapade romantique ou une sortie joyeuse entre amis."
            }
          ]
        },
      },
      {
        path: "mustang-legend-lime",
        component: MustangLegend,
        meta: {
          title: "Location Mustang Legend Lime à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: " Faites tourner les têtes avec la Mustang Legend Lime, une édition spéciale pleine de caractère. Location disponible pour les amateurs de voitures uniques et stylées."
            }
            ]
        },
      },
      {
        path: "audi-a4-allroad-blanche-quattro",
        component: AudiA4,
        meta: {
          title: "Location Audi A4 Allroad blanche Quattro à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Découvrez la polyvalence et le confort de l'Audi A4 Allroad Quattro blanche, parfaite pour toutes vos aventures. Luxe, sécurité et performance réunis en un seul véhicule."
            }
            ]
        },
      },
      {
        path: "porsche-986",
        component: Porsche986,
        meta: {
          title: "Location Porsche Boxster 986 à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Vivez une expérience de conduite inoubliable avec la Porsche 986 Boxster. Location disponible pour les amateurs de sensations fortes et de luxe."
            }
            ]
        },
      },
      {
        path: "mustang-gt",
        component: MustangGT,
        meta: {
          title: "Location Ford Mustang GT à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Exprimez votre côté sauvage avec la Ford Mustang GT, disponible à la location.Puissance et design iconique pour une expérience de conduite inoubliable. Parfait pour les passionnés de muscle cars américains."
            }
            ]
        },
      },
      {
        path: "rolls-royce-phantom",
        component: RollsPhantom,
        meta: {
          title: "Location Rolls Royce Phantom à Valenciennes - Luxe et Prestige - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Faites une entrée remarquable à votre événement avec la Rolls Royce Phantom, symbole ultime de luxe et d'élégance. Disponible à la location dès maintenant."
            }
            ]
        },
      },
      {
        path: "bentley-continental-gt-sport",
        component: BentleyContinentalGTSport,
        meta: {
          title: "Location Bentley Continental GT Sport à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Vivez l'expérience ultime du luxe avec la Bentley Continental GT Sport, disponible à la location. Un véhicule qui incarne sophistication et raffinement pour vos événements les plus distingués."
            }
            ]
        },
      },
      {
        path: "aston-martin-volante",
        component: AstonMartinVolante,
        meta: {
          title: "Location Aston Martin Volante à Valenciennes - Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: 'Louez une Aston Martin Volante avec chauffeur pour vos événements à Valenciennes. Luxe, élégance, et exclusivité garantie.'
            }
          ]
        },
      },
      {
        path: "dodge-charger-rt",
        component: DodgeCharger,
        meta: {
          title: "Location Dodge Charger RT à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Dominez la route avec la Dodge Charger RT, le muscle car par excellence. Disponible à la location"
            }
            ]
        },
      },
      {
        path: "ford-capri",
        component: FordCapri,
        meta: {
          title: "Location Ford Capri Crayford Cabriolet à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Saisissez l'occasion de voyager dans une Ford Capri Crayford Cabriolet, véhicule de collection unique en son genre. Parfait pour les connaisseurs et événements spéciaux."
            }
            ]
        },
      },
      {
        path: "rolls-royce-corniche",
        component: RollsRoyceCorniche,
        meta: {
          title: "Location Rolls Royce Corniche à Valenciennes - PrestaCar" ,
          metaTags: [
            {
              name: 'description',
              content: "Découvrez la Rolls Royce Corniche, cabriolet de luxe pour vos occasions spéciales. Élégance et prestige à chaque tournant."
            }
            ]
        },
      },
      {
        path: "maserati-ghibli",
        component: Maserati,
        meta: {
          title: "Location Maserati Ghibli à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "La Maserati Ghibli, symbole de performance et d'élégance italienne. Parfait pour tous ceux qui recherchent l'excellence."
            }
            ]
        },
      },
      {
        path: "citroen-2CV",
        component: Citroen,
        meta: {
          title: "Location Citroën 2CV à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Citroën 2CV classique. Parfaite pour vos événements vintage."
            }
            ]
        },
      },
      {
        path: "mini-cooper",
        component: Mini,
        meta: {
          title: "Location Mini Cooper à Valenciennes - PrestaCar",
          metaTags: [
            {
              name: 'description',
              content: "Mini Cooper. Parfait pour vos événements vintage."
            }
          ]
        },
      },
    ],
    meta: {
      title: "Location Véhicules avec chauffeur à Valenciennes - PrestaCar" ,
      metaTags: [
        {
          name: 'description',
          content: "Découvrez notre collection exclusive de véhicules disponibles à la location. Que vous recherchiez l'élégance d'une Rolls Royce, la puissance d'une Ford Mustang, ou le charme vintage d'une Volkswagen Coccinelle, notre sélection répondra à toutes vos attentes pour des moments inoubliables. Explorez dès maintenant pour trouver la voiture parfaite pour votre prochain événement spécial."
        }
        ]
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact - PrestaCar",
      metaTags: [
        {
          name: 'description',
          content: "Contactez-nous pour réserver la voiture de luxe de vos rêves. Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans le choix de votre véhicule idéal pour mariage, événements ou escapades. Faites le premier pas vers une expérience inoubliable en nous écrivant dès aujourd'hui."
        }
        ]
    },
  },
  {
    path: "/prestation",
    component: Presation,
    children: [
      {
        path: "mariage",
        component: Mariage,
        meta: { title: "Mariage - PrestaCar" },
      },
      {
        path: "anniversaire",
        component: Anniversaire,
        meta: { title: "Anniversaire - PrestaCar" },
      },
      {
        path: "tournage",
        component: Tournage,
        meta: { title: "Tournage - PrestaCar" },
      },
      {
        path: "enterrement",
        component: Enterrement,
        meta: { title: "Enterrement - PrestaCar" },
      },
      {
        path: "aeroport",
        component: Aeroport,
        meta: { title: "Aeroport - PrestaCar" },
      },
      {
        path: "trajet",
        component: Trajet,
        meta: { title: "Trajet - PrestaCar" },
      },
    ],
    meta: {
      title: "Presation - PrestaCar",
      metaTags: [
        {
          name: 'description',
          content: "Découvrez nos prestations sur-mesure pour rendre chaque" +
              " moment unique : location de voitures de luxe pour mariages, " +
              "anniversaires, transferts aéroport et plus encore. Chez nous, " +
              "chaque occasion est traitée avec le plus grand soin pour offrir " +
              "une expérience mémorable et haut de gamme. Parcourez nos services " +
              "pour planifier votre événement parfait."
        }
        ]
    },
  },
  {
    path: "/conditions-generales",
    component: CGU,
    meta: {
      title: "Conditions Générales - PrestaCar"
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || "Prestacar";
  next();
});
export default router;
