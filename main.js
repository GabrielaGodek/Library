const btn = document.querySelector('.btn')
btn.addEventListener('click', function (event) {
    //zapobiegniecie wyslania formularza i przesladowania strony
    event.preventDefault()
    //pobranie wartosci z inputow
    let title = document.forms['library']['title'].value
    let author = document.forms['library']['author'].value
    let priority = parseInt(document.forms['library']['priority'].value)
    let category = document.forms['library']['category'].value

    //walicacja formularza
    if (title.length >= 1 && author.length >= 3) {
        //funkcja ktora tworzy element span oraz nadaje mu klase
        function createList(name) {
            let span = document.createElement('span')
            span.classList.add('add')
            span.textContent = name
            return span
        }

        const t = document.querySelector('.t')
        const a = document.querySelector('.a')
        const p = document.querySelector('.p')
        const c = document.querySelector('.c')

        //odwolanie do funkcji i przypisanie jej wartosci z pobranego inputu
        t.append(createList(title))
        a.append(createList(author))
        p.append(createList(priority))
        c.append(createList(category))

    } else {
        alert(`Pola muszą przyjmować odpowiednią ilość znaków. Tytuł przynajmniej 1, autor przynajmniej 3`);
        return false;
    }

    //zapisanie w localStorage
    const titleArr = []
    titleArr.push(title)
    const table = document.querySelector('.t')
    localStorage.setItem("libraryHistory", titleArr)
    if (localStorage.getItem("libraryHistory") != null) {
        table.value = localStorage.getItem("libraryHistory")
    }

    //Wyczyszczenie inputow
    const clearInputs = document.querySelectorAll('.clear')
    clearInputs.forEach((inp) => {
        inp.value = ''
    })
})

