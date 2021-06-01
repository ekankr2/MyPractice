import java.util.Scanner;

public class Prob1110Do {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        int M = N;
        int i = 0;
        do{
            N = (N % 10 * 10) + ((N / 10 + N % 10)%10);
            i++;
        }while (N!=M);
        System.out.println(i);
    }
}
