({
    handleInputMessage: function (component, message, helper) {
        console.log('Message from AURA - Input');
        console.log(message.getParam("lmsData").value);

        // c is used for comp, v is used for prop
        component.set("v.messageInputReceived", message.getParam("lmsData").value);
    },

    handleOutputMessage: function (component, event, helper) {
        console.log('Message from AURA - Output');
        component.set("v.messageOutputReceived", component.find("output").get("v.value"));
    },

    handlePublish: function (component, event, helper) {
        console.log('Publishing Message');
       // console.log('v.messageOutputReceived', component.get('v.messageOutputReceived'));
        let msg = component.get("v.messageOutputReceived");
        console.log('msg:' , msg);

        const message = {
            lmsData: {
                value: msg
            }
        };
        component.find("SimpleMessage").publish(message);
    }

})