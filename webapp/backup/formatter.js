sap.ui.define([], function(){
"use strict";
	
return{
	delivery: function(){
	var oResourceBundle = this.getView().getModel("18n").getResourceBunlde(), 
	    sResult = ""; 		
		
	if (sMeasure === "G") {iWeight = iWeight / 1000;}
	if (iWeight < 0.5)	{sResult = oResourceBundle.getText("formatterMailDelivery");}
		else if (iWeight < 5 ) {sResult = oResourceBundle.getText("formatterParcelDelivery");}
		else {sResult = oResourceBundle.getText("formatterCarrierDelivery");}
		
	return sResult;	
	}
};
});