public class Ukraine {

    private static Ukraine instance;

    private Ukraine(){}

    public static Ukraine getInstance() {
        if(instance == null) instance = new Ukraine();
        return instance;
    }

}
