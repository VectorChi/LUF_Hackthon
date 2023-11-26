const alertIcon = document.querySelector(".notification_icon");
const profileIcon = document.querySelector(".name_pill");
const alert_dd = document.querySelector(".alert_dropdown");
const profile_dd = document.querySelector(".profile_dropdown");
const listTitle = document.querySelectorAll(".setup_title");
const dashed_icon = document.querySelectorAll(".dashed-circle");
const check_icon = document.querySelectorAll(".checked");
const progress_count = document.querySelector(".progress_count");
const meterBar = document.querySelector(".meter");
const openItems = document.querySelector(".open");
const closeItems = document.querySelector(".close");
const setup_container = document.querySelector(".setup_list_wrapper");
const cancelIcon = document.querySelector(".cancel_icon");

// toggle notification
alertIcon.addEventListener("click", (e) => {
  if (alert_dd.classList.contains("hidden")) {
    alert_dd.classList.remove("hidden");
    profile_dd.classList.add("hidden");
  } else {
    alert_dd.classList.add("hidden");
  }
});

// toggle profile menu
profileIcon.addEventListener("click", (e) => {
  if (profile_dd.classList.contains("hidden")) {
    profile_dd.classList.remove("hidden");
    alert_dd.classList.add("hidden");
  } else {
    profile_dd.classList.add("hidden");
  }
});

cancelIcon.addEventListener("click", (e) => {
  cancelIcon.parentElement.parentElement.classList.add("hidden");
});

// Toggle active list
listTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    title.parentElement.parentElement.classList.add("active_list");

    let list_content = e.target.parentElement.childNodes[3];
    if (list_content.classList.contains("hidden")) {
      list_content.classList.remove("hidden");
    }

    // check for other list
    listTitle.forEach((otherTitles) => {
      if (otherTitles != title) {
        otherTitles.parentElement.parentElement.classList.remove("active_list");
        let other_content = otherTitles.parentElement.childNodes[3];
        if (!other_content.classList.contains("hidden")) {
          other_content.classList.add("hidden");
        }
      }
    });
  });
});

// toggle list container
openItems.addEventListener("click", (e) => {
  setup_container.classList.remove("hidden");
  e.target.parentElement.classList.add("hidden");
  closeItems.classList.remove("hidden");
});
closeItems.addEventListener("click", (e) => {
  setup_container.classList.add("hidden");
  e.target.parentElement.classList.add("hidden");
  openItems.classList.remove("hidden");
});

// Progres bar
let checkedItems = 0;
const getCheckedItems = () => {
  const uncheckedItem = document.querySelectorAll(".checked.hidden");

  checkedItems = 5 - uncheckedItem.length;

  meterBar.style.width = `${checkedItems * 20}%`;
  console.log(checkedItems);

  progress_count.innerHTML = `<p>${checkedItems}/5 completed</p>`;
};
window.onload = function () {
  progress_count.innerHTML = `<p>${checkedItems}/5 completed</p>`;
};

// Check and uncheck
dashed_icon.forEach((d_icon) => {
  d_icon.addEventListener("click", (e) => {
    d_icon.classList.add("hidden");
    d_icon.nextElementSibling.classList.remove("hidden");
    getCheckedItems();
  });
});

check_icon.forEach((c_icon) => {
  c_icon.addEventListener("click", (e) => {
    c_icon.classList.add("hidden");
    c_icon.previousElementSibling.classList.remove("hidden");
    getCheckedItems();
  });
});
