

Template.RecipeSingle.onCreated(function(){
    this.autorun(() => {
        const id = FlowRouter.getParam('id');
        this.subscribe('singleRecipe', id);
    });
});

Template.RecipeSingle.helpers({
    recipe: ()=> {
        const id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});