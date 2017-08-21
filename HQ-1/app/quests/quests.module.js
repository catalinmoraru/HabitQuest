import quests from "./components/quests.component";
import angular from "angular";
import routes from "./quests.routes";

export default angular.module('questsModule', [])
    .component(quests.$name, quests).config(routes).name;