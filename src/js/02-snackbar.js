document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  
  const delay = Number(event.target.delay.value);
  const state = event.target.state.value;

 
  const createPromise = (delay, state) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  };

  
  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});