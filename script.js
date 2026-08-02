/* ==========================
   GÉNÉRAL
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:linear-gradient(#8fd3ff,#eaf8ff);
    color:#222;
}

.container{
    width:95%;
    max-width:900px;
    margin:30px auto;
    background:#fff;
    border-radius:20px;
    padding:30px;
    box-shadow:0 10px 25px rgba(0,0,0,.20);
}

header{
    text-align:center;
    margin-bottom:30px;
}

header h1{
    font-size:42px;
    color:#0b4f8a;
}

header h2{
    font-size:30px;
    margin:10px 0;
}

header p{
    color:#666;
}

/* ==========================
   COMPTE À REBOURS
========================== */

#countdown{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
    margin:30px 0;
}

.count-box{
    min-width:90px;
    padding:15px;
    background:#fff;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
}

.count-box span{
    display:block;
    font-size:30px;
    font-weight:bold;
    color:#d81b60;
}

.count-box small{
    color:#666;
}

/* ==========================
   VOYAGE
========================== */

.voyage{
    margin:50px 0;
}

.rails{
    position:relative;
    width:100%;
    height:220px;
}

.rails::before{
    content:"";
    position:absolute;
    left:0;
    right:0;
    top:110px;
    height:18px;
    background:url("images/rails.jpg") repeat-x center;
    background-size:contain;
}

.gare{
    position:absolute;
    left:0;
    top:0;
    width:170px;
    text-align:center;
}

.gare img{
    width:170px;
}

.gare p{
    margin-top:8px;
    font-weight:bold;
}

#train{
    position:absolute;
    top:40px;
    left:5%;
    z-index:10;
    transition:left .8s ease;
}

#train img{
    width:170px;
}

.destination{
    position:absolute;
    right:0;
    top:0;
    width:170px;
    text-align:center;
}

.destination img{
    width:170px;
}

.destination p{
    margin-top:8px;
    font-weight:bold;
}
/* ==========================
   VERSION MOBILE
========================== */

@media (max-width:768px){

    .container{
        padding:20px;
    }

    header h1{
        font-size:30px;
    }

    header h2{
        font-size:22px;
    }

    header p{
        font-size:16px;
    }

    .count-box{
        min-width:70px;
        padding:10px;
    }

    .count-box span{
        font-size:24px;
    }

    .count-box small{
        font-size:12px;
    }

    .rails{
        height:180px;
    }

    .rails::before{
        top:90px;
    }

    .gare{
        width:120px;
    }

    .gare img{
        width:120px;
    }

    .gare p{
        font-size:14px;
    }

    #train{
        top:35px;
    }

    #train img{
        width:120px;
    }

    .destination{
        width:120px;
    }

    .destination img{
        width:120px;
    }

    .destination p{
        font-size:14px;
    }

    #surpriseBtn img,
    #enveloppe{
        width:170px;
    }

    #surprise h2{
        font-size:28px;
    }

    #surprise p{
        font-size:18px;
    }

    .mission h2{
        font-size:22px;
    }

    .mission p{
        font-size:16px;
    }

    .bus{
        width:35px;
    }

}
