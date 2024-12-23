document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('join-form');

  // Анимация при загрузке страницы
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 500);

  // Анимация при клике на ссылки в навигации
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Обработка формы
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Вы успешно присоединились к BASΞ Ecampus!');
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reviews = document.querySelectorAll('.review');
  const kitten = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

  // Задержка появления блоков при скролле
  const handleScroll = () => {
    reviews.forEach((review, index) => {
      const rect = review.getBoundingClientRect();
      const delay = review.dataset.delay || index;
      if (rect.top < window.innerHeight && rect.bottom > 0 && !review.classList.contains('visible')) {
        setTimeout(() => {
          review.style.transform = 'translateX(0)';
          review.style.opacity = '1';
          review.classList.add('visible');

          // Проиграть звук при появлении первого блока
          if (index === 0) {
            kitten.play();
          }
        }, delay * 500);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Первоначальная проверка

  // Анимация текста
  setInterval(() => {
    title.textContent = phrases[index];
    index = (index + 1) % phrases.length;
  }, 4000);

  // Появление отзывов при прокрутке
  const handleScroll = () => {
    reviews.forEach((review, i) => {
      const rect = review.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !review.classList.contains('visible')) {
        setTimeout(() => {
          review.style.transform = 'translateX(0)';
          review.style.opacity = '1';
          review.classList.add('visible');
        }, i * 300); // Задержка появления
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Первоначальная проверка
});

document.addEventListener('DOMContentLoaded', () => {
  const formSection = document.querySelector('#application');
  const blurElements = document.querySelectorAll('header, #hero, footer');

// Открытие формы
  window.openApplicationForm = (event) => {
    event.preventDefault();
    const formSection = document.querySelector('#application');
    const blurElements = document.querySelectorAll('header, #hero, #reviews, footer');
    formSection.style.display = 'block';
    setTimeout(() => {
      formSection.style.opacity = '1';
    }, 100);
    blurElements.forEach(el => el.classList.add('blurred'));
  };

// Закрытие формы
  window.closeApplicationForm = () => {
    const formSection = document.querySelector('#application');
    const blurElements = document.querySelectorAll('header, #hero, #reviews, footer');
    formSection.style.opacity = '0';
    setTimeout(() => {
      formSection.style.display = 'none';
    }, 300);
    blurElements.forEach(el => el.classList.remove('blurred'));
  };


  // Плавный скроллинг
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.application-section form');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем отправку формы

    // Показываем фидбек
    feedback.classList.remove('hidden');
    feedback.classList.add('visible');

    // Скрываем фидбек через 2 секунды
    setTimeout(() => {
      feedback.classList.remove('visible');
      feedback.classList.add('hidden');
    }, 2000);

    // Очистка формы
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const gifOverlay = document.querySelector('.gif-overlay');

  if (gifOverlay) {
    setTimeout(() => {
      gifOverlay.classList.add('hidden'); // Добавляем класс для исчезновения
      setTimeout(() => {
        gifOverlay.remove(); // Полностью удаляем элемент из DOM через 5 секунд
      }, 5000); // Убираем элемент после завершения анимации
    }, 2000); // Таймер на 5 секунд до начала исчезновения
  }
});
