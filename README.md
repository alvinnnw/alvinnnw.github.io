## h2期中作業

----
##### h5黃哲全 B05601029
----
#### h4Reference: Youtube Drew Ryan, Bootstrap Tutorial.
###### h6https://www.youtube.com/watch?v=V_lAhqLXT9A
----
#### h4To make the navbar list adapt as I scroll down the page.
```
body data-spy="scroll" data-target="#navbarResponsive"
```

#### h4Creating Nav Bar

```
<div id="home">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            #Create the 3 lines toggler icon when the screen is sized down.
                    <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                #Create Navbar listed items
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutme">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#story">Story</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#academic">Academic Career</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
```
#### h4Create Button which linked to Story part of the page.
```

<a class="btn btn-outline-light btn-lg" href="#story">Click Here</a> 
```
#### h4Carousel For the Story Part
```

<div id="story" class="offset">
        <div class="row">
            <div class="col-12">
                <h3 class="heading">Story</h3>
                <div class="heading-underline"></div>
                <div class="padding">
                    <div class="col-12" style='display:flex; justify-content:center;'>
                        <div id="demo" class="carousel slide" data-ride="carousel" data-interval="7000">


                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                                <li data-target="#demo" data-slide-to="3"></li>
                            </ul>


                            <div class="carousel-inner" style=''>
                                <div class="carousel-item active">
                                    <img src="img/baby.jpg" alt="baby">
                                    <div class="carousel-caption">
                                        <h3>0-10 Years Old</h3>
                                        <p class="lead">Born in Medan, Indonesia. Since early times, I have always consider my family as super-strict. Very ungrateful of the family I was born within. There are literally no freedom, controlled from the smallest to biggest
                                            thing. However, the presence of Grandparents helps me to endure this period and makes me retain faith that human are inherently good.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="img/school.jpg" alt="school">
                                    <div class="carousel-caption">
                                        <h3>10-17 Years Old</h3>
                                        <p class="lead">This is when I enter High School, I started to learn how to live and thrive in this society. Started to engage in hobby such as Football. Started to think big and dream. Though I am an introvert person before, I
                                            make a lot of friends here. Football makes me more competent not only in sports but also in other aspects of life. It makes me feel more confident by looking athletic. </p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="img/family.jpg" alt="family">
                                    <div class="carousel-caption">
                                        <h3>17-20 Years Old</h3>
                                        <p class="lead">It is in this time that I start my university life abroad and live independently from my parents. I am now more mature. Looking back at past life, I realized how important and good my family is. Their strictness
                                            makes more careful and able to stand up for myself, their thriftiness makes me able to live happily and grateful for what I have. This is when I want to hug my parents again and really thank them.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="img/thinking.jpg" alt="future">
                                    <div class="carousel-caption">
                                        <h3>Future and Dreams</h3>
                                        <p class="lead">I hope in the future I will be able to become leading research scientist in Agronomy, because I know that by doing so I will be able to save millions of people from starvation especially in Indonesia. I want to
                                            make my parents and ancestors proud as well.</p>
                                    </div>
                                </div>
                            </div>


                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
    </div>
``` 
#### h4Importing Font "Lato"
```

@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
body {
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    color: #505962
}
