$(document).ready(function(){

    //set a variable called 'title', which holds all the definition titles.
    var title = $('.container dt');
    //set a variable called 'data', which holds all the definition contents.
    var data = $('.container dd');
    //hide all the definition contents initially.
    data.hide();

    //hover title effect
    $(title).hover(
      //when mouse hover the title, backgroung-color changes into gradient color.
      function(){
              $(this).css({'background-color':'#FFE038',
                    'color':'white',
                     'background': 'linear-gradient(60deg, #F67280, #F9B248)'});

          }, function() {
        // when mouse leave the title, background-color changes back to normal.
        $(this).css({'background-color':'#FFED82',
                      'color':'#566B8D',
                     'background':'linear-gradient(0deg, #FFED82, #FFED82)'});
                });

      //when click a title
      title.on('click', function(){
        //the title which is clicked can be toggled around
      $(this).next().slideToggle();
      //the other titles which are not clicked should slideUp.
      data.not($(this).next()).slideUp();
    });

    //when click the button1, data shows.
    $('.btn1').on('click',function(){
      data.slideDown();
    });
  //when click the button2, data hides.
    $('.btn2').on('click',function(){
      data.slideUp();
    });


});
