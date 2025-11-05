@isTest
public class TestDataFactory {
    public static Account createAccount(String name, String industry){
        Account acc = new Account(Name = name,Industry = industry);
        insert acc;
        return acc;
    }
}