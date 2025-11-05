({
    doInit : function(component, event, helper) {

        component.set("v.hotelRoomsInfo",[
            {roomName:'A-01',roomPrice:4}, 
            {roomName:'A-02',roomPrice:2}, 
            {roomName:'A-03',roomPrice:1}, 
            {roomName:'B-01',roomPrice:3}, 
            {roomName:'B-02',roomPrice:5}, 
            {roomName:'C-01',roomPrice:6}, 
            {roomName:'C-02',roomPrice:2}
        ]);

    },

    tileClickHandler: function(component, event, helper) {
        component.set("v.selectedHotelRoom",
            event.getParam("roomName")+" has capacity of "+event.getParam("roomPrice"));
    }
})