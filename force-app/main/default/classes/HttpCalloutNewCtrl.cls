public with sharing class HttpCalloutNewCtrl {
   @AuraEnabled // @AuraEnabled  make this method accessible at client side.
   public static Map<String, Object> getCalloutResponseContents(String url){
 
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint(url);
    request.setMethod('GET');
 
    HttpResponse response = new HttpResponse();
 
    // Making a request
    response = http.send(request);
 
    // Parsing the response
    Map<String, Object> responseMap = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
    return responseMap;
   }
}