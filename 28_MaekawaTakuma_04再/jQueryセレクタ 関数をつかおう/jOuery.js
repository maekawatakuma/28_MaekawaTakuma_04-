// jQueryの準備
// console.log
// alert(11111);

$(document).ready(function(){

     //フェードインから表示
    $(function(){
        $(".ex").hide().fadeIn(4000);
    });

    //偶数行の背景色を白にする
    $(function(){
        $("ex").find("ex:odd").addclass("odd");
        $("ex").find("ex:even").addclass("even");
    });
    // addclassを使用するが使い方がいまいちわからない
});
