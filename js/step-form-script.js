/*$('').click(function(){
 $('.popup-bg').fadeIn(500);
 $('.popup').fadeIn(500);
 });*/
/*$(document).ready(function(){
 $('.popup-bg').css('display','none');
 $('.popup').css('display','none');
 });*/
$('.popup-bg').click(function () {
    $(this).css('display', 'none');
    $('.popup').css('display', 'none');
});
$('.popup .close, .popup .btn').click(function () {
    $(this).parent('.popup').css('display', 'none');
    $('.popup-bg').css('display', 'none');
    return false;
});
var boxWidth = 0;
var speed = 400;
var leftmargin = 0;
$(document).ready(function () {
    $(".dev-boxes").hide();
    $("p#program_id").click(function () {});
});
function devPrev(idCur, idPrev) {
 var divid = idPrev;
    localStorage.setItem("divid", divid);
    var boxLeftMargin = 0;
    var boxCurOffset = 0;

   
    $("#" + idPrev).css({
        "margin-left": "-" + 0 + "px",
        "opacity": "0",
        "display": "block"
    });
    $(".pro_hover").css({
        width: ($("#" + idPrev).attr("prgres") * 9) + "%"
    });
    $("#" + idCur).animate({
        marginLeft: "+=" + 0,
        opacity: 0,
    }, 0, function () {
        $(this).hide();
    });
    $("#" + idPrev).animate({
        marginLeft: "+=" + 0,
        opacity: 1,
        left: "+" + 0 + "px"
    }, speed);
    var heightBox = $("#" + idPrev).height();
    var continueBtn = '<a href="#" onclick="devNext(' + "'" + idPrev + "'" + ',' + "'" + idCur + "'" + ')" style="background:#fab001;color:#2f5673; font-weight: bold;padding: 10px 30px; border-radius:25px;font-family:Arial, Helvetica, sans-serif;">NEXT</a>';
    $("#" + idPrev).find(".continueBtn").remove();
    if (idCur == "DivStep1") {
        $('body').removeClass('masking');
    }
 /*   $('html, body').animate({
        scrollTop: $("#" + idPrev).offset().top
    }, 200);*/
    $('#' + idCur).removeClass('active');
    $('#' + idPrev).addClass('active');
}
function devNext1(idCur, idNext) {
    if (idCur == "DivStep23") {
        $('body').addClass('masking');
        $('#' + idCur).removeClass('active');
        $('#' + idNext).addClass('active');
        $('#' + idNext).addClass('btw1');
    }
    var boxLeftMargin = 0;
    var boxCurOffset = 0;
    $("#" + idNext).css({
        "margin-left": "+" + 0 + "px",
        "opacity": "0",
        "display": "block"
    });
    var heightBox = $("#" + idNext).height();
    $("#" + idCur).animate({
        marginLeft: "-=" + 0,
        opacity: 0
    }, 0, function () {
        $(this).hide();
    });
    $("#" + idNext).animate({
        opacity: 1,
        left: "+" + 0 + "px"
    }, speed);
/*    $('html, body').animate({
        scrollTop: $("#" + idNext).offset().top
    }, 200);*/
}
function devPrev1(one, two, three) {
    if ($('#' + one).hasClass('btw1')) {
        idCur = one;
        idPrev = three;
        $('#' + one).removeClass('btw1');
        //$("input[name=newschool]").each(function() {
        //	$(this).prop('checked', false);
        //});
    } else {
        idCur = one;
        idPrev = two;
    }
    var boxLeftMargin = 0;
    var boxCurOffset = 0;
    $("#" + idPrev).css({
        "margin-left": "-" + 0 + "px",
        "opacity": "0",
        "display": "block"
    });
    $(".pro_hover").css({
        width: ($("#" + idPrev).attr("prgres") * 9) + "%"
    });
    $("#" + idCur).animate({
        marginLeft: "+=" + 0,
        opacity: 0,
    }, 0, function () {
        $(this).hide();
    });
    $("#" + idPrev).animate({
        marginLeft: "+=" + 0,
        opacity: 1,
        left: "+" + 0 + "px"
    }, speed);
    var heightBox = $("#" + idPrev).height();
    var continueBtn = '<a href="#" onclick="devNext(' + "'" + idPrev + "'" + ',' + "'" + idCur + "'" + ')" style="background:#fab001;color:#2f5673; font-weight: bold;padding: 10px 30px; border-radius:25px;font-family:Arial, Helvetica, sans-serif;">NEXT</a>';
    $("#" + idPrev).find(".continueBtn").remove();
    if (idCur == "sel-sub") {
        $('body').removeClass('masking');
    }
/*    $('html, body').animate({
        scrollTop: $("#" + idPrev).offset().top
    }, 200);*/
    $('#' + idCur).removeClass('active');
    $('#' + idPrev).addClass('active');
}
function devNext(idCur, idNext) {
    //var divid = $('.banner.active').attr('id');
    var divid = idNext;
    localStorage.setItem("divid", divid);
    if (idCur == "DivStep1") {
        //$(".next-btn").click(function() {
        var cnt = 0;
        if (document.getElementById("drpParentSubjectArea").value == "") {
            document.getElementById("drpParentSubjectArea").focus();
            alertify.alert('Please Select Subject').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            cnt = cnt + 1;
            return false;
        }
        if (document.getElementById("specialization_id").value == "0") {
            document.getElementById("specialization_id").focus();
            alertify.alert('Please Select Specialization').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            cnt = cnt + 1;
            return false;
        }
        if (document.getElementById("txtzip").value == "") {
            document.getElementById("txtzip").focus();
            alertify.alert('Please Enter Zip').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            cnt = cnt + 1;
            return false;
        }
        var regzip = /^\d{4,5}$/;
        if (!regzip.test(document.getElementById("txtzip").value)) {
            var regzip = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] ?\d[A-Z]\d$/i;
            if (!regzip.test(document.getElementById("txtzip").value)) {
                alertify.alert('Zip must be 5 digits or valid Canadian postal code').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
                document.getElementById("txtzip").focus();
                cnt = cnt + 1;
                return false;
            }
        } /*else {
         
         
         $('#' + idCur).removeClass('active');
         
         
         $('#' + idNext).addClass('active');
         
         
         }
         
         
         devNext('DivStep1', 'DivStep2');*/
        if (cnt > 0) {
            //alert('hii');
            return false;
        }
        //});
        //alert('hii fella');
        $('body').addClass('masking');
        $('#' + idCur).removeClass('active');
        $('#' + idNext).addClass('active');
    }
    /*if (idCur == "sel-sub") {
     
     
     if ($('input[name=program_id]:checked').length <= 0) {
     
     
     alertify.alert('Please Select a Specialization').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
     
     
     return false;
     
     
     } else {
     
     
     $('#' + idCur).removeClass('active');
     
     
     $('#' + idNext).addClass('active');
     
     
     }
     
     
     }*/
    if (idCur == "DivStep21") {
        if ($('input[name=high_school_grad_year]:checked').length <= 0) {
            alertify.alert('Please Select your High School Graduation Year').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        } else {
            $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
        }
    }
    if (idCur == "DivStep22") {
        if ($('input[name=enrolled]:checked').length <= 0) {
            alertify.alert('Please Select One Option For enrolled in school').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        } else {
            $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
        }
    }
    if (idCur == "DivStep2") {
        if ($('input[name=edu_level_id]:checked').length <= 0) {
            alertify.alert('Please Select Education Level').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        }
        if (document.getElementById("edu_level_id").value == "0") {
            alertify.alert('Please Select Education Level').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        }
        if (document.getElementById("high_school_grad_year").value == "0") {
            alertify.alert('Please Select High School Graduation year').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        } else {
            $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
        }
    }
    if (idCur == "DivStep3") {
        if (document.getElementById("military0").checked == false && document.getElementById("military").checked == false) {
            alertify.alert('Please Select military').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        } else {
            $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
        }
        // document.getElementById('counter4').innerHTML = document.getElementById('counter3').innerHTML;
    }
    if (idCur == "DivStep41") {
        /*if(document.getElementById("txtzip").value == "")
         
         
         {
         
         
         document.getElementById("txtzip").focus();
         
         
         alert('Please Enter Zip');
         
         
         return false;
         
         
         }
         
         
         var regzip = /^\d{4,5}$/;
         
         
         if (!regzip.test(document.getElementById("txtzip").value))
         
         
         {
         
         
         var regzip = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] ?\d[A-Z]\d$/i;
         
         
         if (!regzip.test(document.getElementById("txtzip").value))
         
         
         {
         
         
         alert("Zip must be 5 digits or valid Canadian postal code.");
         
         
         document.getElementById("txtzip").focus();
         
         
         return false;
         
         
         }
         
         
         }*/
        function validateEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
        if (document.getElementById("txtemail").value == "") {
            document.getElementById("txtemail").focus();
            alertify.alert('Please Enter Email').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        }else if(document.getElementById("txtemail").value != ""){
               if (document.getElementById('txtemail').value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
                $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
            } else {
                alertify.alert('Please Enter Valid Email').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
                return false;
            }
        }

        else {
            $('#' + idCur).removeClass('active');
            $('#' + idNext).addClass('active');
        }
         
         
        
    }
    var boxLeftMargin = 0;
    var boxCurOffset = 0;
    $("#" + idNext).css({
        "margin-left": "+" + 0 + "px",
        "opacity": "0",
        "display": "block"
    });
    var heightBox = $("#" + idNext).height();
    $("#" + idCur).animate({
        marginLeft: "-=" + 0,
        opacity: 0
    }, 0, function () {
        $(this).hide();
    });
    $("#" + idNext).animate({
        opacity: 1,
        left: "+" + 0 + "px"
    }, speed);
