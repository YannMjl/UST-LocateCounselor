// Do some stuff when page hmtl page is launched
$(document).ready( function() {

    function showAvaialableVisitDays() {

        var groupVisit_SalesForce_API = 'https://stthomas.force.com/applicantportal/services/apexrest/usteventfeed?eventId=a3s0a000000Auzz&feedType=eventList&viewStart=2019-6-3+00:00:00&viewEnd=2020-5-29+24:59:59';

        var counselor_SalesForce_API;

        $.ajax({

            type: "GET",

            url: groupVisit_SalesForce_API,

            dataType: "jsonP",

            error: function (e) {
                alert("An error occurred while processing API calls");
                console.log("API call Failed: ", e);
            },

            success: function (data) {

                console.log('data: ', data);


            } // end:  Ajax success API call

        }); // end: of Ajax call

    } // end: showEvent function

}); // end: document.ready()

$(document).on('change', '#userType', function () {
    console.log($(this).val()); // the selected options’s value

    //it gets you the value of selected option 
    var value = $(this).val();

    if (value == 'High School Student') {

         $('#transferFrom').hide();
        $('#ShowSelectState').show();


    } else if (value == 'Transfer Student') {

        $('#ShowSelectState').hide();
        $('#transferFrom').show();

    } else if (value == 'US Veteran') {

        $('#ShowSelectState').hide();
        $('#transferFrom').hide();
        console.log('Selected value: ', value);

    } else if (value == 'International Student') {

        console.log('Selected value: ', value);
        $('#ShowSelectState').hide();
        $('#transferFrom').hide();

    } else {

        console.log('Selected value: ', value);
        $('#ShowSelectState').hide();
        $('#transferFrom').hide();
    }

    // if you want to do stuff based on the OPTION element:
    var opt = $(this).find('option:selected')[0];
    // use switch or if/else etc.

});
