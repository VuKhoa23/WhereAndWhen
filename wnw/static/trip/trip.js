const countries = [
  "Afghanistan,AF",
  "Albania,AL",
  "Algeria,DZ",
  "American Samoa,AS",
  "Andorra,AD",
  "Angola,AO",
  "Anguilla,AI",
  "Antarctica,AQ",
  "Antigua and Barbuda,AG",
  "Argentina,AR",
  "Armenia,AM",
  "Aruba,AW",
  "Australia,AU",
  "Austria,AT",
  "Azerbaijan,AZ",
  "Bahamas,BS",
  "Bahrain,BH",
  "Bangladesh,BD",
  "Barbados,BB",
  "Belarus,BY",
  "Belgium,BE",
  "Belize,BZ",
  "Benin,BJ",
  "Bermuda,BM",
  "Bhutan,BT",
  "Bolivia,BO",
  "Bosnia and Herzegovina,BA",
  "Botswana,BW",
  "Bouvet Island,BV",
  "Brazil,BR",
  "British Indian Ocean Territory,IO",
  "Brunei Darussalam,BN",
  "Bulgaria,BG",
  "Burkina Faso,BF",
  "Burundi,BI",
  "Cambodia,KH",
  "Cameroon,CM",
  "Canada,CA",
  "Cape Verde,CV",
  "Cayman Islands,KY",
  "Central African Republic,CF",
  "Chad,TD",
  "Chile,CL",
  "China,CN",
  "Christmas Island,CX",
  "Cocos (Keeling) Islands,CC",
  "Colombia,CO",
  "Comoros,KM",
  "Congo,CG",
  "Congo, the Democratic Republic of the,CD",
  "Cook Islands,CK",
  "Costa Rica,CR",
  "Cote d'Ivoire,CI",
  "Croatia,HR",
  "Cuba,CU",
  "Cyprus,CY",
  "Czech Republic,CZ",
  "Denmark,DK",
  "Djibouti,DJ",
  "Dominica,DM",
  "Dominican Republic,DO",
  "Ecuador,EC",
  "Egypt,EG",
  "El Salvador,SV",
  "Equatorial Guinea,GQ",
  "Eritrea,ER",
  "Estonia,EE",
  "Ethiopia,ET",
  "Falkland Islands (Malvinas),FK",
  "Faroe Islands,FO",
  "Fiji,FJ",
  "Finland,FI",
  "France,FR",
  "French Guiana,GF",
  "French Polynesia,PF",
  "French Southern Territories,TF",
  "Gabon,GA",
  "Gambia,GM",
  "Georgia,GE",
  "Germany,DE",
  "Ghana,GH",
  "Gibraltar,GI",
  "Greece,GR",
  "Greenland,GL",
  "Grenada,GD",
  "Guadeloupe,GP",
  "Guam,GU",
  "Guatemala,GT",
  "Guinea,GN",
  "Guinea-Bissau,GW",
  "Guyana,GY",
  "Haiti,HT",
  "Heard Island and Mcdonald Islands,HM",
  "Holy See (Vatican City State),VA",
  "Honduras,HN",
  "Hong Kong,HK",
  "Hungary,HU",
  "Iceland,IS",
  "India,IN",
  "Indonesia,ID",
  "Iran, Islamic Republic of,IR",
  "Iraq,IQ",
  "Ireland,IE",
  "Israel,IL",
  "Italy,IT",
  "Jamaica,JM",
  "Japan,JP",
  "Jordan,JO",
  "Kazakhstan,KZ",
  "Kenya,KE",
  "Kiribati,KI",
  "Korea, Democratic People's Republic of,KP",
  "Korea, Republic of,KR",
  "Kuwait,KW",
  "Kyrgyzstan,KG",
  "Lao People's Democratic Republic,LA",
  "Latvia,LV",
  "Lebanon,LB",
  "Lesotho,LS",
  "Liberia,LR",
  "Libyan Arab Jamahiriya,LY",
  "Liechtenstein,LI",
  "Lithuania,LT",
  "Luxembourg,LU",
  "Macao,MO",
  "Macedonia, the Former Yugoslav Republic of,MK",
  "Madagascar,MG",
  "Malawi,MW",
  "Malaysia,MY",
  "Maldives,MV",
  "Mali,ML",
  "Malta,MT",
  "Marshall Islands,MH",
  "Martinique,MQ",
  "Mauritania,MR",
  "Mauritius,MU",
  "Mayotte,YT",
  "Mexico,MX",
  "Micronesia, Federated States of,FM",
  "Moldova, Republic of,MD",
  "Monaco,MC",
  "Mongolia,MN",
  "Montserrat,MS",
  "Morocco,MA",
  "Mozambique,MZ",
  "Myanmar,MM",
  "Namibia,NA",
  "Nauru,NR",
  "Nepal,NP",
  "Netherlands,NL",
  "Netherlands Antilles,AN",
  "New Caledonia,NC",
  "New Zealand,NZ",
  "Nicaragua,NI",
  "Niger,NE",
  "Nigeria,NG",
  "Niue,NU",
  "Norfolk Island,NF",
  "Northern Mariana Islands,MP",
  "Norway,NO",
  "Oman,OM",
  "Pakistan,PK",
  "Palau,PW",
  "Palestinian Territory, Occupied,PS",
  "Panama,PA",
  "Papua New Guinea,PG",
  "Paraguay,PY",
  "Peru,PE",
  "Philippines,PH",
  "Pitcairn,PN",
  "Poland,PL",
  "Portugal,PT",
  "Puerto Rico,PR",
  "Qatar,QA",
  "Reunion,RE",
  "Romania,RO",
  "Russian Federation,RU",
  "Rwanda,RW",
  "Saint Helena,SH",
  "Saint Kitts and Nevis,KN",
  "Saint Lucia,LC",
  "Saint Pierre and Miquelon,PM",
  "Saint Vincent and the Grenadines,VC",
  "Samoa,WS",
  "San Marino,SM",
  "Sao Tome and Principe,ST",
  "Saudi Arabia,SA",
  "Senegal,SN",
  "Serbia,RS",
  "Seychelles,SC",
  "Sierra Leone,SL",
  "Singapore,SG",
  "Slovakia,SK",
  "Slovenia,SI",
  "Solomon Islands,SB",
  "Somalia,SO",
  "South Africa,ZA",
  "South Georgia and the South Sandwich Islands,GS",
  "Spain,ES",
  "Sri Lanka,LK",
  "Sudan,SD",
  "Suriname,SR",
  "Svalbard and Jan Mayen,SJ",
  "Swaziland,SZ",
  "Sweden,SE",
  "Switzerland,CH",
  "Syrian Arab Republic,SY",
  "Taiwan, Province of China,TW",
  "Tajikistan,TJ",
  "Tanzania, United Republic of,TZ",
  "Thailand,TH",
  "Timor-Leste,TL",
  "Togo,TG",
  "Tokelau,TK",
  "Tonga,TO",
  "Trinidad and Tobago,TT",
  "Tunisia,TN",
  "Turkey,TR",
  "Turkmenistan,TM",
  "Turks and Caicos Islands,TC",
  "Tuvalu,TV",
  "Uganda,UG",
  "Ukraine,UA",
  "United Arab Emirates,AE",
  "United Kingdom,GB",
  "United States,US",
  "United States Minor Outlying Islands,UM",
  "Uruguay,UY",
  "Uzbekistan,UZ",
  "Vanuatu,VU",
  "Venezuela,VE",
  "Viet Nam,VN",
  "Virgin Islands, British,VG",
  "Virgin Islands, U.S.,VI",
  "Wallis and Futuna,WF",
  "Western Sahara,EH",
  "Yemen,YE",
  "Zambia,ZM",
  "Zimbabwe,ZW",
];

