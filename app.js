class Book
{
    /**
     * nop: number of pages
     */
    constructor(id, name, year, writer, nop) {
        this.id = id
        this.name = name
        this.year = year
        this.writer = writer
        this.nop = nop
    }

    getDesc() {
        console.log(this.name + ' is a book by ' + this.writer)
    }

    createTableRow() 
    {
        let tableRow = $('<tr></tr>')

        let tdId = `<td>${this.id}</td>`
        let tdName = `<td>${this.name}</td>`
        let tdWriter = `<td>${this.writer}</td>`
        let tdYear = `<td>${this.year}</td>`
        let tdNop = `<td>${this.nop}</td>`

        tableRow.append(tdId)
        tableRow.append(tdName)
        tableRow.append(tdWriter)
        tableRow.append(tdYear)
        tableRow.append(tdNop)

        return tableRow
    }
}

const books = []
let id = 0

$(function() {
    $('#submit').on('click', function() {
    const name = $('#name').val()
    const year = $('#year').val()
    const writer = $('#writer').val()
    const nop = $('#nop').val()
    
    const book = new Book(++id, name, year, writer, nop)
    
    $('.table-body').append(book.createTableRow())
    
})
})