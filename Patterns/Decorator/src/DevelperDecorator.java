public class DevelperDecorator implements Developer {
    Developer developer;
    DevelperDecorator(Developer developer) {
        this.developer = developer;
    }
    @Override
    public String makeJob() {
        return developer.makeJob();
    }
}
