function blockZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}
window.addEventListener('load', function(){
  document.querySelector('#preloader').style.display = 'block';
  setTimeout(function() {
    document.querySelector('#preloader').classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(function() {
      document.querySelector('#preloader').style.opacity = '0';
      setTimeout(function() {
        document.querySelector('#preloader').style.display = 'none';
        document.querySelector('#main-content').classList.add('animate__animated', 'animate__fadeIn');
        document.querySelector('#main-content').style.display = 'block';
        setTimeout(function() {
          document.querySelector('#footer').style.display = 'block';
        }, 500);
        setTimeout(function() {
          document.getElementById('fotbal-button').style.display = 'block';
        }, 50);
        setTimeout(function() {
          document.getElementById('virtuale-button').style.display = 'block';
        }, 1050);
      }, 500);
    }, 1000);
  }, 2000);
});


function redirectToPage(pageUrl) {
  setTimeout(function() {
    window.location.href = pageUrl;
  }, 400);
}



function createBubble() {
  const bubbleParent = document.createElement('div');
  bubbleParent.id = 'bubble';
  bubbleParent.classList.add('bubble-parent');

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const bubbleImg = document.createElement('img');
  bubbleImg.id = 'bubbleImg';
  bubbleImg.src = 'img/err.svg';
  bubbleImg.alt = 'avertizare icon';

  const bubbleTxt = document.createElement('div');
  bubbleTxt.id = 'bubbleTxt';
  bubbleTxt.classList.add('bubble__txt');
  bubbleTxt.textContent = 'eroare nedeterminata.contactati suportul';

  bubble.appendChild(bubbleImg);
  bubble.appendChild(bubbleTxt);
  bubbleParent.appendChild(bubble);

  document.body.appendChild(bubbleParent);

  return bubbleParent;
}


let animationTimeout;

function animateBubbleBtn(text, imgSrc, bgColor, container) {
  const oldBubbleBtn = container.querySelector('.bubble-btn');
  if (oldBubbleBtn) {
    oldBubbleBtn.classList.remove(
      'animate__animated',
      'animate__fadeOut',
      'animate__bounceIn'
    );
    oldBubbleBtn.remove();
    clearTimeout(animationTimeout);
  }

  const bubbleBtn = createBubble();
  const bubbleTxt = bubbleBtn.querySelector('#bubbleTxt');
  const bubbleImg = bubbleBtn.querySelector('#bubbleImg');
  const bubble = bubbleBtn.querySelector('.bubble');

  bubbleTxt.textContent = text;
  bubbleImg.src = imgSrc;
  bubble.style.backgroundColor = bgColor;

  bubbleBtn.classList.add('animate__animated', 'animate__bounceIn', 'bubble-btn');
  container.appendChild(bubbleBtn);

  animationTimeout = setTimeout(function () {
    bubbleBtn.classList.add('animate__animated', 'animate__fadeOut');
    bubbleBtn.classList.remove(
      'animate__animated',
      'animate__fadeOut',
      'animate__bounceIn'
    );

    setTimeout(function () {
      bubbleBtn.remove();
    }, 1000);
  }, 2000);
}



const bubbleContainer = document.getElementById('bubbleContainer');