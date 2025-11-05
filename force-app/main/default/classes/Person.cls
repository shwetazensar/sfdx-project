public class Person {
	public Integer personId;
    public String name;
    public string city;
    static Integer population = 0;
    
    public Person(integer personId, string name, string city){
        this.personId = personId;
        this.name = name;
        this.city = city;
        population++;
    }
    
    public static Integer getPopulation(){
        return population;
    }
   
}