public with sharing class dashboardController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> getDashboardData(){
        Map<String, Object> dashboardData = new Map<String, Object>();
        dashboardData.put('totalAccounts',[SELECT COUNT() FROM Account]);
        dashboardData.put('totalContacts',[SELECT COUNT() FROM Contact]);
        dashboardData.put('openOpportunities',[SELECT COUNT() FROM Opportunity WHERE isClosed=false]);
        dashboardData.put('accounts',[SELECT Id, Name, Industry, Phone FROM Account ORDER By Name LIMIT 100]);
        return dashboardData;
    }
}