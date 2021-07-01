import { csrfParam } from "@rails/ujs";

let date = new Date();
date = new Date(date.setMonth(date.getMonth()));

const renderCalendar = () => {
  
    date.setDate(1);
    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    document.querySelector(".date #month").innerHTML = months[date.getMonth()];

    document.querySelector("#today").innerHTML = new Date().toDateString();
  
    

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date" data-calendar="${date.getFullYear()}-${date.getMonth()}-${prevLastDay - x + 1}" >${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today"  data-active=1 data-calendar="${date.getFullYear()}-${date.getMonth() + 1}-${i}" >${i}</div>`;
      } else {
        days += `<div  class="number" data-active=1 data-calendar="${date.getFullYear()}-${date.getMonth() + 1}-${i}">${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date" data-calendar="${date.getFullYear()}-${date.getMonth() + 2}-${j}" >${j}</div>`;
    }
    monthDays.innerHTML = days;
  }


window.addEventListener("DOMContentLoaded", () => {
  renderCalendar();
  displayDateOnCalendar();
  console.log("loaded")
});

 const prevbtn = document.querySelector(".prev")
// if (prevbtn) {
// prevbtn.addEventListener("click", () => {
//   date = new Date(date.setMonth(date.getMonth() - 1));
//   renderCalendar();
// });
// }

 const nextbtn = document.querySelector(".next")
// if (nextbtn) {
// nextbtn.addEventListener("click", () => {
//   date = new Date(date.setMonth(date.getMonth() + 1));
//   renderCalendar();
// });
// }

const displayDateOnCalendar = () => {
  
    const datesSelector = document.querySelectorAll(".itwselector");
    datesSelector.forEach((dateSelector) => {
      const dateCalendar = document.querySelector(`[data-calendar="${dateSelector.dataset.date}"]`);
    //  console.log(dateCalendar)
      if (dateCalendar) {
        dateCalendar.style.color = "red"
        dateCalendar.classList.add("active-date")
        dateCalendar.setAttribute("data-start-time", `${dateSelector.dataset.start_time}`)
        dateCalendar.setAttribute("data-end-time", `${dateSelector.dataset.end_time}`)
        dateCalendar.setAttribute("data-date-calendar", `${dateSelector.dataset.date}`)
        dateCalendar.setAttribute("data-interview-id", `${dateSelector.dataset.itwid}`)
        console.log(dateSelector.dataset)
      }
      
    });
  }

// navs.forEach((nav) => {
//   if (nav) {
//     nav.addEventListener('click', () => {
//       renderCalendar();
//       displayDateOnCalendar();
//     });
//   }
// });

if (nextbtn) {
  nextbtn.addEventListener("click", () => {
    date = new Date(date.setMonth(date.getMonth() + 1));
    renderCalendar();
    displayDateOnCalendar();
  });
}
  
if (prevbtn) {
  prevbtn.addEventListener("click", () => {
    date = new Date(date.setMonth(date.getMonth() - 1));
    renderCalendar();
    displayDateOnCalendar();
  });
}
  
const navs = document.querySelectorAll(".link-nav")





//  const func = () => {
//    final_days_array.forEach(element => {
//    if (element.textContent === btn_last.dataset.date.split(" ")[0]) {
//      element.classList.toggle("blue")
//     }
//    })
//  }

//  const add_interview = () => {
//   document.addEventListener("load", func)
// }
// const dateElements = document.querySelectorAll(".number")
// console.log(dateElements)
// const dateSelectors = document.querySelectorAll(".itwselector");
//   const month = document.querySelector("#month").textContent
//   console.log(month)
const popup = () => {
  let  activeDates = document.querySelectorAll(".active-date");
  
  
  const month = document.getElementById("month").innerHTML;
  
  // const dateElements = document.querySelectorAll(".number")
  // console.log(dateElements)
  // console.log(dateSelectors)
  if (activeDates) {
    activeDates.forEach((dateSelector) => {
      console.log(dateSelector.dataset.dateCalendar)
    
      // if (dateSelector.dataset.date.split("-")[1] === 
      dateSelector.addEventListener("click", (event) => {
        console.log(event.currentTarget)
        console.log(event.currentTarget.dataset)
        const modal = document.querySelector(`#myModal${event.currentTarget.dataset.interviewId}`)
        
          // if (modal.innerHTML === dateSelector.dataset.calendar) {
            modal.style.display = "block"
            console.log(modal)
          // }
       

      })
        
    })
    const spans = document.querySelectorAll(".close")
    console.log(spans)
    if (spans) {
      spans.forEach((span) => {
        span.addEventListener("click", (event) => {
          event.currentTarget.parentNode.parentNode.style.display = "none"
          // modal.style.display = "none"
        });
      })
 
    }
    }
    
    
  }
  if (nextbtn) {
    nextbtn.addEventListener("click", () => {
    // activeDates = document.querySelectorAll(".active-date")
      popup();
    });
  };
  if (prevbtn) {
    prevbtn.addEventListener("click", () => {
      // activeDates = document.querySelectorAll(".active-date")
      popup();
    });
  };



  export { renderCalendar, displayDateOnCalendar, popup };
