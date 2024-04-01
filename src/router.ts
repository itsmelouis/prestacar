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
import Mini from "./pages/Cars/mini.vue";
import Mercedes from "./pages/Cars/mercedes.vue";

import Mariage from "./pages/prestations/Mariage.vue";
import Anniversaire from "./pages/prestations/Anniversaire.vue";
import Tournage from "./pages/prestations/Tournage.vue";
import Enterrement from "./pages/prestations/Enterrement.vue";
import Aeroport from "./pages/prestations/Aeroport.vue";
import Trajet from "./pages/prestations/Trajet.vue"


const routes = [
  {
    path: "/", component: Home, meta: {
      title: "Accueil - PrestaCar",
      content: "Location de véhicules de prestige pour tous types d'événements."
    },
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
          content: "Louez un Cadillac Escalade et profitez d'un véhicule spacieux et luxueux pour tous vos événements."
        },
      },
      {
        path: "limousine-lincoln-towncar",
        component: LincolnTowncar,
        meta: {
          title: "Location Limousine Lincoln TownCar le luxe assurés à Valenciennes - PrestaCar" ,
          content: "Offrez-vous le summum de l'élégance avec notre Limousine Lincoln TownCar disponible" +
              " à la location pour mariages, soirées VIP et événements spéciaux."
        },
      },
      {
        path: "volkswagen-combi-t1",
        component: CombiT1,
        meta: {
          title: "Location Volkswagen Combi T1 à Valenciennes - PrestaCar" ,
          content: "Donnez une touche rétro à vos événements avec notre iconique Volkswagen Combi T1. " +
              "Parfait pour mariages, photoshoots et occasions spéciales."
        },
      },
      {
        path: "volkswagen-coccinelle",
        component: CoccinelleCox,
        meta: {
          title: " Location Volkswagen Coccinelle Cox à Valenciennes - Charme Vintage Assuré - Prestacar" ,
          content: "Redécouvrez le plaisir de conduire avec la mythique Volkswagen Coccinelle. Idéale pour " +
              "sorties romantiques, mariages ou simplement pour le plaisir."
        },
      },
      {
        path: "volkswagen-new-beetle-cabriolet",
        component: NewBeetleCabriolet,
        meta: {
          title: "Location Volkswagen New Beetle Cabriolet à Valenciennes - PrestaCar" ,
          content: "Profitez d'une balade ensoleillée avec notre Volkswagen New Beetle Cabriolet. " +
              "Location idéale pour une escapade romantique ou une sortie joyeuse entre amis."
        },
      },
      {
        path: "mustang-legend-lime",
        component: MustangLegend,
        meta: {
          title: "Location Mustang Legend Lime à Valenciennes - PrestaCar" ,
          content: " Faites tourner les têtes avec la Mustang Legend Lime, une édition spéciale pleine de" +
              " caractère. Location disponible pour les amateurs de voitures uniques et stylées."
        },
      },
      {
        path: "audi-a4-allroad-blanche-quattro",
        component: AudiA4,
        meta: {
          title: "Location Audi A4 Allroad blanche Quattro à Valenciennes - PrestaCar" ,
          content: "Découvrez la polyvalence et le confort de l'Audi A4 Allroad Quattro blanche, parfaite pour " +
              "toutes vos aventures. Luxe, sécurité et performance réunis en un seul véhicule."
        },
      },
      {
        path: "porsche-986",
        component: Porsche986,
        meta: {
          title: "Location Porsche Boxster 986 à Valenciennes - PrestaCar",
          content: "Vivez une expérience de conduite inoubliable avec la Porsche 986 Boxster. Location disponible" +
              " pour les amateurs de sensations fortes et de luxe."
        },
      },
      {
        path: "mustang-gt",
        component: MustangGT,
        meta: {
          title: "Location Ford Mustang GT à Valenciennes - PrestaCar" ,
          content: "Exprimez votre côté sauvage avec la Ford Mustang GT, disponible à la location.Puissance et " +
              "design iconique pour une expérience de conduite inoubliable. Parfait pour les passionnés de muscle" +
              " cars américains."
        },
      },
      {
        path: "rolls-royce-phantom",
        component: RollsPhantom,
        meta: {
          title: "Location Rolls Royce Phantom à Valenciennes - Luxe et Prestige - PrestaCar" ,
          content: "Faites une entrée remarquable à votre événement avec la Rolls Royce Phantom, symbole ultime" +
              " de luxe et d'élégance. Disponible à la location dès maintenant."
        },
      },
      {
        path: "bentley-continental-gt-sport",
        component: BentleyContinentalGTSport,
        meta: {
          title: "Location Bentley Continental GT Sport à Valenciennes - PrestaCar",
          content: "Vivez l'expérience ultime du luxe avec la Bentley Continental GT Sport, disponible à la" +
              " location. Un véhicule qui incarne sophistication et raffinement pour vos événements les plus" +
              " distingués."
        },
      },
      {
        path: "aston-martin-volante",
        component: AstonMartinVolante,
        meta: {
          title: "Location Aston Martin Volante à Valenciennes - Valenciennes - PrestaCar",
          content: 'Louez une Aston Martin Volante avec chauffeur pour vos événements à Valenciennes. Luxe,' +
              ' élégance, et exclusivité garantie.'
        },
      },
      {
        path: "dodge-charger-rt",
        component: DodgeCharger,
        meta: {
          title: "Location Dodge Charger RT à Valenciennes - PrestaCar",
          content: "Dominez la route avec la Dodge Charger RT, le muscle car par excellence. Disponible à la location"
        },
      },
      {
        path: "ford-capri",
        component: FordCapri,
        meta: {
          title: "Location Ford Capri Crayford Cabriolet à Valenciennes - PrestaCar",
          content: "Saisissez l'occasion de voyager dans une Ford Capri Crayford Cabriolet, véhicule de collection" +
              " unique en son genre. Parfait pour les connaisseurs et événements spéciaux."
        },
      },
      {
        path: "rolls-royce-corniche",
        component: RollsRoyceCorniche,
        meta: {
          title: "Location Rolls Royce Corniche à Valenciennes - PrestaCar" ,
          content: "Découvrez la Rolls Royce Corniche, cabriolet de luxe pour vos occasions spéciales. Élégance " +
              "et prestige à chaque tournant."
        },
      },
      {
        path: "maserati-ghibli",
        component: Maserati,
        meta: {
          title: "Location Maserati Ghibli à Valenciennes - PrestaCar",
          content: "La Maserati Ghibli, symbole de performance et d'élégance italienne. Parfait pour tous ceux" +
              " qui recherchent l'excellence."
        },
      },
      {
        path: "citroen-2CV",
        component: Citroen,
        meta: {
          title: "Location Citroën 2CV à Valenciennes - PrestaCar",
          content: "Citroën 2CV classique. Parfaite pour vos événements vintage."
        },
      },
      {
        path: "mini-cooper",
        component: Mini,
        meta: {
          title: "Location Mini Cooper à Valenciennes - PrestaCar",
          content: "Mini Cooper. Parfait pour vos événements vintage."
        },
      },
      {
        path: "mercedes-classe-e",
        component: Mercedes,
        meta: {
          title: "Location Mercedes Classe E décapotable à Valenciennes - PrestaCar",
          content: "Mercedes classe E. Parfait pour vos événements."
        },
      },
    ],
    meta: {
      title: "Location Véhicules avec chauffeur à Valenciennes - PrestaCar" ,
      content: "Découvrez notre collection exclusive de véhicules disponibles à la location." +
              " Que vous recherchiez l'élégance d'une Rolls Royce, la puissance d'une Ford Mustang," +
              " ou le charme vintage d'une Volkswagen Coccinelle, notre sélection répondra à toutes " +
              "vos attentes pour des moments inoubliables. Explorez dès maintenant pour trouver la voiture " +
              "parfaite pour votre prochain événement spécial."
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact - PrestaCar",
      content: "Contactez-nous pour réserver la voiture de luxe de vos rêves. Notre équipe est à votre " +
          "disposition pour répondre à toutes vos questions et vous accompagner dans le choix de votre " +
          "véhicule idéal pour mariage, événements ou escapades. Faites le premier pas vers une expérience" +
          " inoubliable en nous écrivant dès aujourd'hui."
    },
  },
  {
    path: "/prestation",
    component: Presation,
    children: [
      {
        path: "mariage",
        component: Mariage,
        meta: {
          title: "Mariage - PrestaCar",
          content: "Offrez-vous le mariage de vos rêves avec la location de " +
              "voitures avec chauffeur chez LB-Prestacar à Valenciennes, où notre" +
              " flotte en constante évolution répond à tous les goûts et styles." +
              " Des véhicules vintage emblématiques comme le Combi Volkswagen et la" +
              " Coccinelle, aux limousines luxueuses, en passant par l'élégance intemporelle" +
              " des Rolls Royces et le raffinement moderne des Maseratis ou Mercedes, nous avons" +
              " la voiture parfaite pour rendre votre grand jour inoubliable. Faites une entrée " +
              "spectaculaire et vivez des moments magiques avec nos services sur mesure, garantissant " +
              "que chaque détail de votre transport de mariage soit pris en charge avec élégance et" +
              " professionnalisme."
        },
      },
      {
        path: "anniversaire",
        component: Anniversaire,
        meta: {
          title: "Anniversaire - PrestaCar" ,
          content: "Célébrez votre anniversaire de manière inoubliable avec la " +
              "location de limousine proposée par LB-Prestacar à Valenciennes." +
              " Transformez votre fête en une expérience luxueuse et mémorable grâce " +
              "à nos limousines élégantes et spacieuses, parfaites pour ajouter une touche" +
              " de glamour à votre célébration. Que vous souhaitiez faire une entrée spectaculaire" +
              " à votre lieu de fête ou simplement profiter d'une soirée exceptionnelle en ville, " +
              "LB-Prestacar s'engage à rendre votre anniversaire extraordinaire. Faites de cet événement " +
              "un moment de pur luxe et de plaisir."
        },
      },
      {
        path: "tournage",
        component: Tournage,
        meta: {
          title: "Tournage - PrestaCar",
          content:"Apportez une touche d'élégance et d'authenticité à vos projets cinématographiques " +
              "ou photographiques avec la location de véhicules chez LB-Prestacar à Valenciennes." +
              " Notre gamme de voitures offre le cadre parfait pour tout tournage, garantissant" +
              " des images impressionnantes. Que ce soit pour un film, une publicité ou une séance " +
              "photo, LB-Prestacar fournit un service sur mesure pour répondre à tous vos besoins de production." +
              " Faites de chaque scène un moment inoubliable avec nos véhicules d'exception."
        },
      },
      {
        path: "enterrement",
        component: Enterrement,
        meta: {
          title: "Enterrement - PrestaCar",
          content: "Célébrez votre enterrement de vie de jeune fille ou de garçon" +
              " avec panache grâce à LB-Prestacar à Valenciennes. Offrez-vous le " +
              "luxe d'un transport élégant et amusant pour votre soirée, avec une sélection" +
              " de véhicules haut de gamme adaptés à tout groupe. Notre service personnalisé" +
              " promet une expérience mémorable, vous permettant de profiter pleinement de votre" +
              " fête sans vous soucier du trajet. Faites de cet événement un moment exceptionnel avec LB-Prestacar."
        },
      },
      {
        path: "aeroport",
        component: Aeroport,
        meta: {
          title: "Aeroport - PrestaCar",
          content: "Démarrez ou concluez votre voyage avec" +
              " élégance grâce aux trajets vers l'aéroport proposés par LB-Prestacar" +
              " à Valenciennes. Profitez d'un service de transport haut de gamme," +
              " confortable et ponctuel, avec une flotte de véhicules de luxe conduits" +
              " par des chauffeurs professionnels. LB-Prestacar s'engage à rendre vos " +
              "déplacements aéroportuaires aussi fluides et agréables que possible, pour " +
              "un voyage inoubliable dès le départ."
        },
      },
      {
        path: "trajet",
        component: Trajet,
        meta: {
          title: "Trajet - PrestaCar",
          content:"Profitez d'une expérience de transport élégante et confortable avec LB-Prestacar pour " +
              "vos trajets vers restaurants et soirées à Valenciennes. Notre service sur mesure garantit " +
              "une arrivée remarquable et sans souci, dans le véhicule de luxe de votre choix. Parfait pour des " +
              "occasions spéciales ou simplement pour ajouter une touche de luxe à votre soirée."
        },
      },
    ],
    meta: {
      title: "Presation - PrestaCar",
      content: "Découvrez nos prestations sur-mesure pour rendre chaque" +
          " moment unique : location de voitures de luxe pour mariages, " +
          "anniversaires, transferts aéroport et plus encore. Chez nous, " +
          "chaque occasion est traitée avec le plus grand soin pour offrir " +
          "une expérience mémorable et haut de gamme. Parcourez nos services " +
          "pour planifier votre événement parfait."
    }
  },
  {
    path: "/conditions-generales",
    component: CGU,
    meta: {
      title: "Conditions Générales - PrestaCar",
      content: "CGU prestacar"
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
