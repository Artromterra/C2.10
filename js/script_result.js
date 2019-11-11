const progress_dog = document.getElementById('progress_dog');
const progress_cat = document.getElementById('progress_cat');
const progress_parrot = document.getElementById('progress_parrot');


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
});

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const ES = new EventSource(url, header);

ES.onerror = error => {
    ES.readyState ? progress.textContent = "Some error" : null;
};
// считываем данные с сервера, преобразовываем в JSON и приводим к %
ES.onmessage = message => {   
	parse_data = JSON.parse(message.data)
	let sum = parse_data['cats'] + parse_data['dogs'] + parse_data['parrots'];
	let data_dog = Math.floor(parse_data['dogs'] / sum * 100);
	let data_cat = Math.floor(parse_data['cats'] / sum * 100);
	let data_parrot = Math.floor(parse_data['parrots'] / sum * 100);
	// вносим данные в прогресс бары
    progress_dog.style.cssText = `width: ${data_dog}%;`
    progress_dog.textContent = `${data_dog}%  ${'(' + parse_data['dogs']+')'}`
    progress_cat.style.cssText = `width: ${data_cat}%;`
    progress_cat.textContent = `${data_cat}% ${' ('+ parse_data['cats'] +')'}`
    progress_parrot.style.cssText = `width: ${data_parrot}%;`
    progress_parrot.textContent = `${data_parrot}% ${'('+ parse_data['parrots']+ ')'}`
};
