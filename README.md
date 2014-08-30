Custom Select
=============
*Plugin para criação de elementos 'selects' personalizados*

### Como utilizar
Adicionar o arquivo `custom-select.js` na página.
```html
<script src="js/custom-select.js"></script>
```
Montar a estrutura do select
```html
<div class="container">
    <span value="" class="select">Selecione um item</span>
    <ul class="list">        
        <li value="1" class="list-item">Item 1</li>
        <li value="2" class="list-item">Item 2</li>
        <li value="3" class="list-item">Item 3</li>
        <li value="4" class="list-item">Item 4</li>    
    </ul>            
</div>
```
Buscar os elementos que irão compor o select e passar através de um Objeto nas configurações.
```html
// Buscando os elementos do select
var itemsContainer = document.querySelector("ul");
var items = document.querySelectorAll("li");
var select = document.querySelector("span");
// Instânciando o objeto
var customSelect = new CustomSelect({
    itemsContainer : itemsContainer, 
    items : items,
    select : select
});
```

