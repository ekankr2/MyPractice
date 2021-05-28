class lottery {
    int[] arr;
    final int numberCount = 45;//로또 번호 갯수
    int j;
    int temp;

    public lottery() {
        arr = new int[numberCount];//배열 45개
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i + 1;
        }

    }
    public void lotterTicket() {//메소드를 묶는 메소드
        mix(1000);
        printnumbers();
    }

    public void mix(int times){//번호를 섞는부분
        for(int i = 0; i < times ; i++){//times를 넣음으로서
            j = (int)(Math.random()*45);//원하는 믹스 횟수를 지정할 수 있다.
            temp = arr[0];
            arr[0] = arr[j];
            arr[j] = temp;
        }
    }
    public void printnumbers(){//번호를 출력하는곳
        System.out.println("행운의 번호는?");
            for (int k = 0; k < 6; k++) {
                System.out.printf("%5d", arr[k]);
            } //printf %5d : 숫자마다 5칸 확보하라는 뜻
        }
    }


public class LottoNumbers {
    public static void main(String[] args) {
        lottery l = new lottery();

            l.lotterTicket();

    }
}
