// const selectedTickets = [];

// const ticketsEl = document.querySelectorAll('.rounded-lg');
// ticketsEl.forEach(ticket => {
//     ticket.addEventListener('click', function (){
//         const ticketNumber = ticket.innerHTML;
//         if(!selectedTickets.includes(ticketNumber)){
//             selectedTickets.push(ticketNumber);
//             document.getElementById('current-score').innerHTML = selectedTickets.length;
//             ticket.classList.add('selected-ticket');

//         }
//     })
// });
const seats = 40;
const St = seats - 1;
console.log(St)


const selectedTickets = [];
const titketEl = document.querySelectorAll('.rounded-lg');
const message = document.getElementById('message');
const economoy = document.getElementById('economoy');
const economoy2 = document.getElementById('economoy');
const clickButton = document.getElementById('button-click');
// const totalAmount = document.getElementById('amount');
// console.log(titketEl);
titketEl.forEach(ticket =>{
    ticket.addEventListener('click', function(){
        const ticketNumber = ticket.innerHTML;
        if(!selectedTickets.includes(ticketNumber)){
            selectedTickets.push(ticketNumber);
            document.getElementById('current-score').innerHTML = selectedTickets.length;  
            ticket.classList.add('selected-ticket');
            const seat = document.getElementById('seat-laft');
            seat.innerText = 40 - selectedTickets.length;
            economoy.innerText = `${selectedTickets[0]} Economy 550

            ${selectedTickets[1]} Economy 550

            ${selectedTickets[2]} Economy 550
            
            ${selectedTickets[3]} Economy 550 `

            document.getElementById('amount').innerHTML = selectedTickets.length * 550;
            document.getElementById('total-amount').innerHTML = selectedTickets.length * 550;

            
        //    document.getElementById('set-ticket').classList.add('hidden')
        }
        if(selectedTickets.length > 3){
            message.innerText = "Please select tickets from 1 to 4";
            Object.freeze(selectedTickets);
            return;
        }
    })
});

// console.log(clickButton)

function ClickAButton(){
      if(selectedTickets.length > -0){
        document.getElementById('set-ticket').classList.add('hidden')
        document.getElementById('seccess-ticket').classList.remove('hidden')
      }
}