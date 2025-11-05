public class Covid19 {
	public Integer recoveredInArea;
    public static Integer recoveredInCountry = 0;
    
    public Covid19(){
        recoveredInArea = 0;
    }
    
    public void treatPatient(){
        recoveredInArea++;
        recoveredInCountry++;
    }
}