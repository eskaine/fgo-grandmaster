import HomeContainer from "../Main/HomeContainer";
import ServantsContainer from "../Main/ServantsContainer";

function appRoutes() {
    const routes  = [
        ["/", "Home", "Featured Servants", HomeContainer],
        ["/servants", "Servants", "Servants", ServantsContainer]
    ];

    function newRoute(route, linkName, pageTitle, Component) {
        return { route, linkName, pageTitle, Component }
    };

  return routes.map(route => newRoute(...route));
}

export default appRoutes;
