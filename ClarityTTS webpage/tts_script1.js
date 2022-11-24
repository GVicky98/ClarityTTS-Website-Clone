function planSelection()
{
    var c = document.getElementsByName("subs");
    var ls1 = document.getElementById("l1");
    var ls2 = document.getElementById("l2");
    var ls3 = document.getElementById("l3");
    var rs1 = document.getElementById("r1");
    var right = document.getElementById("right");
    var right1 = document.getElementById("right1");
    if(c[0].checked == true)
    {
        ls1.innerText = "STARTER";
        ls2.innerText = "Plan Suitable For 1 - 5";
        ls3.innerText = "Everything From ClaritySuite +";
        rs1.innerText = "70";
    }
    if(c[1].checked == true)
    {
        ls1.innerText = "GROWTH";
        ls2.innerText = "Plan Suitable For 6 - 50";
        ls3.innerText = "Everything From Starter +";
        rs1.innerText = "60";

    }
    if(c[2].checked == true)
    {
        ls1.innerText = "PREMIUM";
        ls2.innerText = "Plan Suitable For 51 - 100";
        ls3.innerText = "Everything From Growth +";
        rs1.innerText = "50";

    }
    if(c[3].checked == true)
    {
        ls1.innerText = "UNICORN";
        ls2.innerText = "";
        ls3.innerText = "Everything From Premium +";
        right.style.display = "none";
        right1.style.display = "block";
    }
    else
    {
        right.style.display = "block";
        right1.style.display = "none";
    }
}
