const quoteList = [
    {
        id: 1,
        'quoter': ' — Dalai Lama',
        'quote': '“The purpose of our lives is to be happy.”'
    },
    {
        id: 2,
        'quoter': '— John Lennon',
        'quote': '“Life is what happens when you are busy making other plans.”'
    },
    {
        id: 3,
        'quoter': ' — Stephen King',
        'quote': '“Get busy living or get busy dying.”'
    },
    {
        id: 4,
        'quoter': ' — Mae West',
        'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {
        id: 5,
        'quoter': '— Thomas A. Edison',
        'quote': '“Many of life is failures are people who did not realize how close they were to success when they gave up.”'
    },
    {
        id: 6,
        'quoter': '– Albert Einstein',
        'quote': '“If you want to live a happy life, tie it to a goal, not to people or things.”'
    },
    {
        id: 7,
        'quoter': '— Babe Ruth',
        'quote': '“Never let the fear of striking out keep you from playing the game.”'
    },
    {
        id: 8,
        'quoter': '— Steve Jobs',
        'quote': ' “Your time is limited, so do not waste it living someone elses life. Don ot be trapped by dogma – which is living with the results of other peoples thinking.”'
    },
    {
        id: 9,
        'quoter': '— Will Smith',
        'quote': '“Money and success don’t change people; they merely amplify what is already there.” '
    },
    {
        id: 10,
        'quoter': '— Seneca',
        'quote': '“Not how long, but how well you have lived is the main thing.” '
    },


]

let quote = document.getElementById('quote')
let quoter = document.getElementById('quoter')
let quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', () => {
    let randomize = Math.floor(Math.random() * 10)
    let quoteDisplay = quoteList[randomize]
    quote.innerHTML = quoteDisplay.quote;
    quoter.innerText = quoteDisplay.quoter;
})
