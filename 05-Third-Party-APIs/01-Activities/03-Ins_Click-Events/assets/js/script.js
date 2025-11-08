// 03-Ins — jQuery Click Events (Instructor)
// Key ideas: .on('click', handler), .toggleClass(), .text()

$(function () {
  const $alertBtn = $('#alert-btn');
  const $themeBtn = $('#theme-btn');
  const $lotteryBtn = $('#lottery-btn');
  const $lotteryNumber = $('#lottery-number');
  const $refreshBtn = $('#refresh-btn');
  const $body = $('body');

  // Alert
  $alertBtn.on('click', function () {
    alert('Hello World');
  });

  // Theme toggle: swap .theme-dark/.theme-light on <body>
  $themeBtn.on('click', function () {
    $body.toggleClass('theme-light theme-dark');
  });

  // Lottery: generate an 8-digit number (10000000–99999999)
  $lotteryBtn.on('click', function () {
    const random = Math.floor(Math.random() * 90000000) + 10000000;
    $lotteryNumber.text(random);
    // (Optional) brief visual feedback
    $lotteryNumber.addClass('flash');
    setTimeout(() => $lotteryNumber.removeClass('flash'), 250);
  });

  // Refresh
  $refreshBtn.on('click', function () {
    location.reload();
  });
});
