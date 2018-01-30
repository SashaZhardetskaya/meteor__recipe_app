
// reactive-var package allows us to use ReactiveVar
Template.Recipe.onCreated(function(){
    this.editMode = new ReactiveVar(false)
    // prev stroke is equal to next two
    // this.edgeMode = new ReactiveVar();
    // this.edgeMode.set(false);
});

Template.Recipe.helpers({
    updateRecipeId: function () {
        return this._id;
    },
    editMode: () => {
        // instance() allows us receive template which trigger the function.
        // in this case 'click .fa-pencil' (line 28-29)
        return Template.instance().editMode.get();
    }
});

Template.Recipe.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': (event, template) => {
        template.editMode.set(!template.editMode.get())
    }
});