import java.util.Scanner;

public class Prob1110 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        while (true){
            int N = scan.nextInt();
            if(N<10){
                N=N*10;
            }else if(N>99){
                continue;
            }else {
                break;
            }
            System.out.println(N);
        }

    }
}
