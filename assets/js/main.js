const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
const subbasic = document.getElementById("subbasic");
const gstprice1 = document.getElementById("gst-price1");
const gstprice2 = document.getElementById("gst-price2");
const gstprice3 = document.getElementById("gst-price3");
const gstprice4 = document.getElementById("gst-price4");

checkbox.addEventListener("click", () => {
    basic.textContent = basic.textContent === "₹109" ? "₹169" : "₹109";
    professional.textContent = professional.textContent === "₹436" ? "₹676 " : "₹436";
    master.textContent = master.textContent === "₹654" ? "₹1014" : "₹654";
    subbasic.textContent = subbasic.textContent === "₹872" ? "₹1352" : "₹872";
    gstprice1.textContent = gstprice1.textContent === "+ GST per 6 months" ? "+ GST per 12 months" : "+ GST per 6 months";
    gstprice2.textContent = gstprice2.textContent === "+ GST per 6 months" ? "+ GST per 12 months" : "+ GST per 6 months";
    gstprice3.textContent = gstprice3.textContent === "+ GST per 6 months" ? "+ GST per 12 months" : "+ GST per 6 months";
    gstprice4.textContent = gstprice4.textContent === "+ GST per 6 months" ? "+ GST per 12 months" : "+ GST per 6 months";

});