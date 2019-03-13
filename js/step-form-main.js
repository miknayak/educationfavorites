//var SpecializationUpdate;

function SpecializationUpdate( SpecializationID ){

	//alert(SpecializationID)

	return SpecializationID;

}

function pagechange( ){

	//return pagechangeVal;	

}

var subjectProgramArray = new Array(),

        $tempOptionArray;

$tempOptionArray = $("<option value='0'>Select Specialization</option>");

//alert($tempOptionArray);

/*Art and Design*/
/*alert(subjectProgramArray);*/
/*subjectProgramArray[""] = $tempOptionArray.children();
$tempOptionArray = $("<option value=''>Select Specialization</option>");*/
subjectProgramArray[0] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='1'>Animation</option>"));

$tempOptionArray.append($("<option value='2'>Architectural Design & Drafting Technology</option>"));

$tempOptionArray.append($("<option value='3'>Art & Design</option>"));

$tempOptionArray.append($("<option value='4'>Audio Production</option>"));

$tempOptionArray.append($("<option value='5'>Audio/Video Production</option>"));

$tempOptionArray.append($("<option value='6'>Design & Technical Graphics</option>"));

$tempOptionArray.append($("<option value='7'>Digital Design</option>"));

$tempOptionArray.append($("<option value='8'>Digital Filmmaking & Video Production</option>"));

$tempOptionArray.append($("<option value='9'>Digital Image Management</option>"));

$tempOptionArray.append($("<option value='10'>Digital Photography</option>"));

$tempOptionArray.append($("<option value='11'>Game Art & Design</option>"));

$tempOptionArray.append($("<option value='12'>Graphic and Web Design</option>"));

$tempOptionArray.append($("<option value='13'>Graphic Design</option>"));

$tempOptionArray.append($("<option value='14'>Media Arts & Animation</option>"));

$tempOptionArray.append($("<option value='15'>Video Production</option>"));

$tempOptionArray.append($("<option value='16'>Visual & Game Programming</option>"));

$tempOptionArray.append($("<option value='17'>Visual Communications</option>"));

$tempOptionArray.append($("<option value='18'>Visual Effects & Motion Graphics</option>"));

$tempOptionArray.append($("<option value='19'>Web Design</option>"));

$tempOptionArray.append($("<option value='20'>Web Design & Interactive Media</option>"));

/*Business*/

subjectProgramArray[1] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='21'>Accounting</option>"));

$tempOptionArray.append($("<option value='22'>Advanced Start Accounting</option>"));

$tempOptionArray.append($("<option value='23'>Advertising</option>"));

$tempOptionArray.append($("<option value='24'>Business</option>"));

$tempOptionArray.append($("<option value='25'>Business Administration</option>"));

$tempOptionArray.append($("<option value='26'>Business Management</option>"));

$tempOptionArray.append($("<option value='178'>e-Business</option>"));

$tempOptionArray.append($("<option value='27'>Entrepreneurship</option>"));

$tempOptionArray.append($("<option value='28'>Executive Leadership</option>"));

$tempOptionArray.append($("<option value='29'>Finance</option>"));

$tempOptionArray.append($("<option value='30'>International Business</option>"));

$tempOptionArray.append($("<option value='31'>Leadership</option>"));

$tempOptionArray.append($("<option value='32'>Management</option>"));

$tempOptionArray.append($("<option value='33'>Management and Supervision</option>"));

$tempOptionArray.append($("<option value='179'>Marketing</option>"));

$tempOptionArray.append($("<option value='34'>Office Management</option>"));

$tempOptionArray.append($("<option value='180'>Operations Management</option>"));

$tempOptionArray.append($("<option value='35'>Organizational Leadership</option>"));

$tempOptionArray.append($("<option value='36'>Project Management</option>"));

/*Counseling*/

subjectProgramArray[2] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='37'>Addictions</option>"));

$tempOptionArray.append($("<option value='38'>Applied Behavior Analysis</option>"));

$tempOptionArray.append($("<option value='39'>Clinical Health Psychology</option>"));

$tempOptionArray.append($("<option value='40'>Clinical Mental Health Counseling</option>"));

$tempOptionArray.append($("<option value='41'>Clinical Psychology</option>"));

$tempOptionArray.append($("<option value='42'>Community Counseling</option>"));

$tempOptionArray.append($("<option value='43'>Counseling</option>"));

$tempOptionArray.append($("<option value='44'>Counseling Psychology</option>"));

$tempOptionArray.append($("<option value='45'>Counselor Education & Supervision</option>"));

