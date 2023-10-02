function App() {
    let h5 = document.querySelector('.faq-main');
    let h7 = document.querySelector('.faq-main2')
    let h8 = document.querySelector('.faq-main3');
    let h9 = document.querySelector('.faq-main4')
    let h10 = document.querySelector('.faq-main5')
    let span = document.querySelector('.faq-span');
    let span_2 = document.querySelector('.faq-span2');
    let span_3 = document.querySelector('.faq-span3');
    let span_4 = document.querySelector('.faq-span4');
    let span_5 = document.querySelector('.faq-span5');
    let isSpanVisible = false; // Dodana zmienna śledząca stan widoczności

    h5.addEventListener("click", function() {
        if (isSpanVisible) {
            span.style.display = "none";
            isSpanVisible = false;
        } else {
            span.style.display = "flex";
            isSpanVisible = true;
        }
    });

    h7.addEventListener("click", function() {
        if (isSpanVisible) {
            span_2.style.display = "none";
            isSpanVisible = false;
        } else {
            span_2.style.display = "flex";
            isSpanVisible = true;
        }
    });

    h8.addEventListener("click", function() {
        if (isSpanVisible) {
            span_3.style.display = "none";
            isSpanVisible = false;
        } else {
            span_3.style.display = "flex";
            isSpanVisible = true;
        }
    });

    h9.addEventListener("click", function() {
        if (isSpanVisible) {
            span_4.style.display = "none";
            isSpanVisible = false;
        } else {
            span_4.style.display = "flex";
            isSpanVisible = true;
        }
    });
    
    h10.addEventListener("click", function() {
        if (isSpanVisible) {
            span_5.style.display = "none";
            isSpanVisible = false;
        } else {
            span_5.style.display = "flex";
            isSpanVisible = true;
        }
    });
}


App()