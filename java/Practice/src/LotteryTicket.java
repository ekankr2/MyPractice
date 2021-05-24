public class LotteryTicket {
    public static void main(String[] args) {
        int lotto[] = new int[45];

        for (int i = 0; i < lotto.length; i++)//배열에 0~44를 저장
            lotto[i] = i + 1;//1~45로 바꿔줌

        int temp;// 임시변수 지정
        int j;

        for(int i =0; i<1000; i++){//1000번정도 반복
            j = (int)(Math.random()*45);//0~44의 임의의값
            //lotto[0]과 lotto[j]값을 서로바꾼다
            temp = lotto[0];
            lotto[0]=lotto[j];
            lotto[j]=temp;
        }//배열 6개 출력하기
        for(int i = 0; i<6; i++){
            System.out.printf("%5d",lotto[i]);//5칸을 확보한다.
        }
    }
}