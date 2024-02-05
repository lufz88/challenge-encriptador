const textInput = document.querySelector('#text-input');
const encryptButton = document.querySelector('#encriptar');
const decryptButton = document.querySelector('#desencriptar');
const resultContainer = document.querySelector('.result-container');

const code = {
	e: 'enter',
	i: 'imes',
	o: 'ober',
	a: 'ai',
	u: 'ufat',
};

function encrypt() {
	let text = textInput.value.trim();
	for (const key in code) {
		const newText = text.replaceAll(key, code[key]);
		text = newText;
	}
	showMessage(text);

	return text;
}

function decrypt() {
	let text = textInput.value.trim();
	for (const key in code) {
		const newText = text.replaceAll(code[key], key);
		text = newText;
	}
	showMessage(text);
	return text;
}

function showMessage(text) {
	resultContainer.innerHTML = '';
	const copyButton = document.createElement('button');
	copyButton.innerText = 'Copiar';
	copyButton.id = 'copy';
	copyButton.addEventListener('click', () => {
		navigator.clipboard.writeText(text);
	});
	const resultParagraph = document.createElement('p');
	resultParagraph.classList.add('result');
	resultParagraph.innerText = text;
	resultContainer.appendChild(resultParagraph);
	resultContainer.appendChild(copyButton);
}

encryptButton.addEventListener('click', encrypt);
decryptButton.addEventListener('click', decrypt);