/*    $('html, body').animate({
        scrollTop: $("#" + idNext).offset().top
    }, 200);*/
}
function military1() {
    $('#military0').fadeIn(2000);
    $('#military12').fadeIn(2000);
}
function hideSubmit(idCur) {
    $("#submitBtn").hide();
    $("#submitBtnWait").show();
}
function resetSubmit(idCur) {
    $("#submitBtn").show();
    $("#submitBtnWait").hide();
}
function div5(idCur) {
    if (idCur == "submitBtn") {
        //hideSubmit(idCur);
        if ($('#form #first_name').val() == '') {
            $('#form #first_name').focus();
            alertify.alert('Please Enter Your First Name!').setHeader('<img src="images/logo.png" style="width:155px;"/> ');
            return false;
        }
        if ($('#form #last_name').val() == '') {
            $('#form #last_name').focus();
            alertify.alert('Please Enter Your Last Name!').setHeader('<img src="images/logo.png" style="width:155px;"/> ');
            return false;
        }
        if ($('#form #address').val() == '') {
            $('#form #address').focus();
            alertify.alert('Please Enter Your Address!').setHeader('<img src="images/logo.png" style="width:155px;"/> ');
            return false;
        }
        if ($('#form #city').val() == '') {
            $('#form #city').focus();
            alertify.alert('Please Enter Your City!').setHeader('<img src="images/logo.png" style="width:155px;"/> ');
            return false;
        }
        if ($('#form #state').val() == '') {
            $('#form #state').focus();
            alertify.alert('Please Select Your State!').setHeader('<img src="images/logo.png" style="width:155px;"/> ');
            return false;
        }
        if ($('#txtphone').val() == "" || $('#txtphone').val() == "Phone No*") {
            $('#txtphone').focus();
            alertify.alert('Please Enter Your Phone Number').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
            return false;
        } else {
           if (IsValidPhone()) {} else {
            $('#txtphone').focus();
            alertify.alert('Please Enter Valid Phone Number').setHeader('<img src="images/logo.png" style="width:150px;"/> ');
              return false;
             }
        }
       
    localStorage.clear();
}
}
function emailValid() {





}

jQuery(document).ready(function () {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    jQuery('.accordion-section-title').click(function (e) {
        var currentAttrValue = jQuery(this).attr('href');
        if (jQuery(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            jQuery(this).addClass('active');
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }
        e.preventDefault();
    });
    //$('a[href="#AddPhone"]').click(function() {
    $('.add-phones').click(function () {
        if ($('.work_phone').css('display') == 'none') {
            $('.work_phone').css('display', 'block');
            $(this).text('Hide Additional Phone No');
        } else {
            $('.work_phone').css('display', 'none');
            document.f1.work_phone1.value = '';
            document.f1.work_phone2.value = '';
            document.f1.work_phone3.value = '';
            $(this).text('Add Additional Phone No [+]');
        }
        return false;
    });
});
function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;
    return true;
}