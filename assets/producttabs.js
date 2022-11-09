function openTab(evt, productTabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("product-single__tabs");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("product-single__tabs-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(productTabs).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("product-single__tabs-button--active").click();