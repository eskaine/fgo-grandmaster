import appRoutes from "../components/helpers/appRoutes";

const params =  {
  title: "FGO Grandmaster",
  regions: {
    default: "JP",
    list: ["JP", "NA"],
  },
  class: {
    default: "All",
    list: ["All", "Saber", "Archer", "Lancer", "Rider", "Caster" , "Assassin", "Berserker", "Ruler", "Avenger", "AlterEgo", "MoonCancer", "Foreigner"]
  },
  routes: appRoutes(),
  maxPerPage: 60,
};

export default params;