import java.util.Scanner;

public class Prob8958 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String[] arr;
        int N = scan.nextInt();//개수설정
        scan.nextLine();//nextLine오류 방지용
        int cnt = 0;//0의 연속갯수용 변수
        int result = 0;//결과값 = 점수
        for(int i = 0; i < N;i++){
            String A = scan.nextLine();
            arr= A.split("");//.split을 통하여 문자열을 배열로 쪼갠다.
            for(int j = 0; j<A.length();j++) {
                //값이 O와 같다면 cnt가 1 증가한다.
                //연속으로 O를 만나면 cnt는 2가 된다.
                // 그 값을 result에 대입하면 된다.
                if ("O".equals(arr[j])) {
                    cnt++;
                    result += cnt;
                } else {//X를 만나면 cnt가 0으로 초기화된다.
                    cnt = 0;
                }
            }
            System.out.println(result);
            //점수를 출력하고 result와 cnt를 초기화해야
            //다음 입력값을 0부터 시작할 수 있다.
            result = 0;
            cnt = 0;
        }
    }
}
