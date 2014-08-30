/**
 * Objeto para construção de 'combo box' ou 'select' personalizado
 * @param Object options
 */
var CustomSelect = function(options) {
	/**
     * Elemento para representação do select
     * @type Element
     */
    this.select = options.select;
	/**
	 * Itens do select
	 * @type Array
	 */
    this.items = options.items;    
    /**
     * Elemento pai dos itens
     * @type Element
     */
    this.itemsContainer = options.itemsContainer;
    /**
     * Iniciando
     */
    this.setEvents();    
};
/**
 * Inserindo os eventos
 */
CustomSelect.prototype.setEvents = function() {
	self = this;    	
    this.select.addEventListener("click", function() {
    	self.toggle(self.itemsContainer);
    });      
    this.refreshItemsEvent();        
}
/**
 * Atualiza os eventos para todos os itens do select 
 */
CustomSelect.prototype.refreshItemsEvent = function() {
	for (var i = 0; i < this.items.length; i++) {
        this.addSelectItemEvent(this.items[i]);
    }     
}
/**
 * Evento para seleção de determinado item
 * @param Element item
 */
CustomSelect.prototype.addSelectItemEvent = function(item) {
	self = this;
	item.addEventListener("click", function() {
		self.selectItem(this);
	});
}
/**
 * Seleciona determinado item
 * @param Element item
 */
CustomSelect.prototype.selectItem = function(item) {
    this.toggle(this.itemsContainer);
    this.select.innerHTML = item.innerHTML;
    this.select.setAttribute("value", item.getAttribute("value"));
}
/**
 * Controle da exibição dos itens     
 */
CustomSelect.prototype.toggle = function(item) {        
	display = item.style.display;
    if (display == "none" || display == "") {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }    
}    
/**
 * Adiciona um novo item
 */
CustomSelect.prototype.addItem = function(item) {	
	this.itemsContainer.appendChild(item);
	this.addSelectItemEvent(item);
}