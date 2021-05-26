$('#myButton').on('click', function(event) {
    
    if (document.getElementById('topbar').style.top == '0px') {
        
        document.getElementById('topbar').style.top = '-100px';
        document.getElementById('myButton').style.top = '10px';
        $('#menu-icon').removeClass("fa-angle-double-up")
        $('#menu-icon').addClass("fa-angle-double-down")
    }
    else{
        console.log(document.getElementById('topbar').style.top)
        document.getElementById('topbar').style.top = '0';
        document.getElementById('myButton').style.top = '90px';
        $('#menu-icon').removeClass("fa-angle-double-down")
        $('#menu-icon').addClass("fa-angle-double-up")
    }

})