$tempOptionArray.append($("<option value='46'>Educational Psychology</option>"));

$tempOptionArray.append($("<option value='47'>Forensic Psychology</option>"));

$tempOptionArray.append($("<option value='48'>Industrial Organizational Psychology</option>"));

$tempOptionArray.append($("<option value='49'>Marriage & Family Therapy</option>"));

$tempOptionArray.append($("<option value='50'>Mental Health Counseling</option>"));

$tempOptionArray.append($("<option value='51'>Pastoral Community Counseling</option>"));

$tempOptionArray.append($("<option value='52'>Professional Counseling</option>"));

$tempOptionArray.append($("<option value='53'>Psychoanalytic Psychology</option>"));

$tempOptionArray.append($("<option value='54'>Psychology</option>"));

$tempOptionArray.append($("<option value='55'>School Counseling</option>"));

$tempOptionArray.append($("<option value='56'>School Psychology</option>"));

/*Criminal Justice*/

subjectProgramArray[3] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='57'>Corrections</option>"));

$tempOptionArray.append($("<option value='58'>Crime Scene Technician</option>"));

$tempOptionArray.append($("<option value='59'>Criminal Justice</option>"));

$tempOptionArray.append($("<option value='60'>Criminal Justice Administration and Management</option>"));

$tempOptionArray.append($("<option value='61'>Homeland Security and Emergency Management</option>"));

$tempOptionArray.append($("<option value='62'>International and Comparative Criminal Justice</option>"));

$tempOptionArray.append($("<option value='63'>Law</option>"));

$tempOptionArray.append($("<option value='64'>Legal Secretary</option>"));

$tempOptionArray.append($("<option value='65'>Legal Studies</option>"));

$tempOptionArray.append($("<option value='66'>Paralegal</option>"));

$tempOptionArray.append($("<option value='67'>Paralegal Assistant</option>"));

/*Culinary*/

subjectProgramArray[4] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='68'>No Data</option>"));

$tempOptionArray.append($("<option value='69'>No Data</option>"));

$tempOptionArray.append($("<option value='70'>No Data</option>"));

$tempOptionArray.append($("<option value='71'>No Data</option>"));

/*Education*/

subjectProgramArray[5] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='72'>Adult Education & Training</option>"));

$tempOptionArray.append($("<option value='73'>Advanced Educational Administration</option>"));

$tempOptionArray.append($("<option value='74'>Early Childhood Development</option>"));

$tempOptionArray.append($("<option value='75'>Early Childhood Education</option>"));

$tempOptionArray.append($("<option value='76'>Education</option>"));

$tempOptionArray.append($("<option value='77'>Education in Instructional Technology</option>"));

$tempOptionArray.append($("<option value='78'>Educational Administration</option>"));

$tempOptionArray.append($("<option value='79'>Educational Leadership</option>"));

$tempOptionArray.append($("<option value='80'>Educational Paraprofessional (Teacher's Aide)</option>"));

$tempOptionArray.append($("<option value='81'>Higher & Postsecondary Education</option>"));

$tempOptionArray.append($("<option value='82'>Higher Education</option>"));

$tempOptionArray.append($("<option value='83'>Initial Educational Administration</option>"));

$tempOptionArray.append($("<option value='84'>Instructional Leadership</option>"));

$tempOptionArray.append($("<option value='85'>Literacy & Language</option>"));

$tempOptionArray.append($("<option value='86'>Literacy and Language Teaching K</option>"));

$tempOptionArray.append($("<option value='87'>Mathematics Teaching</option>"));

$tempOptionArray.append($("<option value='88'>Teaching & Learning</option>"));

/*$tempOptionArray.append($("<option value='287'>Bachelor of Letters</option>"));

$tempOptionArray.append($("<option value='288'>Bachelor of Science in Public Safety</option>"));

$tempOptionArray.append($("<option value='289'>Bachelor of Science in Environmental Science</option>"));

$tempOptionArray.append($("<option value='290'>Bachelor of Arts in Anthropology</option>"));

$tempOptionArray.append($("<option value='291'>Bachelor of Arts in American Indian Studies</option>"));

$tempOptionArray.append($("<option value='292'>Bachelor of Arts in American Studies</option>"));

$tempOptionArray.append($("<option value='293'>Bachelor of Science in Bible</option>"));

$tempOptionArray.append($("<option value='294'>Bachelor of Science in Engineering Physics</option>"));

$tempOptionArray.append($("<option value='295'>Bachelor of Science in Engineering Science</option>"));

$tempOptionArray.append($("<option value='296'>Bachelor of Science in Integrated Science</option>"));

$tempOptionArray.append($("<option value='297'>Bachelor of Music in Jazz Studies</option>"));

$tempOptionArray.append($("<option value='298'>Bachelor of Science in Mining Engineering</option>"));

$tempOptionArray.append($("<option value='299'>Bachelor of Music in Theory</option>"));

$tempOptionArray.append($("<option value='300'>Bachelor of Science in Quantity Surveying Engineering</option>"));*/

