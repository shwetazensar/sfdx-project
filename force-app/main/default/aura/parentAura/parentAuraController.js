({
    messageHandler : function(component, event, helper) {
        console.log(event.getParam('detail'));
        component.set('v.message', event.getParam('value'));
    }
})