import java.util.Scanner;

public class Prob4344 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int C = scan.nextInt();
        for(int i =0; i < C; i++){
            int sum = 0;
            int cnt = 0;
            float avg = 0f;
            float percent = 0;
            float studentRatio = 0f;
            int N = scan.nextInt();
            int[] arr = new int[N];
            for(int j = 0; j < N ; j++){
                arr[j] = scan.nextInt();
                sum +=arr[j];
                avg = sum/N;
            }
            for(int k = 0; k< arr.length; k++) {
                if (avg < arr[k]) {
                    cnt++;
                }
            }
            studentRatio = (float) cnt / N;
            percent = studentRatio*100;
            System.out.println(String.format("%.3f",(percent))+ "%");
        }
    }
}
