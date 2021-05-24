import java.util.Scanner;

public class Baek2438 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i =1; i<=N; i++){//N번까지 입력하기위한 for문
            //i의 값은 n번까지 1씩 증가
            for(int j = 1; j<=i; j++){
                // 그 증가된 값 만큼 *을 출력하기위해 내부 for문을 하나 더 만든다.
                System.out.print("*");
            }
            System.out.println();//개행을 하기위해 내부for문 밖에 줄바꿈
        }
    }
}
