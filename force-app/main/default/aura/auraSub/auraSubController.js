({
    subscribeToEvent : function(component, event, helper) {
        const pubSubModule = component.find('pubSubAuraLwc');

        const callbackFunction = $A.getCallback(function(payload) {
            component.set("v.message", payload);
        });

        pubSubModule.registerListener('messageEvent', callbackFunction);
    }
})