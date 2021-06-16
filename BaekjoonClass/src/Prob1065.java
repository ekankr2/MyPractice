import java.util.Scanner;

class Han{
    int count;

    public Han(){
    }

    public int countHan(int N){
        int[] arr = new int[N];
        for(int i = 0; i < N ; i++){
            arr[i] = i+1;//arr 배열에 1~N 대입
            int hun = arr[i]/100; //100의자리 공식
            int ten = arr[i] % 100 / 10;//10의자리 공식
            int one = arr[i] % 10;//1의자리 공식
            if(arr[i]<100){//100보다 작은 값일 경우
                count++; //모든수가 한수
            }
            if(arr[i]>100) {//100보다 큰 수일 경우
                if ((hun - ten) == (ten - one)) {
                    count++;//조건에 맞아야지만 count++
                }
            }
        }
        return count;
    }
}
public class Prob1065 {
    public static void main(String[] args) {
       Han han = new Han();
        Scanner scan = new Scanner(System.in);
        han.countHan(scan.nextInt());//countHan에 N을 대입
        System.out.println(han.count);//count출력
   }
}
