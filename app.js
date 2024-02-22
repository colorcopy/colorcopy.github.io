 function generateRandomColors() {

      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      const colorContainer = document.getElementById('colorContainer');

      colorContainer.innerHTML = '';

      for (let i = 0; i < 45; i++) {
        const color = getRandomColor();

        const colorBox = document.createElement('div');
        colorBox.className = 'colorBox';
        colorBox.style.backgroundColor = color;

        const colorCode = document.createElement('div');
        colorCode.className = 'colorCode';
        colorCode.textContent = color;

        colorContainer.appendChild(colorBox);
        
        colorBox.addEventListener('click', () => copyToClipboard(color));
      }
    }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);

      const copiedMessage = document.getElementById('copiedMessage');
      copiedMessage.innerHTML = `${text}<br/>copied to clipboard`;
      copiedMessage.style.display = 'block';

      setTimeout(() => {
        copiedMessage.style.display = 'none';
      }, 3000);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  }


    document.onload = generateRandomColors();