const sendEl=document.querySelector('.btn-send');
const listGroupEl=document.querySelector('.list-group');
const questionEl=document.querySelector('.question');
const answerEl=document.querySelector('.answer');
const cardEl=[];
const cardsData=getCardsData();
function createCard(data,index){
    const createLi=document.createElement('li')
    createLi.classList.add('list-group-item');
    createLi.innerHTML=`
        <li class='list-group-item'>
            question: ${data.question} and the answer: ${data.answer}
        </li>
    `;
    cardEl.push(createLi)
    listGroupEl.appendChild(createLi)
}
function createCards(){
    cardsData.forEach((data,index)=>{
        createCard(data,index)
    })
}
function getCardsData(){
    const cards=JSON.parse(localStorage.getItem('cards'))
    return cards===null?[]:cards;
}
function setCardsData(cards){
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}
createCards()
sendEl.addEventListener('click',()=>{
    let question=questionEl.value;
    let answer=answerEl.value;
    if(question.trim()&&answer.trim()){
        console.log('cardEl')
        const newCard={question,answer};
        cardEl.push(newCard);
        questionEl.value='';
        answerEl.value='';
        setCardsData(cardEl);
    }
})