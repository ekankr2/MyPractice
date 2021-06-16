import java.util.Scanner;

public class Prob11720 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        String M = scan.next();
        int sum = 0;
        for(int i = 0 ; i < N ; i++) {
            sum += Character.getNumericValue(M.charAt(i));
            //Character.getNumbericValue를 사용하면
            //char을 int로 변환할 수 있다.

        //String의 인덱스 :| 5 | 4 | 3 | 2 | 1
        //  0부터 시작한다.  0   1   2   3   4
        //M.charAt(i)를 통해 i = 0~N까지 불러내서 sum에 더하면 된다.
        }
        System.out.println(sum);
    }
}
