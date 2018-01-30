Template.NewRecipe.events({
    'click .fa-close' : function () {
        // raix:handlebar-helpers allows to use Session.set constructions. After that varaible available via $.Session.newRecipe
        Session.set('newRecipe', false);
    }
});