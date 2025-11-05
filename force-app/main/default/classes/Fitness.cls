public class Fitness {
    static Decimal BMI;
    static Integer Pace;
    
    public static Decimal calculateBMI(Integer weight, Decimal height){
        BMI = Decimal.valueof(weight) / (height * height);
        return BMI;
    }
    
    public static Integer calculatePace(Integer distance, Integer minutes){
        Pace = distance / (minutes / 60);
        return Pace;
    }
    
}