/*Fashion*/

subjectProgramArray[6] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='301'>Fashion & Retail Management</option>"));

$tempOptionArray.append($("<option value='302'>Fashion Design</option>"));

$tempOptionArray.append($("<option value='303'>Fashion Marketing</option>"));

$tempOptionArray.append($("<option value='304'>Fashion Merchandising</option>"));

$tempOptionArray.append($("<option value='305'>Fashion Retailing</option>"));

$tempOptionArray.append($("<option value='306'>Interior Design</option>"));

/*Healthcare*/

subjectProgramArray[7] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='95'>RN to BSN</option>"));

$tempOptionArray.append($("<option value='96'>Adult Health Nurse Practitioner</option>"));

$tempOptionArray.append($("<option value='97'>Allied Health Science</option>"));

$tempOptionArray.append($("<option value='98'>Anesthesiologist Assistant</option>"));

$tempOptionArray.append($("<option value='99'>Biomedical Equipment Technology</option>"));

$tempOptionArray.append($("<option value='100'>Dental Assistant</option>"));

$tempOptionArray.append($("<option value='101'>Dental Hygiene</option>"));

$tempOptionArray.append($("<option value='102'>Diagnostic Medical Sonography</option>"));

$tempOptionArray.append($("<option value='103'>Family Nurse Practitioner</option>"));

$tempOptionArray.append($("<option value='104'>Health and Fitness Training</option>"));

$tempOptionArray.append($("<option value='105'>Health Care Administration</option>"));

$tempOptionArray.append($("<option value='106'>Health Information Technology</option>"));

$tempOptionArray.append($("<option value='107'>Health Science</option>"));

$tempOptionArray.append($("<option value='108'>Health Services Management</option>"));

$tempOptionArray.append($("<option value='109'>Healthcare</option>"));

$tempOptionArray.append($("<option value='110'>Healthcare Administration</option>"));

$tempOptionArray.append($("<option value='111'>Healthcare Management</option>"));

$tempOptionArray.append($("<option value='112'>Histotechnology</option>"));

$tempOptionArray.append($("<option value='113'>Medical Assisting</option>"));

$tempOptionArray.append($("<option value='114'>Medical Coding and Billing</option>"));

$tempOptionArray.append($("<option value='115'>Medical Laboratory Technology</option>"));

$tempOptionArray.append($("<option value='116'>Medical Office Management</option>"));

$tempOptionArray.append($("<option value='117'>Medical Technology</option>"));

$tempOptionArray.append($("<option value='118'>Medical Transcription</option>"));

$tempOptionArray.append($("<option value='119'>Nurse Administrator</option>"));

$tempOptionArray.append($("<option value='120'>Nurse Educator</option>"));

$tempOptionArray.append($("<option value='121'>Nursing</option>"));

$tempOptionArray.append($("<option value='122'>Nursing Completion</option>"));

$tempOptionArray.append($("<option value='123'>Nutrition Science</option>"));

$tempOptionArray.append($("<option value='124'>Occupational Therapy Assistant</option>"));

$tempOptionArray.append($("<option value='125'>Pharmacy</option>"));

$tempOptionArray.append($("<option value='126'>Pharmacy Technology</option>"));

$tempOptionArray.append($("<option value='127'>Physical Therapist Assistant</option>"));

$tempOptionArray.append($("<option value='128'>Physician Assistant Studies</option>"));

$tempOptionArray.append($("<option value='129'>Practical Nursing</option>"));

$tempOptionArray.append($("<option value='130'>Public Health</option>"));

$tempOptionArray.append($("<option value='131'>Radiation Therapy</option>"));

$tempOptionArray.append($("<option value='132'>Radiologic Technology</option>"));

$tempOptionArray.append($("<option value='133'>Surgical Technology</option>"));

/*Information and Technology*/

subjectProgramArray[8] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='134'>Cisco Networks</option>"));

$tempOptionArray.append($("<option value='135'>Computer Aided Design & Drafting</option>"));

$tempOptionArray.append($("<option value='136'>Computer Information Systems</option>"));

$tempOptionArray.append($("<option value='137'>Computer Networking</option>"));

