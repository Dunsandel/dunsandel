NextAniversary = 500
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]): '';
    return str;
}

function SetTime(){
    for(i=0; i<4;i++){
    var countDownDate = new Date("Nov 26, "+(1872+NextAniversary)+" 10:00:00").getTime();

    // Run myfunc every second
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var years = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((timeleft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //document.getElementById("countdown").innerHTML = " — Dunsandel Domain — "+years+" years, "+days+" days, "+hours+" hours"
    document.getElementById("Aniversarys").innerHTML += ' <hr>    <strong style="font-family: Arial, Helvetica, sans-serif;">Dunsandel '+NextAniversary+' Year Aniversary</strong><span id="countdown"> — Dunsandel Domain — '+years+' years, '+days+' days, '+hours+' hours</span><p>The Dunsandel '+NextAniversary+' Year Anniversary is a unique opportunity to celebrate the resilience, community spirit, and enduring legacy of this remarkable town. Come and be a part of history as we commemorate '+inWords(NextAniversary/100)+' centuries of progress, tradition, and the shared bonds that have made Dunsandel a place like no other.</p>'
    // Result is output to the specific element
    NextAniversary += 500
    }
}

