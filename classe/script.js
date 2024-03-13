function Book (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
// para instancionar essa classe, podemos usao código a seguir
var book = new Book('Estrutura de Dados', 406, '978-85-7522-553-0');
//Acessando suas prioridades
console.log(book.title); 
book.title = 'Estutura de Dados e algoritmos com JavaScript'
console.log(book.title);
console.log('Este livro possui: ' + book.pages + ' páginas.');
