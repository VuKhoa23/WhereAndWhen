document.addEventListener("DOMContentLoaded", function () {
  formElement = document.querySelector("form");
  formElement.addEventListener("submit", addCity);

  document.querySelector("#home").addEventListener("click", load_home);

  document.querySelector("#plans").addEventListener("click", load_plans);

  load_home();
});

function load_home() {
  document.querySelector("#home-container").style.display = "block";
  document.querySelector("#plans-container").style.display = "none";
  document.querySelector("#plan-editor-container").style.display = "none";
}

function formatWeather(data) {
  template = `
          <div class="card-body p-4">

            <div class="d-flex">
              <h6 class="flex-grow-1">${data.city}</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.temp}°C </h6>
              <span class="small" style="color: #868B94">${data.des}</span>
            </div>

            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.windspeed} km/h
                  </span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.humidity}% </span>
                </div>
                <div><i class="fa-solid fa-temperature-three-quarters fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.feel}&deg </span>
                </div>
                <div><i class="fa-solid fa-calendar fa-fw" style="color: green;"></i> <span class="ms-1"> ${data.date} </span>
                </div>
              </div>
              <div>
                <img src="http://openweathermap.org/img/w/${data.img}.png"
                  width="100px">
              </div>
            </div>

          </div>
  `;
  return template;
}

{
  /* <div class="card bg-light" style="color: #4B515D; border-radius: 35px; width: 100%">
</div> */
}

async function addCity(event) {
  event.preventDefault();
  city = document.querySelector("#city").value;
  date = document.querySelector("#date").value;
  try {
    response = await fetch("/trip", {
      method: "POST",
      body: JSON.stringify({
        city: city,
        submit_date: date,
      }),
    });
    result = await response.json();
  } catch (err) {
    console.log(err);
  }
  if (result["message"] !== "") {
    alert(result["message"]);
  } else {
    alert("Trip added");
  }
  city = document.querySelector("#city").value = "";
  date = document.querySelector("#date").value = "";

  // sectionInner = formatWeather(result);
  // section = document.createElement("div");
  // section.className = "card bg-light";
  // section.style.color = "#4B515D";
  // section.style.borderRadius = "35px";
  // section.style.width = "20rem";
  // section.innerHTML = sectionInner;
  // displaySection = document.querySelector("#weather-display");
  // displaySection.appendChild(section);
}

async function load_plans() {
  document.querySelector("#plans-container").style.display = "block";
  document.querySelector("#home-container").style.display = "none";
  document.querySelector("#plan-editor-container").style.display = "none";
  document.querySelector("#visited").innerHTML = "";
  document.querySelector("#unvisited").innerHTML = "";

  reponse = await fetch("/trip/get-all");
  result = await reponse.json();
  Array.from(result["data_visited"]).forEach((trip) => {
    sectionInner = formatWeather(trip);
    section = document.createElement("div");
    section.className = "cursor-pointer card bg-light";
    section.style.color = "#4B515D";
    section.style.borderRadius = "35px";
    section.style.width = "20rem";
    section.innerHTML = sectionInner;
    displaySection = document.querySelector("#visited");
    section.addEventListener("click", () => {
      edit_trip(trip.id);
    });

    displaySection.appendChild(section);
  });
  Array.from(result["data_unvisited"]).forEach((trip) => {
    sectionInner = formatWeather(trip);
    section = document.createElement("div");
    section.className = "cursor-pointer card bg-light";
    section.style.color = "#4B515D";
    section.style.borderRadius = "35px";
    section.style.width = "20rem";
    section.innerHTML = sectionInner;
    displaySection = document.querySelector("#unvisited");
    section.addEventListener("click", () => {
      edit_trip(trip.id);
    });
    displaySection.appendChild(section);
  });
}

async function edit_trip(id) {
  response = await fetch(`/trip/${id}`);
  trip = await response.json();

  sectionInner = formatWeather(trip["data"]);
  section = document.createElement("div");
  section.className = "card bg-light";
  section.style.color = "#4B515D";
  section.style.borderRadius = "35px";
  section.style.width = "20rem";
  section.innerHTML = sectionInner;
  displaySection = document.querySelector("#plan-to-be-edit");
  displaySection.innerHTML = "";
  displaySection.appendChild(section);

  trip_notes = trip["data"]["notes"];
  trip_notes = trip_notes.replace(/<br\s*\/?>/g, "\n");
  document.querySelector("#notes").value = trip_notes;

  statusSection = document.querySelector("#status");
  statusSection.innerHTML = "";
  statusLine = document.createElement("h3");
  delta = trip["data"].delta;
  if (delta > 0) {
    statusLine.innerHTML = `${delta} days to go !!`;
  } else {
    delta = -delta;
    statusLine.innerHTML = `Visited ${delta} days ago`;
  }
  statusSection.appendChild(statusLine);

  deleteForm = document.querySelector("#delete-plan");
  deleteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let check = confirm("Are you sure you want to delete this trip?");
    if (check) {
      delete_trip(trip["data"].id);
    }
  });

  updateForm = document.querySelector("#update-plan");
  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let check = confirm("Are you sure you want to update this trip?");
    if (check) {
      date = document.querySelector("#update-date").value;
      update_trip(trip["data"].id, date);
    }
  });

  notesForm = document.querySelector("#notes-form");
  notesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    notes = document.querySelector("#notes").value;
    notes = notes.replace(/\n/g, "<br/>");
    update_notes(trip["data"].id, notes);
  });

  document.querySelector("#plans-container").style.display = "none";
  document.querySelector("#plan-editor-container").style.display = "block";
}

async function delete_trip(id) {
  response = await fetch(`trip/${id}`, {
    method: "DELETE",
  });
  load_plans();
}

async function update_trip(id, date) {
  response = await fetch(`trip/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      date: date,
    }),
  });
  date = document.querySelector("#update-date").value = "";
  edit_trip(id);
}

async function update_notes(id, notes) {
  response = await fetch(`trip/update-notes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      notes: notes,
    }),
  });
  alert("Notes updated successfully");
  edit_trip(id);
}
