public class OpportunityStageFilterController {
    public String stageFilter { get; set; }
    public List<Opportunity> opportunities { get; set; }

    public OpportunityStageFilterController() {
        if (stageFilter != '') {
            opportunities = [SELECT Name, StageName, Amount, CloseDate FROM Opportunity WHERE StageName = :stageFilter];
        } else {
            opportunities.clear();
        }
    }

    public List<SelectOption> getStageOptions() {
        List<SelectOption> options = new List<SelectOption>();
        options.add(new SelectOption('', '--Select Stage--'));
        options.add(new SelectOption('Prospecting', 'Prospecting'));
        options.add(new SelectOption('Qualification', 'Qualification'));
        options.add(new SelectOption('Closed Won', 'Closed Won'));
        options.add(new SelectOption('Closed Lost', 'Closed Lost'));
        return options;
    }
}