$tempOptionArray.append($("<option value='138'>Computer Software Applications</option>"));

$tempOptionArray.append($("<option value='139'>Computer Software Technology</option>"));

$tempOptionArray.append($("<option value='140'>Information Security</option>"));

$tempOptionArray.append($("<option value='141'>Information Systems and Technology</option>"));

$tempOptionArray.append($("<option value='142'>Information Technology</option>"));

$tempOptionArray.append($("<option value='143'>Information Technology Pathway</option>"));

$tempOptionArray.append($("<option value='144'>Linux System Administration</option>"));

$tempOptionArray.append($("<option value='145'>Oracle Database Administration</option>"));

/*History*/

subjectProgramArray[9] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

$tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

$tempOptionArray.append($("<option value='440'>Bachelor of Science in History</option>"));

$tempOptionArray.append($("<option value='441'>Bachelor of Arts in American Indian Studies</option>"));

$tempOptionArray.append($("<option value='442'>Bachelor of Arts in American Studies</option>"));

/*Other*/

subjectProgramArray[10] = $tempOptionArray.children();

$tempOptionArray = $("<option value=''>Select Specialization</option>");

/*

 subjectProgramArray[9] = $tempOptionArray.children();

 $tempOptionArray = $("<option value=''>Select Specialization</option>");

 $tempOptionArray.append($("<option value='0'>Select Specialization</option>"));

 $tempOptionArray.append($("<option value='146'>Advanced Start Fire Science</option>"));

 $tempOptionArray.append($("<option value='147'>Arts and Humanities</option>"));

 $tempOptionArray.append($("<option value='177'>Automotive</option>"));

 $tempOptionArray.append($("<option value='148'>Communications</option>"));

 $tempOptionArray.append($("<option value='149'>Conversion Program</option>"));

 $tempOptionArray.append($("<option value='150'>Engineering</option>"));

 $tempOptionArray.append($("<option value='151'>Environmental Policy</option>"));

 $tempOptionArray.append($("<option value='152'>Environmental Policy and Management</option>"));

 $tempOptionArray.append($("<option value='153'>Fire & Emergency Management</option>"));

 $tempOptionArray.append($("<option value='154'>Fire Science</option>"));

 $tempOptionArray.append($("<option value='155'>Food & Beverage Management</option>"));

 $tempOptionArray.append($("<option value='156'>Hospitality Management</option>"));

 $tempOptionArray.append($("<option value='157'>Human Resources</option>"));

 $tempOptionArray.append($("<option value='158'>Human Resources Management</option>"));

 $tempOptionArray.append($("<option value='159'>Human Services</option>"));

 $tempOptionArray.append($("<option value='160'>Interdisciplinary Studies</option>"));

 $tempOptionArray.append($("<option value='161'>Kitchen and Bath Design</option>"));

 $tempOptionArray.append($("<option value='162'>Liberal Arts</option>"));

 $tempOptionArray.append($("<option value='163'>Liberal Studies</option>"));

 $tempOptionArray.append($("<option value='164'>Other</option>"));

 $tempOptionArray.append($("<option value='165'>Photography</option>"));

 $tempOptionArray.append($("<option value='166'>Political Science</option>"));

 $tempOptionArray.append($("<option value='167'>Private Security<</option>"));

 $tempOptionArray.append($("<option value='168'>Public Administration</option>"));

 $tempOptionArray.append($("<option value='169'>Public Administration and Policy</option>"));

 $tempOptionArray.append($("<option value='181'>Real Estate</option>"));

 $tempOptionArray.append($("<option value='170'>Residential Planning</option>"));

 $tempOptionArray.append($("<option value='171'>Restaurant Management</option>"));

 $tempOptionArray.append($("<option value='172'>Service Sector Management</option>"));

 $tempOptionArray.append($("<option value='173'>Set & Exhibit Design</option>"));

 $tempOptionArray.append($("<option value='174'>Sport</option>"));

 $tempOptionArray.append($("<option value='175'>Undeclared</option>"));

 $tempOptionArray.append($("<option value='176'>Veterinary</option>"));

 */

