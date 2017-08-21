import QuestsTemplate from "./quests.component.tpl.html";
import QuestsController from "./quests.controller";

export default {
    $name: 'quests',
    template: QuestsTemplate,
    bindings: {
        user: '<'
    },
    controllerAs: 'vm',
    controller: QuestsController
};

