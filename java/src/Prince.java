public class Prince extends Human {
    private int shoeSize;

    public Prince(String name, int age, int shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }

    public int getShoeSize() {
        return shoeSize;
    }

    public void setShoeSize(int shoeSize) {
        this.shoeSize = shoeSize;
    }

    public String getCinderella(Prince prince, Cinderella[] cinderellas) {
        for(int i = 0; i < cinderellas.length; i++) {
            if(prince.shoeSize == cinderellas[i].getFootSize()) return cinderellas[i].toString();
        }
        return "Not found";
    }

    @Override
    public String toString() {
        return "Prince{" + "shoeSize=" + shoeSize + '}';
    }
}
