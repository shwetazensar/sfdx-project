({
    subscribeToEvent : function(component, event, helper) {
        // with aura:id finding pubSubModule
        const pubSubModule = component.find('pubSubModule');
 
        const callbackFunction = $A.getCallback(function(payload){
            component.set("v.selectedHotelRoomInfo",payload);
        });
 
        // Regisering event listener for pubsubtileclick application event
        pubSubModule.registerListener('pubsubtileclick',callbackFunction);
       
        
    }
})