document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("countrySelect");
  for (const countryData of countries) {
    const [countryName, countryCode] = countryData.split(",");
    const option = document.createElement("option");
    option.value = countryCode;
    option.textContent = countryName;
    countrySelect.appendChild(option);
  }

  formElement = document.querySelector("form");
  formElement.addEventListener("submit", add_trip);

  document.querySelector("#home").addEventListener("click", load_home);
  document.querySelector("#brand").addEventListener("click", load_home);

  document.querySelector("#plans").addEventListener("click", load_plans);

  load_home();
});

function load_home() {
  console.log("Hello");
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

async function add_trip(event) {
  event.preventDefault();
  city = document.querySelector("#city").value;
  date = document.querySelector("#date").value;
  country = document.querySelector("#countrySelect").value;
  console.log(country);
  try {
    response = await fetch("/trip", {
      method: "POST",
      body: JSON.stringify({
        city: city,
        submit_date: date,
        country: country,
      }),
    });
    result = await response.json();
  } catch (err) {
    console.log(err);
  }
  if (result["message"] !== "") {
    // alert(result["message"]);
    showModal(result["message"]);
  } else {
    showModal("Trip added");
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
  } else if (delta < 0) {
    delta = -delta;
    statusLine.innerHTML = `Visited ${delta} days ago`;
  } else {
    statusLine.innerHTML = `Visiting today`;
  }
  statusSection.appendChild(statusLine);

  deleteForm = document.querySelector("#delete-plan");
  deleteForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    let check = await isConfirm("Are you sure you want to delete this trip?");
    if (check) {
      await delete_trip(trip["data"].id);
    }
  });

  updateForm = document.querySelector("#update-plan");
  updateForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    event.stopPropagation();
    const check = await isConfirm("Are you sure you want to update this trip?");
    if (check) {
      do_update();
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

async function do_update() {
  date = document.querySelector("#update-date").value;
  await update_trip(trip["data"].id, date);
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
  result = await response.json();

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
  showModal("Notes updated successfully");
  edit_trip(id);
}

function showModal(message) {
  p = document.createElement("p");
  p.innerHTML = message;
  document.querySelector("#modal-body").innerHTML = "";
  document.querySelector("#modal-body").appendChild(p);
  $("#myModal").modal("show");
}

function hideModal() {
  $("#myModal").modal("hide");
}

function isConfirm(message) {
  p = document.createElement("p");
  p.innerHTML = message;
  document.querySelector("#confirm-modal-body").innerHTML = "";
  document.querySelector("#confirm-modal-body").appendChild(p);
  $("#myConfirmModal").modal("show");

  return new Promise((resolve) => {
    // Add click event listeners to the buttons
    document.getElementById("confirmBtn").addEventListener("click", () => {
      $("#myConfirmModal").modal("hide");
      resolve(true); // Resolving the promise with true when "Confirm" is clicked
    });

    document.getElementById("cancelBtn").addEventListener("click", () => {
      $("#myConfirmModal").modal("hide");
      resolve(false); // Resolving the promise with false when "Cancel" is clicked
    });
  });
}
