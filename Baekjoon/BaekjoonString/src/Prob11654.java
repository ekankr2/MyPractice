import java.util.Scanner;

public class Prob11654 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        char ch = scan.next().charAt(0);
        //scan으로 char을 입력받는 기능은 없다.
        //따라서 scan.next()로 입력을 받은다음 .charAt(0)으로
        // 첫번째 글자를 가져오면 된다.
        int i = (int)ch; //int로 형변환을 하면 유니코드가나온다.
        System.out.println(i);
    }
}
