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

  for (let i = 0; i < 99; i++) {
    const color = getRandomColor();

    const colorBox = document.createElement('div');
    colorBox.className = 'colorBox';
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = `<span class="hex">${color}<br/></span>`;

    const copiedMessage = document.createElement('div'); 
    copiedMessage.className = 'copiedMessage';
    copiedMessage.style.backgroundColor = color;
    colorBox.appendChild(copiedMessage);
    
    colorContainer.appendChild(colorBox);

    colorBox.addEventListener('click', () => copyToClipboard(color, copiedMessage));
  }
}

async function copyToClipboard(text, copiedMessage) {
  try {
    await navigator.clipboard.writeText(text);

    copiedMessage.innerHTML = `<div class="copyMessageText">copied<br/> <span class="hexTextCopied">${text}</span>to clipboard</div>`;
    copiedMessage.style.display = 'block';

    setTimeout(() => {
      copiedMessage.style.display = 'none';
    }, 2000);
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
}

document.onload = generateRandomColors();
