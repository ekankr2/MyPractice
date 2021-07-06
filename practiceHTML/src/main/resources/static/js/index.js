$(document).ready(function(){
    $(window).scroll(function (){
        if(this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });
    $('.menu-toggler').click(function(){
        // toggleClass : .toggleClass()로 선택한 요소에 클래스(Class) 값을 넣었다 뺐다 할 수 있습니다.
        // 버튼을 클릭하면 this 요소에 active 클래스 값이 추가, 다시 클릭하면 사라짐
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});