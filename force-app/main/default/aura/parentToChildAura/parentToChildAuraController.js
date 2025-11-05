({
    handleClick : function(component, event, helper) {
        const message = component.get("v.message");
        const childComp = component.find("childLwcComp");
        childComp.set("v.message", message);
    }
})