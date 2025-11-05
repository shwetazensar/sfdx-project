({
    //1
    sendHandler : function(component, event, helper) {
        var inputElement = component.find('inputBox');
        if(inputElement){
            const msg = inputElement.get('v.value');
            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value: msg,
                from:'Aura'
            });
            component.set("v.messages", messages);

            // 3
             const messagePayload = {
                message:msg,
                from: 'AURA'
            }
            const msgChannel = component.find('messageChannel');
            msgChannel.publish(messagePayload);

            inputElement.set("v.value","");
        }
    },
    //2
    messageHandler:function(component,event,helper){
        if(event && event.getParam("message") && event.getParam("from") !== 'AURA'){
            console.log('messageHandler!');
            const msg = event.getParam("message");
            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value: msg,
                from:'LWC'
            });
            component.set("v.messages", messages);
        }
    }
})