import { useState } from "react";
import Text from "./PlanetList";
import "./SolaireSystem.scss";
import Title from "./PlanetTourne";

function SolaireSystem() {
  const [system, setSystem] = useState([
    {
      id: 1,
      french_name: "Soleil",
      english_name: "Sun",
      image:
        "https://drive.google.com/file/d/1bgIAGGhfnhu4NZpVyVrZseU5TNeECaf8/view?usp=drive_link",
      nombre_de_satellites: 0,
      masse: "1.989 * 10^30 kg",
      volume: "1.41 * 10^18 km³",
      densite: "1.41 g/cm³",
      gravite: "274 m/s² (à la surface)",
      dieu_romain_associe: "Soleil (Sol ou Helios)",
      periode_de_revolution: "250 millions d'années",
      nombre_heures_journee: "N/A (rotation différentielle)",
      vitesse_rotation_equateur: "1,997 km/s",
      temperature_de_surface: {
        min: "Environ 5 500 °C (c'est chaud) ",
        max: "Environ 15 600 000 °C (C'est encore plus chaud ) ",
        moyenne: "Environ 5 500 °C",
      },
      type_de_planete: "Étoile",
      distance_du_soleil: "N/A (le Soleil est au centre du système solaire)",
      date_de_decouverte: "N/A (connaissances antiques)",
      description:
        "Le Soleil est l'étoile au centre du système solaire. Il est essentiel à la vie sur Terre, fournissant la chaleur et la lumière nécessaires à notre planète. Le Soleil est principalement constitué d'hydrogène et d'hélium, et sa fusion nucléaire crée l'énergie qui irradie vers l'espace, influençant le climat et les conditions sur toutes les planètes du système solaire.",
      isHover: false,
    },
    {
      id: 2,
      french_name: "Mercure",
      english_name: "Mercury",
      image:
        "https://drive.google.com/file/d/19bpyd0BtJxvmPh8V3iNyTH0KQgrw8PNI/view?usp=drive_link",
      nombre_de_satellites: 0,
      masse: "3.3011 * 10^23 kg",
      volume: "6.083 * 10^10 km³",
      densite: "5.427 g/cm³",
      gravite: "3.7 m/s²",
      dieu_romain_associe: "Mercure (Hermès)",
      periode_de_revolution: "87.97 jours",
      nombre_heures_journee: "1407.6 heures",
      vitesse_rotation_equateur: "10.89 km/h",
      temperature_de_surface: {
        min: "Environ -173 °C",
        max: "Environ 427 °C",
        moyenne: "Environ 167 °C",
      },
      type_de_planete: "Tellurique",
      "distance_du Soleil": "57.9 millions de km",
      date_de_decouverte: "Connu depuis l'Antiquité",
      description:
        "Mercure est la planète la plus proche du Soleil et la plus petite du système solaire. Elle possède une surface criblée de cratères, et les températures peuvent varier considérablement entre le jour et la nuit en raison de l'absence d'atmosphère significative.",
      isHover: false,
    },
    {
      id: 3,
      french_name: "Vénus",
      english_names: "Venus",
      image:
        "https://drive.google.com/file/d/1bI6Vb0nRnHBaIfN40n_9iQlic8ROTtl-/view?usp=drive_link",
      nombre_de_satellites: 0,
      masse: "4.867 * 10^24 kg",
      volume: "928.415 * 10^10 km³",
      densite: "5.243 g/cm³",
      gravite: "8.87 m/s²",
      dieu_romain_associe: "Vénus",
      periode_de_revolution: "225 jours",
      nombre_heures_journee: "5832.6 heures",
      vitesse_rotation_equateur: "6.52 km/h",
      temperature_de_surface: {
        min: "Environ 467 °C",
        max: "Environ 465 °C",
        moyenne: "Environ 467 °C",
      },
      type_de_planete: "Tellurique",
      "distance_du Soleil": "108.2 millions de km",
      date_de_decouverte: "Connu depuis l'Antiquité",
      description:
        "Vénus est la deuxième planète du système solaire. Elle est souvent appelée la 'sœur jumelle' de la Terre en raison de leurs tailles similaires, mais les conditions à la surface de Vénus sont extrêmes, avec une atmosphère épaisse composée principalement de dioxyde de carbone, une pression atmosphérique écrasante et des températures infernales.",
      isHover: false,
    },
    {
      id: 4,
      french_name: "Terre",
      english_name: "Earth",
      image:
        "https://drive.google.com/file/d/1R2seOBr7hvfQ3EdtHyXqi_pRlrdhGMWL/view?usp=drive_link",
      nombre_de_satellites: 1,
      masse: "5.972 * 10^24 kg",
      volume: "1.08321 * 10^12 km³",
      densite: "5.52 g/cm³",
      gravite: "9.81 m/s²",
      dieu_romain_associe: "Terra",
      periode_de_revolution: "365.25 jours",
      nombre_heures_journee: 24,
      vitesse_rotation_equateur: "1670 km/h",
      temperature_de_surface: {
        min: "-89.2 °C",
        max: "56.7 °C",
        moyenne: "14 °C",
      },
      type_de_planete: "Tellurique",
      distance_du_soleil: "149.6 millions de km",
      date_de_decouverte: "N/A",
      description:
        "La Terre est la seule planète connue à abriter la vie. Elle est caractérisée par sa diversité de climats et de paysages, allant des vastes océans aux hautes montagnes. Les êtres humains y ont évolué et ont créé une multitude de cultures et de civilisations.",
      isHover: false,
    },
    {
      id: 5,
      french_name: "Mars",
      english_name: "Mars",
      image:
        "https://drive.google.com/file/d/1jmvUHgKlK4P-NpnTNQFTsDqDR5z2yWHh/view?usp=drive_link",
      nombre_de_satellites: 2,
      masse: "0.64171 * 10^24 kg",
      volume: "1.6318 * 10^11 km³",
      densite: "3.93 g/cm³",
      gravite: "3.71 m/s²",
      dieu_romain_associe: "Mars",
      periode_de_revolution: "687 jours",
      nombre_heures_journee: 24.6,
      vitesse_rotation_equateur: "868.22 km/h",
      temperature_de_surface: {
        min: "-143 °C",
        max: "35 °C",
        moyenne: "-63 °C",
      },
      type_de_planete: "Tellurique",
      distance_du_soleil: "227.9 millions de km",
      date_de_decouverte: "Connu depuis l'Antiquité",
      description:
        "Mars est souvent surnommée la 'Planète Rouge' en raison de sa couleur distinctive. Elle est le quatrième objet céleste en partant du Soleil et a suscité l'intérêt en tant que candidate potentielle pour la colonisation humaine.",
      isHover: false,
    },
    {
      id: 6,
      french_name: "Jupiter",
      english_name: "Jupiter",
      image:
        "https://drive.google.com/file/d/1z8BOiM_rhVdFZTZtEYI2RXONMHpeKNGW/view?usp=drive_link",
      nombre_de_satellites: "79 (confirmés, nombreux satellites non confirmés)",
      masse: "1.899 * 10^27 kg",
      volume: "1.43128 * 10^15 km³",
      densite: "1.326 g/cm³",
      gravite: "24.79 m/s²",
      dieu_romain_associe: "Jupiter (Zeus)",
      periode_de_revolution: "11.9 années",
      nombre_heures_journee: "9.9 heures",
      vitesse_rotation_equateur: "45000 km/h",
      temperature_de_surface: {
        min: "Environ -145 °C",
        max: "Environ -108 °C",
        moyenne: "Environ -145 °C",
      },
      type_de_planete: "Géante gazeuse",
      distance_du_Soleil: "778.3 millions de km",
      date_de_decouverte: "Connu depuis l'Antiquité",
      description:
        "Jupiter est la plus grande planète du système solaire. Elle est principalement composée de gaz, principalement d'hydrogène et d'hélium. Jupiter possède un système complexe d'anneaux et est célèbre pour sa Grande Tache Rouge, une énorme tempête anticyclonique.",
      isHover: false,
    },
    {
      id: 7,
      french_name: "Saturne",
      english_name: "Saturn",
      image:
        "https://drive.google.com/file/d/1pxLfHeucSdsGeX6nje5MrktAHGn3S9gR/view?usp=drive_link",
      nombre_de_satellites: "83 (confirmés, nombreux satellites non confirmés)",
      masse: "5.683 * 10^26 kg",
      volume: "8.2713 * 10^14 km³",
      densite: "0.69 g/cm³",
      gravite: "10.44 m/s²",
      dieu_romain_associe: "Saturne (Cronos)",
      periode_de_revolution: "29.5 années",
      nombre_heures_journee: "10.7 heures",
      vitesse_rotation_equateur: "35,500 km/h",
      temperature_de_surface: {
        min: "Environ -185 °C",
        max: "Environ -122 °C",
        moyenne: "Environ -185 °C",
      },
      type_de_planete: "Géante gazeuse",
      distance_du_Soleil: "1,426 milliard de km",
      date_de_decouverte: "Connu depuis l'Antiquité",
      description:
        "Saturne est connue pour ses magnifiques anneaux, composés de particules de glace et de roche. C'est la deuxième plus grande planète du système solaire et elle possède de nombreuses lunes, dont Titan, la deuxième plus grande lune du système solaire.",
      isHover: false,
    },
    {
      id: 8,
      french_name: "Uranus",
      english_name: "Uranus",
      image:
        "https://drive.google.com/file/d/12jg0UzI5FRgaEdNFrAAOV6MzfC4mKfBA/view?usp=drive_link",
      nombre_de_satellites: "27 (confirmés, nombreux satellites non confirmés)",
      masse: "8.681 * 10^25 kg",
      volume: "6.833 * 10^13 km³",
      densite: "1.27 g/cm³",
      gravite: "8.69 m/s²",
      dieu_romain_associe: "Uranus (Caelus)",
      periode_de_revolution: "84 années",
      nombre_heures_journee: "17.24 heures",
      vitesse_rotation_equateur: "9000 km/h",
      temperature_de_surface: {
        min: "Environ -224 °C",
        max: "Environ -197 °C",
        moyenne: "Environ -224 °C",
      },
      type_de_planete: "Géante gazeuse",
      distance_du_Soleil: "2,871 milliards de km",
      date_de_decouverte: "Découverte en 1781 par William Herschel",
      description:
        "Uranus est une planète géante gazeuse aux couleurs pâles. Elle est unique dans le système solaire car elle tourne sur son côté, ce qui signifie qu'elle roule plutôt que de tourner comme la plupart des autres planètes.",
      isHover: false,
    },
    {
      id: 9,
      french_name: "Neptune",
      english_name: "Neptune",
      image:
        "https://drive.google.com/file/d/1HTftsV0wqFckDYFXtGNZaG831X_pipdv/view?usp=drive_link",
      nombre_de_satellites: "14 (confirmés, nombreux satellites non confirmés)",
      masse: "1.024 * 10^26 kg",
      volume: "6.254 * 10^13 km³",
      densite: "1.638 g/cm³",
      gravitr: "11.15 m/s²",
      dieu_romain_associe: "Neptune (Poséidon)",
      periode_de_revolution: "164.8 années",
      nombre_heures_journee: "16.11 heures",
      vitesse_rotation_equateur: "6,712 km/h",
      temperature_de_surface: {
        min: "Environ -224 °C",
        max: "Environ -214 °C",
        moyenne: "Environ -224 °C",
      },
      type_de_planete: "Géante gazeuse",
      distance_du_soleil: "4,498 milliards de km",
      date_de_decouverte:
        "Découverte en 1846 par Johann Galle et Urbain Le Verrier",
      description:
        "Neptune est la huitième et la plus éloignée des planètes du système solaire. Elle est principalement composée de gaz, y compris du méthane, ce qui lui donne une couleur bleue distinctive. Neptune possède des anneaux et des lunes, parmi lesquelles Triton est la plus grande.",
      isHover: false,
    },
  ]);

  const handleChange = (id) => {
    setSystem(
      system.map((planet) => {
        if (planet.id === id) {
          // eslint-disable-next-line no-param-reassign
          planet.isHover = !planet.isHover;
          console.info(planet.french_name, planet.isHover, id);

          return planet;
        }

        return planet;
      })
    );
  };

  return (
    <div>
      {system.length > 0 &&
        system.map((planet) => (
          <section key={planet.id}>
            <div className="système">
              <Title
                id={planet.id}
                handleChange={handleChange}
                planet={planet}
              />
            </div>
            <Text id={planet.id} handleChange={handleChange} planet={planet} />
          </section>
        ))}
    </div>
  );
}

export default SolaireSystem;
