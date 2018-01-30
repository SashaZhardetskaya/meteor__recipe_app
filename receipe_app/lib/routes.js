
// gwendall:auth-client-callbacks package allows to use Accounts.onLogin Accounts.onLogout methods
// works only in client
if (Meteor.isClient) {
    Accounts.onLogin(() => {
        FlowRouter.go('recipe-book');
    });
    Accounts.onLogout(() => {
        FlowRouter.go('home');
    });
}


// form of function
// FlowRouter.triggers.enter([function(context, redirect) {
//     redirect('/some-other-path');
// }]);
FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);


FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        // add Recipes template to Template.dynamic (main)
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action() {
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});