({
    refresh : function(component, event, helper) {
         console.log('Aura handler triggered');
        alert('Refresh Called from Lightning Bundle');
        //$A.get('e.force:refreshView').fire();
		$A.get('e.force:refreshView').fire();
    }
})