/*subjectProgramArray[10] = $tempOptionArray.children();

 var programArray = [0, 16, 32, 5, 21, 37, 10, 26, 42, 15, 31, 4, 20, 36, 9, 25, 41, 14, 30, 3, 19, 35, 8, 24, 40, 13, 29, 10, 2, 18, 34, 7, 23, 39, 12, 26, 28, 42, 1, 17, 33, 6, 22, 38, 11, 27, 0, 16, 32, 5, 21, 37, 10, 26, 42, 15, 31, 4, 20, 36, 9, 25, 41, 14, 30, 3, 19, 35, 8, 24, 40, 13, 29, 2, 18, 34, 7, 23, 39, 12, 28, 1, 17, 33, 6, 22, 38, 11, 27, 0, 16, 32, 5, 21, 37, 10, 26, 42, 15, 31, 4, 20, 36, 9, 25, 41, 14, 30, 3, 19, 35, 8, 24, 40, 13, 29, 2, 18, 34, 7, 23, 39, 12, 28, 1, 17, 33, 6, 22, 38, 11, 27, 0, 16, 32, 5, 21, 37, 10, 26, 42, 15, 31, 4, 20, 36, 9, 25, 41, 14, 30, 37, 3, 19, 35, 8, 24, 40, 13, 29, 2, 18, 34, 7, 23, 39, 12, 28, 1, 17, 33, 6, 22, 38, 15, 11, 27, 0, 16, 32, 5, 21];

 var subjectArray = [0, 40, 5, 63, 24, 82, 16, 38, 2, 7, 45];*/

$(document).ready(function () {

    // $("#specialization_id").attr("placeholder", "Select Specialization");

    /*$("input[type='tel']").keyup(function () {

        var curchr = this.value.length;

        var curval = $(this).val();

        if (curchr == 3) {

            $(this).val("(" + curval + ")" + "-");

        } else if (curchr == 9) {

            $(this).val(curval + "-");

        }

    });*/

	$('input[type="tel"]').keydown(function (e) {

             var key = e.charCode || e.keyCode || 0;

             $text = $(this); 

             if (key !== 8 && key !== 9) {

                 if ($text.val().length === 3) {

                     $text.val("(" +$text.val() + ')-');

                 }

                 if ($text.val().length === 9) {

                     $text.val($text.val() + '-');

                 }

             }

             return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));

      })

	

	

    if ($('#drpParentSubjectArea').val() != '') {

    }

    $('#txtzip').on("keypress", function (e) {

        if (e.keyCode == 13) {

            if ($("#txtzip").val() == "") {

                $("#txtzip").focus();

                alertify.alert('Please Enter Zip Code').setHeader('<img src="images/logo.png" style="width:150px;"/> ');

                return false;

            }

            var regzip = /^\d{4,5}$/;

            if (!regzip.test($("#txtzip").val())) {

                var regzip = /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] ?\d[A-Z]\d$/i;

                if (!regzip.test($("#txtzip").val())) {

                    alertify.alert("Zip must be 5 digits or valid Canadian postal code.").setHeader('<img src="images/logo.png" style="width:150px;"/> ');

                    $("#txtzip").focus();

                    return false;

                } else {

                    location.hash = 'step_4';

                    return false;

                }

            } else {

                location.hash = 'step_4';

                return false;

            }

        }

    });

});

function subjectUpdate(subject_id) {
	
   
/*
    if (subject_id == 11) {

        var HtmlSel = "<option value='0'>Select Specialization</option><option value='420'>Bachelor of Science in Respiratory Therapy</option>    <option value='421'>Bachelor of Philosophy</option>    <option value='422'>Bachelor of Science in Sports Management</option>    <option value='423'>Bachelor of Science in English Literature</option>    <option value='424'>Bachelor of Science in Environmental Engineering</option>    <option value='425'>Bachelor of Science in Forestry</option>    <option value='426'>Bachelor of Science in Athletic Training</option>    <option value='427'>Bachelor of Science in Veterinary Technology</option>    <option value='428'>Bachelor of Science in Actuarial Science</option>    <option value='429'>Bachelor of Arts in Child Advocacy</option>   <option value='430'>Bachelor of Science in Foreign Service</option><option value='431'>Bachelor of Letters</option><option value='432'>Bachelor of Science in Public Safety</option><option value='433'>Bachelor of Science in Environmental Science</option><option value='434'>Bachelor of Arts in Anthropology</option><option value='435'>Bachelor of Science in Bible</option><option value='436'>Bachelor of Music in Jazz Studies</option><option value='437'>Bachelor of Science in Mining Engineering</option><option value='438'>Bachelor of Music in Theory</option><option value='439'>Bachelor of Science in Politics</option>";

    } else {*/

        var HtmlSel = subjectProgramArray[subject_id];

//    }

    $('#specialization_id').empty().html(HtmlSel);

    oldSubject_id = subject_id;

}

/*function subjectUpdate(subject_id) {

 $('#specialization_id').empty().php(subjectProgramArray[subject_id]).val("0");

 oldSubject_id = subject_id;

 }*/

