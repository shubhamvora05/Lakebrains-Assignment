function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const scrollOffset = 100;
 
  const scrollElement = document.querySelector(".js-scroll");
   
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };
   
  const displayScrollElement = () => {
    scrollElement.classList.add('scrolled');
  }
   
  const hideScrollElement = () => {
    scrollElement.classList.remove('scrolled');
  }
   
  const handleScrollAnimation = () => {
    if (elementInView(scrollElement, scrollOffset)) {
        displayScrollElement();
    } else {
      hideScrollElement();
    }
  }
   
  const scrollOffset1 = 100;
 
  const scrollElement1 = document.getElementById("js-scr");
   
  const elementInView1 = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
   
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };
   
  const displayScrollElement1 = () => {
    scrollElement1.classList.add('scrolled1');
  }
   
  const hideScrollElement1 = () => {
    scrollElement1.classList.remove('scrolled1');
  }
   
  const handleScrollAnimation1 = () => {
    if (elementInView(scrollElement1, scrollOffset1)) {
        displayScrollElement1();
    } else {
      hideScrollElement1();
    }
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
    handleScrollAnimation1();
  })