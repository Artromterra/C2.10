// создаем свои методы
function jQuery (selector, context = document){
  this.elements = Array.from(context.querySelectorAll(selector));
  return this;
}

jQuery.prototype.each = function (fn){
  this.elements.forEach((element, index) => fn.call(element, element, index));
  return this;
}

jQuery.prototype.hide = function(){
  this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.html = function(html) {
  this.each(element => element.innerHTML = html);
  return this;
}
const $ = (e) => new jQuery(e);

$('.butn_res').hide();

// функция передачи данных на сервер, в качестве аргумента - id кнопки из html
function voteSend(name) {
	let xhr = new XMLHttpRequest();
	let urls = new URL('https://sf-pyw.mosyag.in/sse/vote/' + name);
	xhr.open('POST', urls);
	xhr.send();
};
// функция убирает часть контента и добавляет надпись
function listener() {
	$('.vote_btn').hide();
	$('.header').hide();
	$('.butn_res').show();
	$('.header_2').html('Спасибо за голосование!');
};
// обработчик взаимодействия с клиентом
dogs.onclick = () => {
	voteSend("dogs");
	listener();
};
cats.onclick = () => { 
	voteSend("cats");
	listener();
};
parrots.onclick = () => {
	voteSend("parrots");
	listener();
};