function CheckIsNumber(evt) {

    evt = (evt) ? evt : window.event;

    var charCode = (evt.which) ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

        return false;

    }

    return true;

}

function CheckIsCharacter(objEvt) {

	//alert(objEvt.attr('id'));

    var charCode = (objEvt.which) ? objEvt.which : event.keyCode

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode == 8 || charCode == 32 || charCode == 0)) {

        return true;

    } else {

        return false;

    }

}

function PhoneBlur() {

    if ($('#phone').val() == "" || $('#phone').val() == "(") {

        $('#phone').val("Phone");

    } else {

        if (IsValidPhone()) {

            $('#phone').removeClass(errorClass);

        } else {

            $('#phone').addClass(errorClass);

        }

    }

}

function PhoneFocus() {

    if ($('#phone').val() == "Phone") {

        $('#phone').val("(");

    }

}

function PhoneKeyPress() {

    var phoneVal = $('#phone').val();

    if (isNaN(phoneVal.substring(phoneVal.length - 1, phoneVal.length)) || phoneVal.length > 14) {

        phoneVal = phoneVal.substring(0, phoneVal.length - 1);

    }

    phoneVal = phoneVal.replace("(", "");

    phoneVal = phoneVal.replace(")", "");

    phoneVal = phoneVal.replace("-", "");

    phoneVal = phoneVal.replace(" ", "");

    if (phoneVal.length == 0) {

        $('#phone').val("(")

        return

    }

    if (phoneVal.length < 3) {

        $('#phone').val("(" + phoneVal)

        return;

    }

    if (phoneVal.length < 6) {

        $('#phone').val("(" + phoneVal.substring(0, 3) + ") " + phoneVal.substring(3, phoneVal.length));

        return;

    }

    $('#phone').val("(" + phoneVal.substring(0, 3) + ") " + phoneVal.substring(3, 6) + "-" + phoneVal.substring(6, 10));

    return;

}

function IsValidPhone() {

    var phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (phonePattern.test($('#txtphone').val()) == false) {

        return false;

    } else {

        return true;

    }

}

window.onload = function () {

    programs = 1000;

    getProgramCount(programs, 'up');

    function nextInput(inp) {

        alert('yes');

        if (inp.length == 3) {

            inp.next("input").focus();

        }

    }

    $('#home_phone1,#home_phone2,#work_phone1,#work_phone2').bind("keyup change", function () {

        if ($(this).val().length == 3) {

            $(this).next("input").focus();

        }

    });

}

var oldProgram_id = 0;

var oldSubject_id = 0;

var start = 0;

var count = 0;

var remaining = 0;

function getProgramCount(value, direction) {

    var msInterval = 5;

    if (typeof (value) == 'number') {

        start = value;

        remaining = value;

        count = 1;

    }

}

function askRN() {

    //Ask RN only if healthcare is selected



    return $('input[name=program_id]:checked').val() == "95";

}

function programUpdate(program_id) {

    if (program_id > 0) {

        $('.formLoadingProgress').css({

            "width": "25%",

        });

    } else {

        $('.formLoadingProgress').css({

            "width": "15%",

        });

    }

    oldProgram_id = program_id;

}

