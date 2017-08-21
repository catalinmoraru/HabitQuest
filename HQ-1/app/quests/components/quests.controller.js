export default class QuestsController {

    constructor(DataService) {
        this.DataService = DataService;
        this.gold = "";
        this.silver = "";
        this.habits = [];
        this.todos = [];
        this.dailies = [];
        this.rewards = [];
    }


    $onInit() {
        console.log("QuestController $onInit");
        return this.DataService.getUserQuests(this.user.id).then((quests) => {
            this.gold = quests.gold;
            this.silver = quests.silver;
        });
    }

    static get $inject() {
        return ['DataService'];
    }

}
