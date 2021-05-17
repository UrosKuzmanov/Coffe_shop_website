$(".hamburger_menu").on("click", function(){
    $(".wrapper").toggleClass("show_sidebar")
})

window.onscroll=show_hide_scroll
function show_hide_scroll(){
    
    if($(".hero")[0].getBoundingClientRect().y < -72){
        $(".scroll").addClass("show_scroll")
    }else{
        $(".scroll").removeClass("show_scroll")
    }
}


$(".scroll").click(function(){
    
    let scroll_position=document.documentElement.scrollTop
    
    let interval=setInterval(()=>{
        scroll_position-=100
        window.scroll({
            top: scroll_position,
            left:0,
            behavior:"auto"  
        })
        
        if(scroll_position<=0){
            clearInterval(interval)
        }


    },1)

   
   
    
})








var myMap=L.map("map",{
    "center":[45.2534881,19.8469454],
    "zoom":17,
    "scrollWheelZoom": false,
})
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{ attribution:
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);
var my_icon=L.icon({
    "iconUrl":"./imgs/logo_map.png"
})
var marker=L.marker([45.2534881,19.8469454],{
    "icon":my_icon
}).addTo(myMap)

let work="Open"
date=new Date()
hour=date.getHours(); 

if(hour>2 && hour<8 ){
    work="Close"
    let open_for=8-hour
    bind_popup="<b>Works</b>: "+work+"<br><b>Open for :"+open_for+" hr</b><br><b>Close at: 2am"
}else{
    work="Open"
    let close_for=26-hour
    bind_popup="<b>Works</b>: "+work+"<br><b>Close for: "+close_for+" hr</b><br><b>Close at: 2am"

}

marker.bindPopup(bind_popup)