function incrementCounter(chk) {

    if (chk == 'edu_level_id') {

        $('.formLoadingProgress').css({

            "width": "35%",

        });

        devNext('DivStep2', 'DivStep20');

    } else if (chk == 'degree_level_id') {

        $('.formLoadingProgress').css({

            "width": "55%",

        });

        devNext('DivStep20', 'DivStep21');

        var degreeval = $("#DivStep20 .banner-sec-form-content .b_form_left label input[name='degree_level_id']:checked").val();

		 if(parseInt(degreeval) != 0){

			

			$("#DivStep20 .banner-sec-form-content .b_form_left label").each(function(){

					$(this).removeClass('active');

			if(parseInt($(this).find('input').val()) == parseInt(degreeval)){

				localStorage.setItem('DegreeToget',parseInt(degreeval));

				$(this).addClass('active');

				

			}

		});

		}

    } else if (chk == 'military0') {

        $('.formLoadingProgress').css({

            "width": "55%",

        });

        devNext('DivStep3', 'DivStep31');

    } else if (chk == 'military') {

        $('.formLoadingProgress').css({

            "width": "55%",

        });

        devNext('DivStep3', 'DivStep31');

    } else if (chk == 'enroll') {

        $('.formLoadingProgress').css({

            "width": "55%",

        });

        if(localStorage.getItem('specialization_id') == '95'){

			 devNext('DivStep31', 'DivStep32');

		}

       /* if (askRN()) {

           

        } */else {

            devNext('DivStep31', 'DivStep4');

        }

    } else if (chk == 'rn') {

        $('.formLoadingProgress').css({

            "width": "57%",

        });

        devNext('DivStep32', 'DivStep4');

    } else if (chk == 'military2') {

        $('.formLoadingProgress').css({

            "width": "60%",

        });

    } else if (chk == 'military3') {

        $('.formLoadingProgress').css({

            "width": "60%",

        });

    } else if (chk == 'branch') {

        $('.formLoadingProgress').css({

            "width": "70%",

        });

    } else if (chk == 'status') {

        $('.formLoadingProgress').css({

            "width": "75%",

        });

    } else if (chk == 'classes') {

        $('.formLoadingProgress').css({

            "width": "80%",

        });

        devNext('DivStep4', 'DivStep41');

    } else if (chk == 'classes2') {

        $('.formLoadingProgress').css({

            "width": "90%",

        });

        devNext('DivStep4', 'DivStep41');

    } else if (chk == 'classes1') {

        $('.formLoadingProgress').css({

            "width": "80%",

        });

    } else if (chk == 'classes5') {

        $('.formLoadingProgress').css({

            "width": "90%",

        });

    } else if (chk == 'classes3') {

        $('.formLoadingProgress').css({

            "width": "90%",

        });

        devNext('DivStep4', 'DivStep41');

    } else if (chk == 'classes6') {

        $('.formLoadingProgress').css({

            "width": "90%",

        });

    }

}

function ajaxZip(zip) {

    var len = zip.length;

}

