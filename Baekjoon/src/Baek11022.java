import java.util.Scanner;

public class Baek11022 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt(); //테스트 케이스 T

        for(int i= 1; i<=T; i++){ //T의 횟수만큼 반복하기위한 for문
            int A = scan.nextInt(); //A와 B를 입력받고
            int B = scan.nextInt();
            int C = A+B; //c = a+b
            System.out.printf("Case #%d: %d + %d = %d\n", i, A, B ,C);
            // case #i = a + b + c 형식으로 출력

        }

    }
}
