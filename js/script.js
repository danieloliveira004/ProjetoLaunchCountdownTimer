const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const darken = '<div class="darken"></div>';

// DATA DO ALMOÇO
const data = new Date('2023/03/27');


const interval = setInterval(() => {
  const now = new Date();
  const interval_final = data.getTime();
  const interval_now = now.getTime();
  const diferenca = interval_final - interval_now;
  
  // DAYS
  const days_ = diferenca / 86400000;

  // HOURS
  const diferenca_ = new Date(diferenca);
  const hours_ = diferenca_.getHours();
  const minutes_ = diferenca_.getMinutes();
  const seconds_ = diferenca_.getSeconds();
  
  days.innerHTML = days_.toFixed(0) + darken;
  hours.innerHTML = hours_.toFixed(0) + darken;
  minutes.innerHTML = minutes_.toFixed(0) + darken;
  seconds.innerHTML = seconds_.toFixed(0) + darken;

}, 1000);
