import java.util.Scanner;

public class Baek2439 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for(int i = 1; i<=N; i++){//N번 만큼 시행하기위한 for문
            for(int j = 1; j<=N-i;j++) {//for문 내부에 for문을 만들어서
                //공백을 출력하는데 1행에 4개, 2행에 3개...이런식
                //따라서 i가 행갯수니까 조건을 N-i로 한다
                System.out.print(" ");
            }
                for(int k = 1; k<=i; k++){
                    System.out.print("*");
                    //별은 i갯수만큼 출력하니 k<=i
                }
            System.out.println();//개행을위한 sout
            }

        }

    }
