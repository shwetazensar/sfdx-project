({
    messageHandler: function(component, event, helper) {
        if (event && event.getParam("message")) {
            const msgText = event.getParam("message");
            const msgType = event.getParam("type");
            const msgFrom = event.getParam("from");

            let messages = component.get("v.messages") || [];
            messages.push({
                id: messages.length,
                value: msgText,
                type: msgType,
                from: msgFrom
            });

            component.set("v.messages", messages);

            // Auto-expire after 10 seconds
            setTimeout($A.getCallback(() => {
                messages.shift(); // remove oldest message
                component.set("v.messages", messages);
            }), 10000);
        }
    }
})