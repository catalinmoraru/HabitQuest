export default class QuestsController {

    constructor(DataService) {
        this.DataService = DataService;
        this.quests = [];
    }


    $onInit() {
        console.log("QuestController $onInit");
    }

    static get $inject() {
        return ['DataService'];
    }

}
