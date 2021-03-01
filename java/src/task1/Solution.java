package task1;

public class Solution {
    public static void main(String[] args) {
        Clothes[] clothesForAtelier = {
                new TShirt(Sizes.S, 20.5, "blue"),
                new TShirt(Sizes.M, 25, "red"),
                new Dress(Sizes.L, 100, "printed"),
                new Trousers(Sizes.XXS, 80, "denim"),
                new Tie(Sizes.XS, 55, "striped"),
        };
        Atelier atelier1 = new Atelier(clothesForAtelier);
        System.out.println(atelier1.womenChoose());
        System.out.println(atelier1.menChoose());
    }
}
