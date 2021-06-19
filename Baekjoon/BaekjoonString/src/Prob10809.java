import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class Prob10809 {
    public static void main(String[] args) {
        char[] alphabet = new char[26];//알파벳은 26개
        Map<Character,Integer> map = new LinkedHashMap<Character,Integer>();
        //알파벳을 순서대로 다루기 위해 LinkedHashMap을 사용한다.
        Scanner scan = new Scanner(System.in);
        String word = scan.next();
        scan.close();
        for(int i=0; i<alphabet.length; i++){
            alphabet[i] = (char)(97+i);
            map.put(alphabet[i],-1);}
        //여기서 alphabet배열에 아크키코드를 이용하여 소문자 a~z를 대입하였다.
        // map에는 키값에 alphabet[i]를 넣고 벨류에 모두 -1을 넣었다.
        /* map의 구조를 그림으로 설명하면 이렇게 될것이다.
        a  |  b  |  c  |  d  |  e  | ... z  |
       -1  | -1  | -1  | -1  | -1  |    -1  |
         */
        for(int i=0; i<word.length(); i++){
            if(map.get(word.charAt(i))==-1){
                //맵의 밸류값이 -1일 경우에만
            map.put(word.charAt(i),i);}
            //word의 i번째 char에 해당하는 key에 i를 넣어라.
        }for(Character key:map.keySet()) {
            Integer value = map.get(key);
            System.out.println(value);
            //벨류값 출력
        }
    }
}
