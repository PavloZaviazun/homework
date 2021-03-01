package task1;

public enum Sizes {
    XXS(40) {
        public void getDescription() {
            System.out.println("XXS size equals to 40 value of EuroSize");
        }
    },
    XS(42) {
        public void getDescription() {
            System.out.println("XS size equals to 42 value of EuroSize");
        }
    },
    S(44) {
        public void getDescription() {
            System.out.println("S size equals to 44 value of EuroSize");
        }
    },
    M(46) {
        public void getDescription() {
            System.out.println("M size equals to 46 value of EuroSize");
        }
    },
    L(48) {
        public void getDescription() {
            System.out.println("L size equals to 48 value of EuroSize");
        }
};
    private int euroSize;

    Sizes(int euroSize) {
        this.euroSize = euroSize;
    }

    abstract void getDescription();

}
