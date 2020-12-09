public class MiddleDeveloper extends DevelperDecorator {

    MiddleDeveloper(Developer developer) {
        super(developer);
    }

    public String makeMiddleJob() {
        return " Write middle code";
    }

    @Override
    public String makeJob() {
        return super.makeJob() + makeMiddleJob();
    }
}
