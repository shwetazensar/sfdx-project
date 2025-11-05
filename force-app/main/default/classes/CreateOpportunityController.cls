public class CreateOpportunityController {
    public Opportunity opportunity { get; set; }

    public CreateOpportunityController() {
        opportunity = new Opportunity();
    }

    public PageReference save() {
        try {
            insert opportunity;
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM, 'Opportunity created successfully.'));
            return null; // Stay on the same page
        } catch (Exception e) {
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Error: ' + e.getMessage()));
            return null;
        }
    }
}