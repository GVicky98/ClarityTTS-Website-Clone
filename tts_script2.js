function validateForm()
{
    var b1 = document.getElementById("bx1");
    var e1 = document.getElementById("er1");    
    var b2 = document.getElementById("bx2");
    var e2 = document.getElementById("er2");
    var b3 = document.getElementById("bx3");
    var e3 = document.getElementById("er3");
    var b4 = document.getElementById("bx4");
    var e4 = document.getElementById("er4");
    var b5 = document.getElementById("bx5");
    var e5 = document.getElementById("er5");
    var b6 = document.getElementById("bx6");
    var e6 = document.getElementById("er6");
    var b7 = document.getElementById("bx7");
    var e7 = document.getElementById("er7");
    var b8 = document.getElementById("bx8");
    var e8 = document.getElementById("er8");
    var b9 = document.getElementById("bx9");
    var e9 = document.getElementById("er9");
    var m1 = /^\D{2,40}$/;
    var m2 = /^\D{1,40}$/;
    var m3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var m4 = /^\w{4,50}$/;
    var m6 = /^\d*$/;
    var m7 = /^\d{8,15}$/;
    var m8 = /^\d$/;
    var m9 = /^\w{4,50}/;

    
    //first name
    if(b1.value == "")
    {
        e1.style.display = "block";
        e1.innerText = "This field is required";
        b1.focus();
        return false;
    }
    else if(m6.test(b1.value) == true)
    {
        e1.style.display = "block";
        e1.innerText = "Please Enter valid First Name";
        b1.focus();
        return false;
    }
    else if(m1.test(b1.value) == false)
    {
        e1.style.display = "block";
        e1.innerText = "First Name must be 2 to 40 letters";
        b1.focus();
        return false;
    }
    else
    {
        e1.style.display = "none";
    }

    //last name
    if(b2.value == "")
    {
        e2.style.display = "block";
        e2.innerText = "This field is required";
        b2.focus();
        return false;
    }
    else if(m6.test(b2.value) == true)
    {
        e2.style.display = "block";
        e2.innerText = "Please Enter valid Second Name";
        b2.focus();
        return false;
    }
    else if(m2.test(b2.value) == false)
    {
        e2.style.display = "block";
        e2.innerText = "Please Enter valid Second Name";
        b2.focus();
        return false;
    }
    else
    {
        e2.style.display = "none";
    }

    //email
    if(b3.value == "")
    {
        e3.style.display = "block";
        e3.innerText = "This field is required";
        b3.focus();
        return false;
    }
    else if(m3.test(b3.value) == false)
    {
        e3.style.display = "block";
        e3.innerText = "Please Enter valid email";
        b3.focus();
        return false;
    }
    else
    {
        e3.style.display = "none";
    }

    //business name
    if(b4.value == "")
    {
        e4.style.display = "block";
        e4.innerText = "This field is required";
        b4.focus();
        return false;
    }
    else if(m4.test(b4.value) == false)
    {
        e4.style.display = "block";
        e4.innerText = "Business name must be of 4 to 50 characters";
        b4.focus();
        return false;
    }
    else
    {
        e3.style.display = "none";
    }

    //country name
    if(b5.value == "select")
    {
        e5.style.display = "block";
        e5.innerText = "This field is required";
        return false;
    }
    else
    {
        e5.style.display = "none";
    }

    //country code
    if(b6.value == "select")
    {
        e6.style.display = "block";
        e6.innerText = "This field is required";
        return false;
    }
    else
    {
        e6.style.display = "none";
    }

    //phone no
    if(b7.value == "")
    {
        e7.style.display = "block";
        e7.innerText = "This field is required";
        b7.focus();
        return false;
    }
    else if(m6.test(b7.value) == false)
    {
        e7.style.display = "block";
        e7.innerText = "Enter valid phone number";
        b7.focus();
        return false;
    }
    else if(m7.test(b7.value) == false)
    {
        e7.style.display = "block";
        e7.innerText = "This field must be more than 8 and less than 15 characters long";
        b7.focus();
        return false;
    }
    else
    {
        e7.style.display = "none";
    }

    //agents count
    if(b8.value == "")
    {
        e8.style.display = "block";
        e8.innerText = "This field is required";
        b8.focus();
        return false;
    }
    else if(m8.test(b8.value) == false)
    {
        e8.style.display = "block";
        e8.innerText = "Please enter valid agent number";
        b8.focus();
        return false;
    }
    else
    {
        e8.style.display = "none";
    }

    //preferred url
    if(b9.value == "")
    {
        e9.style.display = "block";
        e9.innerText = "This field is required";
        b9.focus();
        return false;
    }
    else if((/^\d/).test(b9.value) == true)
    {
        e9.style.display = "block";
        e9.innerText = "Please Enter Valid Domain Name";
        b9.focus();
        return false;
    }
    else if(m9.test(b9.value) == false)
    {
        e9.style.display = "block";
        e9.innerText = "This field must be more than 4 and less than 50 characters long";
        b9.focus();
        return false;
    }
    else
    {
        e9.style.display = "none";
    }

}