$(document).ready(function () {

    $("#TESTdrpParentSubjectArea").change(function () {

        window.location = $(this).val()

    });

    $(".TESTdrpParentSubjectArea").change(function () {

        window.location = $(this).val()

    });

    $('.call-block').parent('.sidebar-right').css("display", "none");

    $('.image-block').parent('.sidebar-right').css("display", "none")

	

	var site_name = document.location.href.split('/');

	var get_return_url = document.location.href.split('#');

	//alert(site_name[4]);

	//alert(get_return_url[1]);

	var backurl = '../subjects/'+get_return_url[1]+'.php';

	if(site_name[4] == 'programs'){

	

	var text_add = '<a class="sub-back" href="'+backurl+'" style="float: left;margin-right: 10px;margin-top: 5px;"><img src="images/back-icon.png"></a>';

	$( "p.medium-desc" ).before( text_add );		

	}

//state add

	var state_options = '<option value="">State*</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>';

	$('#form #state').html(state_options);

// Show Form

			

		//localStorage.setItem('divid','0');

		var divid = localStorage.getItem('divid');
//alert(divid);
localStorage.setItem('specialization_id','0');

		if(  localStorage.getItem('divid') === null) {

			

			localStorage.setItem('divid','DivStep1');

			$('body').find('#DivStep1').addClass('active');

			$('body').find('#DivStep1').css('display','block');

			$('body').find('#DivStep1').css('opacity','1');

		

		}

		//if (divid != "undefined" || divid != "null" || divid != "0") {

		else {			/*

			

			$('banner').css('margin-left','0');

			$('banner').css('opacity','0');

			$('banner').css('left','0');

*/

		
			$('#DivStep1').css('display','none');
			$('body').find('.banner-sec-form').css('display','none');

			$('body').find('.banner-sec-form').css('opacity','0');

			//$('.banner').removeAttr('style');

			$('body').find('#'+divid).addClass('active');

			$('body').find('#'+divid).css('display','block');

			// $('body').find('#'+divid).css('margin-left','0');

			$('body').find('#'+divid).css('opacity','1');

			// $('body').find('#'+divid).css('left','0');

			

		}

		
// LocalStorage Section

  	var txtzip = localStorage.getItem('txtzip');

	var drpParentSubjectArea = localStorage.getItem('drpParentSubjectArea');

	var specialization_id = localStorage.getItem('specialization_id');

	

 	if (txtzip != "undefined" || txtzip != "null") {

		$('#txtzip').val(txtzip);

	}

	if (drpParentSubjectArea != "undefined" || drpParentSubjectArea != "null") {

		$('#drpParentSubjectArea').val(drpParentSubjectArea);


		subjectUpdate(drpParentSubjectArea);


	}
	if (specialization_id == "undefined" || specialization_id == "null" || specialization_id == "0") {

		$('#specialization_id').html('<option class="opp" value="0">Select Specialization</option>');
	}
	
	if (specialization_id != "undefined" || specialization_id != "null") {

		$('#specialization_id').val(specialization_id);

	}



	



		

	// Store Field Value

	$('#drpParentSubjectArea').click(function(){

		var dpdata = $(this).val();

		localStorage.setItem("drpParentSubjectArea", dpdata);

	});	

	

	$('#specialization_id').click(function(){

		var spid = $(this).val();

		localStorage.setItem("specialization_id", spid);

	});	

	$('#txtzip').keyup(function(){

		var fzip = $(this).val();

		localStorage.setItem("txtzip", fzip);

	});	

	$(document).on('change', 'input[name="edu_level_id"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var elid = $(this).val();

		localStorage.setItem("edu_level_id", elid);

		$('#DivStep2 .banner-sec-form-content label').removeClass('active');

		$(this).parent().addClass('active');

	});


	$(document).on('change', 'input[name="high_school_grad_year"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var hsgid = $(this).val();

		localStorage.setItem("high_school_grad_year", hsgid);

		$('#DivStep21 .accordion-section .accordion-section-content p label').removeClass('active');

		$(this).parent().addClass('active');

	});

	$(document).on('change', 'input[name="enrolled"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var enrolled = $(this).val();

		localStorage.setItem("enrolled", enrolled);

		$('#DivStep22 .banner-sec-form-content label').removeClass('active');

		$(this).parent().addClass('active');

	});

	

	$(document).on('change', 'input[name="newschool"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var newschool = $(this).val();

		localStorage.setItem("newschool", newschool);

		$('#DivStep23 .banner-sec-form-content label').removeClass('active');

		$(this).parent().addClass('active');

	});

	$(document).on('change', 'input[name="military"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var milid = $(this).val();

		localStorage.setItem("military", milid);

		$('#DivStep3 .banner-sec-form-content label').removeClass('active');

		$(this).parent().addClass('active');

	});

	$(document).on('change', 'input[name="enroll"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var enroll = $(this).val();

		localStorage.setItem("enroll", enroll);

		$('#DivStep31 .b_form_left label').removeClass('active');

		$(this).parent().addClass('active');



	});

	$(document).on('change', 'input[name="classes"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var classes = $(this).val();

		localStorage.setItem("classes", classes);

		$('#DivStep4 .banner-sec-form-content label').removeClass('active');

		$(this).parent().addClass('active');

	});

	

	$(document).on('change', 'input[name="degree_level_id"]:radio', function(){

		/*$(this).parent('label').addClass("lchecked");*/

		var degree_get = $(this).val();

		localStorage.setItem("DegreeToget", degree_get);

        $('#DivStep2 .banner-sec-form-content label').removeClass('active');

        $(this).parent().addClass('active');

	});

	

	

	$('#txtemail').keyup(function(){

		var txtemail = $(this).val();

		localStorage.setItem("txtemail",txtemail);

	});

	$('#first_name').bind('keyup blur',function(){

		var first_name = $(this);

		first_name.val(first_name.val().replace(/[^a-zA-Z]/g,'') ); 

		localStorage.setItem("first_name",first_name);

        

	});

	$('#last_name').bind('keyup blur',function(){

		var last_name = $(this);

		last_name.val(last_name.val().replace(/[^a-zA-Z]/g,'') ); 

		localStorage.setItem("last_name",last_name);

		//return false;

	});

	$('#address').keyup(function(){

		var address = $(this).val();

		localStorage.setItem("address",address);

	});

	$('#city').keyup(function(){

		var city = $(this);

		city.val(city.val().replace(/[^a-zA-Z]/g,'') ); 

		localStorage.setItem("city",city);

	});

	$('#state').keyup(function(){

		var state = $(this).val();

		localStorage.setItem("state",state);

	});

		

	$('#txtphone').keyup(function(){

		var txtphone = $(this).val();

		localStorage.setItem("txtphone",txtphone);

	});

	

	

	// Get Subjects and Programs Value

	$('.home-page .default-list li a').click(function(){

		var ddata = $(this).attr('data');

		localStorage.setItem("subjects", ddata);

	});

	$('.step-2-list-block .default-list li a').click(function(){

		var pdata = $(this).attr('data');

		localStorage.setItem("programs", pdata);

	});

	

	/*if(localStorage.getItem('specialization_id') == '95'){

			 devNext('DivStep31', 'DivStep32');

			  $("#w3s").attr("href", "https://www.w3schools.com/jquery/");

		}*/

	

});

//var state_options = '<option value="">State*</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">District Of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option>';