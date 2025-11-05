public class AccountOpportunityController {
    public List<Account> accounts { get; set; }

    public AccountOpportunityController() {
        accounts = [SELECT Name, Industry, (SELECT Name, StageName, Amount FROM Opportunities) FROM Account];
    }
}