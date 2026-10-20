//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('input', (e) => {
    if (!/^\d$/.test(e.target.value)) {
      e.target.value = '';
      return;
    }

    if (index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (code.value === '' && index > 0) {
        codes[index - 1].value = '';
        codes[index - 1].focus();
      } else {
        code.value = '';
      }
    }
  });
});