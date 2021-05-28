class Calculator{
    int left;
    int right;

    public Calculator(){
        left = this.left;
        right = this.right;

    }
    public void sum(int left, int right){
        System.out.println(left + right);
    }
    public void subtract(int left, int right){
        System.out.println(left - right);
    }
}

public class MethodTest {
    public static void main(String[] args) {
        Calculator ca = new Calculator();
        ca.sum(10,12);
        ca.subtract(22, 10);

    }
}
