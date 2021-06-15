import java.util.Scanner;

class Han{
    int N;
    int[] arr;
    int count;

    public Han(){
        int count = 0;
    }
    public int countHan(int N){
        int[] arr = new int[N];
        for(int i = 0; i < N ; i++){
            arr[i] = i+1;
            if(arr[i]<100){
                count++;
            }
            if(arr[i]>100) {
                if (((arr[i] / 100) - (arr[i] % 100 / 10)) ==
                        ((arr[i] % 100 / 10)) - (arr[i] %10)) {
                    count++;
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
        han.countHan(scan.nextInt());
        System.out.println(han.count);
    }
}
