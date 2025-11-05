({
    handlechange : function(component, event, helper) {
        const message = event.target.value;
        component.set("v.message", message);
    },
    sendMessage : function(component, event, helper) {
        const message = component.get("v.message");
        const pubSub = component.find("pubSubAuraLwc");
        pubSub.fireEvent("messageEvent1", message);
    }
})