public class Solution {
    public static void main(String[] args) {
        Prince prince = new Prince("Shrek", 18, 45);
        Cinderella cinderella1 = new Cinderella("Olya", 20, 35);
        Cinderella cinderella2 = new Cinderella("Anya", 25, 34);
        Cinderella cinderella3 = new Cinderella("Dasha", 16, 40);
        Cinderella cinderella4 = new Cinderella("Vika", 17, 37);
        Cinderella cinderella5 = new Cinderella("Oksana", 66, 31);
        Cinderella cinderella6 = new Cinderella("Olesya", 31, 32);
        Cinderella cinderella7 = new Cinderella("Olena", 29, 38);

        Cinderella[] cinderellas = {cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
        cinderella6, cinderella7};

        System.out.println("We searched: " + prince.getCinderella(prince, cinderellas));
        }

}
