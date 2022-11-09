function turnOnTelephoneMessage() {
    $('#header__telephone-number').show();
    if ($(".stuck")[0]) {
        console.log('menu stuck');
    } else {
        console.log('menu not stuck');
        $('#shopify-section-header').css('top', $('.header-wrapper').height() + 31);
    }

    setTimeout(function () {
        Waypoint.refreshAll();
        console.log('waypoints refreshed');
    }, 1000);
}

function hideTelephoneMessage() {
    $('#header__telephone-number').hide();
}

// fired off from waypoints function above
function phoneMessageDay() {

    var isBankHoliday = 0;

    var t = new Date();
    var tYear = t.getFullYear();
    var tMonth = t.getMonth();
    var tDate = t.getDate();
    var tDay = t.getDay();
    var tHour = t.getHours();

    //console.log ("Todays date: " + t);
    //console.log ("Todays year: " + tYear);  
    //console.log ("Todays month: " + tMonth);
    //console.log ("Todays date: " + tDate);
    //console.log ("Todays day: " + tDay);
    //console.log ("Todays hour: " + tHour);

    var bankHoliday = ["2020,12,25", "2020,12,28", "2021,1,1", "2021,4,2", "2021,4,5", "2021,5,3", "2021,5,31", "2021,12,27", "2021,12,28"];
    var bhArrayLength = bankHoliday.length;

    for (var i = 0; i < bhArrayLength; i++) {
        var bh = new Date(bankHoliday[i]);
        var bhYear = bh.getFullYear();
        var bhMonth = bh.getMonth();
        var bhDate = bh.getDate();

        //console.log ("bank holiday date: " + bh);
        //console.log ("bank holiday year: " + bhYear);
        //console.log ("bank holiday month: " + bhMonth);
        //console.log ("bank holiday day: " + bhDate);

        if (bhYear == tYear && bhMonth == tMonth && bhDate == tDate) {
            console.log('its a bank holiday');
            var isBankHoliday = 1;
        }
    }
    if (isBankHoliday == 0) {
        if (tDay >= 1 && tDay <= 5) {
            // console.log ('its monday to friday');
            if (tHour >= 9 && tHour <= 13) {
                turnOnTelephoneMessage();
            }
        }
    }
};