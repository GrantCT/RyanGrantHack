
// // var contents = $('#contents');
// // var contentsParent = contents.parent();
// // console.log('hello', contentsParent);
// // contents.remove();
// // console.log('hello again,', contentsParent);

// // function getRandom(min, max) {
// //     return Math.floor(Math.random() * (max - min) + min)
// // }

// //var randomColor = Math.floor(Math.random()*16777215).toString(16);

// //const box = $("#infobox-above");

// //console.log('hi');

// // const box = document.getElementsByClassName('infobox-above')

// //box.removeAttr("style");

// //box.addClass('newback');

// const replacementName = 'Alan and his big red balls';

// const possessedName = replacementName + "'s ";

// const possessedNameNoS = replacementName + "' ";

// const regexNoS = new RegExp(possessedNameNoS, 'g');

// // const parent = box.parent();

// // console.log(parent)

// // console.log(box)

// // parent.addClass('boxing');

// // console.log(box)

// const title = $('#firstHeading');

// //const titleText = $('.mw-page-title-main')

// let titleText = title[0].textContent;

// let indivWords = '';

// const commonWords = ['the', 'of', 'a', 'an', 'and', 'by', 'in', 'on', '(series)', '(film)', '(musician)', '(character)'];

// if (titleText.includes(' ')){
//     let eachWord = titleText.split(' ');

//     if (commonWords.includes(eachWord[eachWord.length - 1])){
//         let len = eachWord.length - 1;
//         titleText = eachWord.slice(0, len).join(" ");
//     }

//     let filteredArr = eachWord.filter(word => !commonWords.includes(word));
//     console.log(filteredArr);
//     words = filteredArr.map(a => `(${a})`).join('|');
//     console.log(words);

//     indivWords = new RegExp(words, 'g');

//    // console.log(indivWords)
// }

// console.log(indivWords)

// const ogTitle = new RegExp (titleText, 'gi');

// console.log(ogTitle)

// //titleText[0].textContent = 'Grant';

// title[0].textContent = replacementName;

// //titleText[0].innerHTML = 'Grant';

// //title.innerHTML = 'Grant2';

// console.log(title);

// //console.log('inspan', titleText);

// //title.addClass('boxing');

// // const txt = document.createTextNode("your cool text");

// // console.log(txt);

// // titleText.appendChild(txt);

// console.log('updated');

// //const possessive = /Grant'\s/g;

// const possessive = new RegExp()

// //let count = 0;
// $("p").each(function() {
//     //console.log("next <p> element with id: " + $(this).attr('id'));

//     let current = $(this)[0].textContent;
//     current = current.replace(ogTitle, replacementName);
//     if (indivWords){
//         current = current.replace(indivWords, replacementName)
//     }
//     current = current.replace(regexNoS, possessedName);
//     current = current.replace(/\[.*?\]/g, '');
//     $(this)[0].textContent = current
//    // console.log(current.textContent)
// });

// // $("td").each(function() {
// //     //console.log("next <p> element with id: " + $(this).attr('id'));

// //     let current = $(this)[0].textContent;
// //     current = current.replace(ogTitle, replacementName);
// //     if (indivWords){
// //         current = current.replace(indivWords, replacementName)
// //     }
// //     current = current.replace(regexNoS, possessedName);
// //     current = current.replace(/\[.*?\]/g, '');
// //     $(this)[0].textContent = current
// //    // console.log(current.textContent)
// // });

// $("h3").each(function() {
//     //console.log("next <p> element with id: " + $(this).attr('id'));

//     let current = $(this)[0].textContent;
//     current = current.replace(ogTitle, replacementName);
//     if (indivWords){
//         current = current.replace(indivWords, replacementName)
//     }
//     current = current.replace(regexNoS, possessedName);
//     current = current.replace(/\[.*?\]/g, '');
//     $(this)[0].textContent = current
//    // console.log(current.textContent)
// });

// let box = $('.infobox-above');

// if (!box){
//     box = $('infobox-title')
// }

// console.log(box)

// box[0].textContent = replacementName;
