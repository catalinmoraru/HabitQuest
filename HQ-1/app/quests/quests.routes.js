import quests from "./components/quests.component";

configureState.$inject = ['$stateProvider'];
function configureState($stateProvider) {

    $stateProvider.state("default.quests", {
        url: "/users/:userId/quests",
        component: quests.$name,
        resolve: {
            user: resolveUser
        }
    });

    resolveUser.$inject = ['DataService','$stateParams'];
    function resolveUser(DataService, $stateParams){
        return DataService.getUserOrRedirect($stateParams.userId);
    }
}

export default configureState;