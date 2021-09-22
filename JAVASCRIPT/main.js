$(document).ready(function(){ 
    $('ul.tabs li a:first').addClass('active'); 
    //$('#este').addClass('active');
    $('ul.tabs li a span#1').removeClass('mdi mdi-map-outline');
    $('ul.tabs li a span#1').addClass('mdi mdi-map');
    
    $('.secciones article').hide();
    $('.secciones article:first').show();
    //$('#tab2').show();
    

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        $('ul.tabs li a span#1 ').addClass('mdi mdi-map-outline');
        $('ul.tabs li a span#2 ').addClass('mdi mdi-timeline-clock-outline');
        $('ul.tabs li a span#3 ').addClass('mdi mdi-ticket-percent-outline');
        $('ul.tabs li a span#4 ').addClass('mdi mdi-forum-outline');

        var activeTab = $(this).attr('href');

        if(activeTab=="#tab1"){
            $('ul.tabs li a span#1').removeClass('mdi mdi-map-outline');
            $('ul.tabs li a span#1').addClass('mdi mdi-map');

        }
        if(activeTab=="#tab2"){
            $('ul.tabs li a span#2').removeClass('mdi mdi-timeline-clock-outline');
            $('ul.tabs li a span#2').addClass('mdi mdi-timeline-clock');
        }
        if(activeTab=="#tab3"){
            $('ul.tabs li a span#3').removeClass('mdi mdi-ticket-percent-outline');
            $('ul.tabs li a span#3').addClass('mdi mdi-ticket-percent');

        }
        if(activeTab=="#tab4"){
            $('ul.tabs li a span#4').removeClass('mdi mdi-forum-outline');
            $('ul.tabs li a span#4').addClass('mdi mdi-forum');

        }

        $(activeTab).show();
        return false;
    });
});

  