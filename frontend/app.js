/* =========================================
   MAUSAM MIND
   Personalized Weather Intelligence
========================================= */

const $ = (id) => document.getElementById(id);

/* =========================
   USER DATA
========================= */

const user = {
    name: "",
    location: "",
    profession: ""
};

const weather = {
    temperature: 29,
    rain: 80,
    wind: 18,
    humidity: 72,
    condition: "Partly Cloudy"
};

/* =========================
   PROFESSION DATA
========================= */

const professionData = {

    Student: {

        theme: "student",
        icon: "🎓",

        activity: "College / School Commute",
        activityDescription:
            "Rain may cause delays during your journey.",

        alertTitle:
            "Rain may affect your commute",

        alertMessage:
            "With an 80% chance of rain, your journey may take longer.",

        score: 65,

        conflict:
            "Your commute may be affected by rainfall and slower traffic.",

        recommendation:
            "Leave 20–30 minutes earlier and choose a route with lower rain exposure.",

        copilot:
            "Carry rain protection, leave earlier, and avoid waterlogged roads.",

        precautions: [
            [
                "☂️",
                "Carry rain protection",
                "Keep an umbrella or light rain jacket with you."
            ],
            [
                "🚌",
                "Plan your commute",
                "Prefer covered routes and allow extra travel time."
            ],
            [
                "📚",
                "Protect your study gear",
                "Keep books and electronics in a water-resistant bag."
            ]
        ]
    },

    Farmer: {

        theme: "farmer",
        icon: "🌾",


        activity: "Farm Activities",

        activityDescription:
            "Rain may affect field work today.",

        alertTitle:
            "Rain may affect farm activities",

        alertMessage:
            "Outdoor agricultural work needs extra planning.",

        score: 45,

        conflict:
            "Heavy rain may make field activities difficult.",

        recommendation:
            "Complete critical outdoor work before rainfall and protect harvested produce.",

        copilot:
            "Plan field activities around rain and protect harvested crops.",

        precautions: [
            [
                "🌾",
                "Protect crops",
                "Check drainage and protect harvested produce."
            ],
            [
                "⏰",
                "Use the morning window",
                "Schedule critical field work before the rain period."
            ],
            [
                "🧴",
                "Delay spraying",
                "Avoid spraying or applying inputs immediately before rain."
            ]
        ]
    },

    "Auto Driver": {

        theme: "auto-driver",
        icon: "🛺",


        activity: "Auto Trips",

        activityDescription:
            "Rain and wet roads may increase trip risk today.",

        alertTitle:
            "Rain may affect auto trips",

        alertMessage:
            "Wet, low-lying roads can slow trips and raise risk.",

        score: 42,

        conflict:
            "Rain may cause waterlogging on low-lying stretches.",

        recommendation:
            "Prefer main roads with better drainage, even if slightly longer.",

        copilot:
            "Avoid low-lying roads during peak rain and keep navigation protected.",

        precautions: [
            [
                "🛺",
                "Protect the canopy",
                "Keep the auto canopy and phone navigation covered."
            ],
            [
                "🛣️",
                "Choose main roads",
                "Use the lower-rain route even if it adds a few minutes."
            ],
            [
                "⏰",
                "Trip timing",
                "Morning trips are more reliable than afternoon ones."
            ]
        ]
    },

    "Bus Driver": {

        theme: "bus-driver",
        icon: "🚌",


        activity: "Bus Route",

        activityDescription:
            "Rain may slow traffic and reduce visibility on your route.",

        alertTitle:
            "Rain may affect your bus route",

        alertMessage:
            "Wider roads stay more reliable during heavy rain.",

        score: 48,

        conflict:
            "Rain-related traffic and low visibility may affect schedule.",

        recommendation:
            "Stay on wider arterial roads and add 10–15 minutes buffer time.",

        copilot:
            "Prefer major roads and avoid waterlogged underpasses.",

        precautions: [
            [
                "🚌",
                "Prefer arterial roads",
                "Avoid waterlogged underpasses and low-lying sections."
            ],
            [
                "⏰",
                "Add buffer time",
                "Allow 10–15 extra minutes during rain-heavy hours."
            ],
            [
                "👁️",
                "Watch visibility",
                "Be extra cautious near turns in low-visibility rain."
            ]
        ]
    },

    "Delivery Partner": {

        theme: "delivery",
        icon: "🛵",


        activity: "Delivery & Travel",

        activityDescription:
            "Rain and wet roads may increase delivery times.",

        alertTitle:
            "Rain may affect deliveries",

        alertMessage:
            "Wet roads can increase travel risk.",

        score: 40,

        conflict:
            "Rain may slow deliveries and increase road risk.",

        recommendation:
            "Choose safer routes, protect your phone, and allow extra travel time.",

        copilot:
            "Use weather-smart routing and avoid flooded roads.",

        precautions: [
            [
                "🛵",
                "Protect yourself",
                "Carry rain protection and use reflective gear."
            ],
            [
                "📱",
                "Protect your phone",
                "Use a waterproof pouch while riding."
            ],
            [
                "🛣️",
                "Choose safer roads",
                "Avoid waterlogged roads even if they are faster."
            ]
        ]
    },

    "Outdoor Worker": {

        theme: "outdoor-worker",
        icon: "👷",


        activity: "Outdoor Work",

        activityDescription:
            "Weather may affect outdoor work.",

        alertTitle:
            "Weather may affect outdoor work",

        alertMessage:
            "Plan around rainfall and take sheltered breaks.",

        score: 50,

        conflict:
            "Rain may disrupt outdoor work.",

        recommendation:
            "Shift critical tasks to safer hours and take sheltered breaks.",

        copilot:
            "Check conditions before outdoor work and avoid prolonged exposure.",

        precautions: [
            [
                "🦺",
                "Use protection",
                "Wear suitable rain protection for outdoor tasks."
            ],
            [
                "⏰",
                "Shift timings",
                "Move critical outdoor tasks to the safer morning window."
            ],
            [
                "🏠",
                "Take shelter",
                "Plan safe break points before work begins."
            ]
        ]
    },

    Teacher: {

        theme: "teacher",
        icon: "👩‍🏫",


        activity: "School / College Commute",

        activityDescription:
            "Weather may affect your commute and outdoor activities.",

        alertTitle:
            "Rain may affect your commute",

        alertMessage:
            "Allow extra travel time and keep an indoor alternative ready.",

        score: 65,

        conflict:
            "Rain may cause commute delays and disrupt outdoor activities.",

        recommendation:
            "Leave earlier and keep an indoor alternative for outdoor class activities.",

        copilot:
            "Carry rain protection and keep a backup indoor plan.",

        precautions: [
            [
                "☂️",
                "Carry rain protection",
                "Keep an umbrella or rain jacket ready."
            ],
            [
                "🏫",
                "Backup activity",
                "Keep an indoor alternative for outdoor sessions."
            ],
            [
                "🕒",
                "Leave earlier",
                "Allow extra time for weather-related delays."
            ]
        ]
    },

    Shopkeeper: {

        theme: "shopkeeper",
        icon: "🏪",


        activity: "Shop Operations",

        activityDescription:
            "Rain may affect customer movement and deliveries.",

        alertTitle:
            "Rain may affect business activity",

        alertMessage:
            "Heavy rain can reduce footfall and slow deliveries.",

        score: 60,

        conflict:
            "Rain may affect shop operations and delivery timing.",

        recommendation:
            "Protect stock, keep the entrance safe, and plan deliveries around rainfall.",

        copilot:
            "Monitor weather before deliveries and protect your stock.",

        precautions: [
            [
                "📦",
                "Protect stock",
                "Keep vulnerable goods away from water exposure."
            ],
            [
                "🚪",
                "Keep entry safe",
                "Check for water accumulation near the entrance."
            ],
            [
                "📉",
                "Expect slower footfall",
                "Plan staffing and deliveries around heavy rain."
            ]
        ]
    },

    "Street Vendor": {

        theme: "vendor",
        icon: "🥤",


        activity: "Stall Setup & Sales",

        activityDescription:
            "Rain may disrupt your stall setup and customer footfall.",

        alertTitle:
            "Rain may affect your stall",

        alertMessage:
            "Set up and secure your stall before the rain window.",

        score: 38,

        conflict:
            "Rain may damage stock and reduce customer footfall.",

        recommendation:
            "Set up before noon and secure loose items before the rain window.",

        copilot:
            "Secure your stall early and protect cash, food and equipment.",

        precautions: [
            [
                "🥤",
                "Secure the stall",
                "Set up earlier while the morning stays comfortable."
            ],
            [
                "💧",
                "Protect goods",
                "Keep food, cash and electrical equipment away from water."
            ],
            [
                "📉",
                "Expect slower footfall",
                "Plan stock and staffing around the rain window."
            ]
        ]
    },

    Photographer: {

        theme: "photographer",
        icon: "📷",


        activity: "Outdoor Shoot",

        activityDescription:
            "Rain may limit your outdoor shooting window today.",

        alertTitle:
            "Rain may affect your shoot",

        alertMessage:
            "Use the morning light window before rain risk rises.",

        score: 44,

        conflict:
            "Sudden showers may affect equipment and outdoor shots.",

        recommendation:
            "Shoot in the morning window and keep an indoor backup location ready.",

        copilot:
            "Protect your gear and have an indoor backup plan ready.",

        precautions: [
            [
                "📷",
                "Protect gear",
                "Keep camera equipment shielded from sudden showers."
            ],
            [
                "🌅",
                "Use morning light",
                "Morning offers a more reliable outdoor shooting window."
            ],
            [
                "🏠",
                "Backup location",
                "Keep an indoor location ready in case of rain."
            ]
        ]
    }
};

/* =========================
   BACKEND SAFETY API
========================= */

const API_BASE_URL = "http://127.0.0.1:8000";

const BACKEND_PROFILE_MAP = {
    "Student": "student_commute",
    "Teacher": "teacher_commute",
    "Auto Driver": "two_wheeler",
    "Bus Driver": "teacher_commute",
    "Delivery Partner": "two_wheeler",
    "Farmer": "farmer",
    "Outdoor Worker": "outdoor_worker",
    "Photographer": "outdoor_worker",
    "Shopkeeper": "shopkeeper",
    "Street Vendor": "shopkeeper"
};

async function refreshSafetyAnalysis() {

    const backendProfile =
        BACKEND_PROFILE_MAP[user.profession];

    if (!backendProfile) return;

    try {

        const url =
            `${API_BASE_URL}/analyze?profile=${encodeURIComponent(backendProfile)}`
            + `&rain=${weather.rain}`
            + `&wind=${weather.wind}`
            + `&temp=${weather.temperature}`
            + `&humidity=${weather.humidity}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Safety API unavailable");
        }

        const result = await response.json();

        if (result.error) {
            throw new Error(result.error);
        }

        updateText("score", result.safety_score);

        const scoreCircle = $("scoreCircle");

        if (scoreCircle) {
            scoreCircle.style.borderColor =
                result.ui_color;
        }

        const badge = $("statusBadge");

        if (badge) {

            badge.textContent = result.status;

            badge.style.background =
                result.ui_color;

            badge.style.color =
                result.status === "CAUTION"
                ? "#7a5b00"
                : "white";
        }

        updateText(
            "recommendation",
            result.recommendation
        );

        const alertIcon = $("alertIcon");

        if (alertIcon) {

            alertIcon.textContent =
                result.status === "SAFE"
                ? "✅"
                : result.status === "DANGER"
                ? "🚨"
                : "⚠️";
        }

    } catch (error) {

        console.warn(
            "Live safety check unavailable, showing baseline estimate.",
            error
        );
    }
}

/* =========================
   PROFESSION SELECTION
========================= */

let selectedProfession = "";

document.querySelectorAll(".profession-card").forEach((button) => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".profession-card")
            .forEach((item) => {
                item.classList.remove("selected");
            });

        button.classList.add("selected");

        selectedProfession = button.dataset.profession;

        applyTheme(selectedProfession);
    });
});

/* =========================
   PROFESSION THEME
========================= */

function applyTheme(profession) {

    const data = professionData[profession];

    if (data && data.theme) {
        document.body.dataset.theme = data.theme;
    } else {
        delete document.body.dataset.theme;
    }
}

/* =========================
   START PROFILE
========================= */

$("startButton").addEventListener("click", () => {

    const name = $("nameInput").value.trim();
    const location = $("locationInput").value;

    if (!name || !location || !selectedProfession) {

        $("formError").textContent =
            "Please enter your name, choose your location and select a profession.";

        return;
    }

    user.name = name;
    user.location = location;
    user.profession = selectedProfession;

    localStorage.setItem(
        "mausamMindUser",
        JSON.stringify(user)
    );

    updatePersonalization();

    $("onboarding").classList.add("hidden");
    $("mainApp").classList.remove("hidden");

    showPage("dashboard");
});

/* =========================
   UPDATE TEXT
========================= */

function updateText(id, value) {

    const element = $(id);

    if (element) {
        element.textContent = value;
    }
}

/* =========================
   PERSONALIZATION
========================= */

function updatePersonalization() {

    const data = professionData[user.profession];

    if (!data) return;

    applyTheme(user.profession);

    updateText("avatarIcon", data.icon);

    updateText(
        "professionBadge",
        `${data.icon} ${user.profession}`
    );

    updateText("headerName", user.name);

    updateText(
        "userNameDisplay",
        user.name
    );

    updateText(
        "locationDisplay",
        user.location
    );

    updateText(
        "alertTitle",
        data.alertTitle
    );

    updateText(
        "alertMessage",
        data.alertMessage
    );

    updateText(
        "activityTitle",
        data.activity
    );

    updateText(
        "activityDescription",
        data.activityDescription
    );

    updateText(
        "planTitle",
        data.activity
    );

    updateText(
        "planDescription",
        data.activityDescription
    );

    updateText(
        "conflictTitle",
        data.activity
    );

    updateText(
        "score",
        data.score
    );

    updateText(
        "conflictText",
        data.conflict
    );

    updateText(
        "recommendation",
        data.recommendation
    );

    updateText(
        "copilotName",
        user.name
    );

    updateText(
        "copilotIntro",
        `I've personalized today's weather advice for you as a ${user.profession}.`
    );

    updateText(
        "copilotAdvice",
        data.copilot
    );

    $("precautions").innerHTML =
        data.precautions
            .map((item) => {

                return `
                    <div class="precaution">

                        <div class="precaution-icon">
                            ${item[0]}
                        </div>

                        <h3>
                            ${item[1]}
                        </h3>

                        <p>
                            ${item[2]}
                        </p>

                    </div>
                `;

            })
            .join("");

    refreshSafetyAnalysis();
}

/* =========================
   PAGE NAVIGATION
========================= */

document.addEventListener("click", (event) => {

    const button =
        event.target.closest("[data-page]");

    if (!button) return;

    showPage(button.dataset.page);
});

function showPage(pageId) {

    document
        .querySelectorAll(".app-page")
        .forEach((page) => {

            page.classList.remove("active-page");

        });

    const page = $(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    document
        .querySelectorAll(".nav-button")
        .forEach((button) => {

            button.classList.toggle(
                "active",
                button.dataset.page === pageId
            );

        });

    if (pageId === "map") {

        setTimeout(initImpactMap, 100);

        if (
            user.location &&
            !$("mapPlace").value
        ) {
            $("mapPlace").value =
                user.location;
        }
    }

    if (pageId === "route") {

        setTimeout(initRouteMap, 100);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================
   COPILOT
========================= */

const chatBox = $("chatBox");
const copilotInput = $("userInput");

function addMessage(text, sender) {

    const message =
        document.createElement("div");

    message.className =
        "message " + sender;

    message.innerText = text;

    chatBox.appendChild(message);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

function getBotResponse(question) {

    const q =
        question.toLowerCase();

    const data =
        professionData[user.profession]
        || professionData.Student;

    if (
        q.includes("cricket") ||
        q.includes("play") ||
        q.includes("match")
    ) {

        return `
⚠️ Cricket at 3 PM has high weather risk.

🌧️ Rain probability: ${weather.rain}%

💡 Consider the 7 AM–11 AM window instead.
`;
    }

    if (
        q.includes("route") ||
        q.includes("way")
    ) {

        return `
🚗 Open Smart Route to compare alternatives.

The recommendation balances:

70% Weather Safety
+
30% Travel Time
`;
    }

    if (
        q.includes("rain") ||
        q.includes("commute")
    ) {

        return `
🌧️ Rain probability is ${weather.rain}%.

${data.copilot}

☂️ Allow extra travel time.
`;
    }

    if (
        q.includes("plan") ||
        q.includes("conflict")
    ) {

        return `
📅 Weather conflict detected.

Suitability:
${data.score}/100

💡 ${data.recommendation}
`;
    }

    return `
I'm Mausam Copilot 🌦️

${data.copilot}

Ask me about rain, plans, cricket,
or the best route.
`;
}

function sendMessage() {

    const question =
        copilotInput.value.trim();

    if (!question) return;

    addMessage(
        question,
        "user"
    );

    copilotInput.value = "";

    const loading =
        document.createElement("div");

    loading.className =
        "message bot";

    loading.innerText =
        "🤖 Checking your weather context...";

    chatBox.appendChild(loading);

    setTimeout(() => {

        loading.remove();

        addMessage(
            getBotResponse(question),
            "bot"
        );

    }, 450);
}

$("sendButton")
    .addEventListener(
        "click",
        sendMessage
    );

copilotInput
    .addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                sendMessage();
            }

        }
    );

/* =========================
   COPILOT SUGGESTIONS
========================= */

document
    .querySelectorAll(
        ".suggestions [data-question]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                copilotInput.value =
                    button.dataset.question;

                sendMessage();
            }
        );

    });

/* =========================
   VOICE INPUT
========================= */

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition =
        new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.onresult =
        (event) => {

            copilotInput.value =
                event.results[0][0].transcript;

            sendMessage();
        };

    $("voiceButton")
        .addEventListener(
            "click",
            () => recognition.start()
        );

} else {

    $("voiceButton").style.display =
        "none";
}

/* =========================
   IMPACT MAP
========================= */

let impactMap = null;

async function geocode(place) {

    const response =
        await fetch(
            "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q="
            + encodeURIComponent(place)
        );

    if (!response.ok) {
        throw new Error(
            "Location search failed"
        );
    }

    const data =
        await response.json();

    if (!data.length) {
        throw new Error(
            "Location not found"
        );
    }

    return {
        lat: Number(data[0].lat),
        lon: Number(data[0].lon),
        name: data[0].display_name
    };
}

function initImpactMap() {

    if (impactMap) return;

    if (typeof L === "undefined") return;

    impactMap =
        L.map("impactMap")
            .setView(
                [28.669, 77.453],
                11
            );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "© OpenStreetMap contributors"
        }
    ).addTo(impactMap);

    setTimeout(() => {

        impactMap.invalidateSize();

    }, 100);
}

async function checkMapWeather() {

    try {

        if (!impactMap) {
            initImpactMap();
        }

        const place =
            await geocode(
                $("mapPlace").value
                || user.location
                || "Delhi"
            );

        impactMap.setView(
            [place.lat, place.lon],
            12
        );

        L.marker([
            place.lat,
            place.lon
        ])
            .addTo(impactMap)
            .bindPopup(place.name)
            .openPopup();

        const response =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&current=temperature_2m,rain,weather_code,visibility`
            );

        const data =
            await response.json();

        const current =
            data.current;

        $("mapWeatherStatus")
            .innerText =
            `🌡️ ${current.temperature_2m}°C  |  🌧️ Rain ${current.rain || 0} mm  |  Visibility ${((current.visibility || 0) / 1000).toFixed(1)} km`;

    } catch (error) {

        $("mapWeatherStatus")
            .innerText =
            "❌ " + error.message;
    }
}

$("checkMapWeather")
    .addEventListener(
        "click",
        checkMapWeather
    );

/* =========================
   CHECK ANY PLACE (ROUTE PAGE)
========================= */

async function checkPlace() {

    const input = $("placeSearch").value.trim();
    const box = $("placeResult");

    if (!input) {
        box.textContent = "Please enter a place first.";
        return;
    }

    box.textContent = "🔎 Searching for " + input + "...";

    try {

        const place = await geocode(input);

        const response =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&current=temperature_2m,rain,showers,visibility,weather_code`
            );

        const data = await response.json();
        const current = data.current || {};

        const risk = getRisk(current);
        const condition = getCondition(current);

        let traffic = "Low";
        let trafficClass = "condition-good";

        if (risk >= 60) {
            traffic = "Heavy";
            trafficClass = "condition-bad";
        } else if (risk >= 30) {
            traffic = "Moderate";
            trafficClass = "condition-warn";
        }

        box.innerHTML = `
            <b>📍 ${place.name}</b><br>
            🌡️ Temperature: <b>${current.temperature_2m ?? "—"}°C</b> &nbsp;
            🌧️ Rain: <b>${current.rain || 0} mm</b> &nbsp;
            👁️ Visibility: <b>${((current.visibility || 0) / 1000).toFixed(1)} km</b><br>
            🌦️ Weather: <b>${condition}</b> &nbsp;
            🚦 Traffic: <span class="${trafficClass}">${traffic}</span>
            <div class="muted" style="margin-top:6px">Demo traffic estimate based on weather and visibility, not live data.</div>
        `;

    } catch (error) {

        box.textContent = "❌ " + error.message;
    }
}

$("checkPlace")
    .addEventListener("click", checkPlace);

$("placeSearch")
    .addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            checkPlace();
        }
    });

/* =========================
   ROUTE MAP
========================= */

let routeMap = null;
let routeLayers = [];
let markers = [];
let weatherLayers = [];

function initRouteMap() {

    if (routeMap) return;

    if (typeof L === "undefined") return;

    routeMap =
        L.map("routeMap")
            .setView(
                [28.669, 77.453],
                10
            );

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "© OpenStreetMap contributors"
        }
    ).addTo(routeMap);

    setTimeout(() => {

        routeMap.invalidateSize();

    }, 100);
}

function clearRouteMap() {

    routeLayers.forEach(
        layer => routeMap.removeLayer(layer)
    );

    markers.forEach(
        marker => routeMap.removeLayer(marker)
    );

    weatherLayers.forEach(
        layer => routeMap.removeLayer(layer)
    );

    routeLayers = [];
    markers = [];
    weatherLayers = [];
}

function sampleRoute(points, number = 8) {

    if (points.length <= number) {
        return points;
    }

    return Array.from(
        { length: number },
        (_, index) => {

            return points[
                Math.round(
                    index *
                    (points.length - 1) /
                    (number - 1)
                )
            ];

        }
    );
}

function getRisk(weatherData) {

    const code = weatherData.weather_code || 0;
    const rain = weatherData.rain || 0;
    const showers = weatherData.showers || 0;
    const visibilityKm =
        (weatherData.visibility || 10000) / 1000;

    let risk = 0;

    if (rain > 0) {
        risk += Math.min(35, rain * 18);
    }

    if (showers > 0) {
        risk += Math.min(25, showers * 14);
    }

    if (code === 45 || code === 48) {
        risk += 35;
    } else if (code >= 95) {
        risk += 40;
    } else if (code >= 80) {
        risk += 28;
    } else if (code >= 61) {
        risk += 22;
    } else if (code >= 51) {
        risk += 12;
    } else if (code >= 1 && code <= 3) {
        risk += 4;
    }

    if (visibilityKm < 1) {
        risk += 30;
    } else if (visibilityKm < 2) {
        risk += 20;
    } else if (visibilityKm < 5) {
        risk += 8;
    }

    return Math.min(100, risk);
}

function riskColor(risk) {

    if (risk < 30) return "#16a34a";
    if (risk < 60) return "#f59e0b";
    return "#dc2626";
}

function getCondition(weatherData) {

    const code = weatherData.weather_code || 0;
    const rain = weatherData.rain || 0;
    const visibilityKm =
        (weatherData.visibility || 10000) / 1000;

    if (code === 45 || code === 48) return "Foggy";
    if (code >= 95) return "Thunderstorm";
    if (code >= 80) return "Rain showers";
    if (code >= 61) return "Rain";
    if (code >= 51) return "Drizzle";
    if (visibilityKm < 2) return "Low visibility";
    if (code >= 1 && code <= 3) return "Cloudy";
    return "Clear";
}

function km(meters) {

    return (
        meters / 1000
    ).toFixed(1) + " km";
}

function mins(seconds) {

    return (
        Math.round(seconds / 60)
        + " min"
    );
}

/* =========================
   ROUTE CALCULATION
========================= */

async function planRoute() {

    try {

        if (!routeMap) {
            initRouteMap();
        }

        $("status").innerText =
            "⏳ Finding routes and checking weather...";

        const start =
            await geocode(
                $("from").value
            );

        const destination =
            await geocode(
                $("to").value
            );

        clearRouteMap();

        const response =
            await fetch(
                `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${destination.lon},${destination.lat}?alternatives=true&overview=full&geometries=geojson`
            );

        const data =
            await response.json();

        if (!data.routes?.length) {
            throw new Error(
                "No route found"
            );
        }

        const routes =
            data.routes.slice(0, 2);

        const results = [];

        for (const route of routes) {

            const points =
                sampleRoute(
                    route.geometry.coordinates
                        .map((point) => ({
                            lat: point[1],
                            lon: point[0]
                        }))
                );

            const weatherResults =
                await Promise.all(

                    points.map(
                        async (point) => {

                            const response =
                                await fetch(
                                    `https://api.open-meteo.com/v1/forecast?latitude=${point.lat}&longitude=${point.lon}&current=rain,showers,visibility,weather_code`
                                );

                            const data =
                                await response.json();

                            return {
                                point,
                                current:
                                    data.current
                            };
                        }
                    )
                );

            const averageRisk =
                weatherResults.reduce(
                    (sum, item) =>
                        sum +
                        getRisk(
                            item.current
                        ),
                    0
                ) / weatherResults.length;

            results.push({
                route,
                weatherResults,
                averageRisk,
                score: 0
            });
        }

        const maxTime =
            Math.max(
                ...results.map(
                    item =>
                        item.route.duration
                )
            );

        results.forEach(
            item => {

                item.score =
                    0.7 *
                    (100 - item.averageRisk)

                    +

                    0.3 *
                    (
                        100 *
                        (
                            1 -
                            item.route.duration /
                            maxTime
                        )
                    );
            }
        );

        let bestIndex = 0;

        results.forEach(
            (item, index) => {

                if (
                    item.score >
                    results[bestIndex].score
                ) {
                    bestIndex = index;
                }

            }
        );

        /* Markers */

        markers.push(

            L.marker([
                start.lat,
                start.lon
            ])
                .addTo(routeMap)
                .bindPopup("Start"),

            L.marker([
                destination.lat,
                destination.lon
            ])
                .addTo(routeMap)
                .bindPopup("Destination")
        );

        /* Draw routes */

        results.forEach(
            (item, index) => {

                const coordinates =
                    item.route.geometry.coordinates
                        .map(
                            point =>
                                [
                                    point[1],
                                    point[0]
                                ]
                        );

                routeLayers.push(

                    L.polyline(
                        coordinates,
                        {
                            weight:
                                index === bestIndex
                                ? 7
                                : 5,

                            opacity: 0.8
                        }
                    ).addTo(routeMap)
                );

                item.weatherResults.forEach(
                    (point) => {

                        const risk =
                            getRisk(point.current);

                        const color =
                            riskColor(risk);

                        weatherLayers.push(

                            L.circle(
                                [point.point.lat, point.point.lon],
                                {
                                    radius: 900,
                                    color,
                                    fillColor: color,
                                    fillOpacity: 0.13,
                                    weight: 2
                                }
                            )
                                .addTo(routeMap)
                                .bindPopup(
                                    `<b>Weather checkpoint</b><br>${getCondition(point.current)}<br>Risk: ${risk.toFixed(0)}%`
                                )
                        );
                    }
                );

                const letter =
                    index === 0
                    ? "A"
                    : "B";

                updateText(
                    "title" + letter,
                    (index === bestIndex
                        ? "⭐ "
                        : "") +
                    "Route " +
                    (index + 1)
                );

                updateText(
                    "distance" + letter,
                    km(item.route.distance)
                );

                updateText(
                    "time" + letter,
                    mins(item.route.duration)
                );

                updateText(
                    "risk" + letter,
                    item.averageRisk.toFixed(0)
                    + "%"
                );

                updateText(
                    "safety" + letter,
                    (
                        100 -
                        item.averageRisk
                    ).toFixed(0)
                    + "%"
                );

                const conditions =
                    [
                        ...new Set(
                            item.weatherResults.map(
                                w =>
                                    getCondition(
                                        w.current
                                    )
                            )
                        )
                    ];

                updateText(
                    "condition" + letter,
                    conditions.join(", ")
                );

                updateText(
                    "score" + letter,
                    item.score.toFixed(1)
                );

                $("card" + letter)
                    .classList.toggle(
                        "best",
                        index === bestIndex
                    );
            }
        );

        routeMap.fitBounds(
            L.latLngBounds([
                [start.lat, start.lon],
                [
                    destination.lat,
                    destination.lon
                ]
            ]),
            {
                padding: [30, 30]
            }
        );

        const allWeather =
            results.flatMap(
                item => item.weatherResults
            );

        const avgRain =
            allWeather.reduce(
                (sum, w) => sum + (w.current.rain || 0),
                0
            ) / allWeather.length;

        const avgVisibility =
            allWeather.reduce(
                (sum, w) =>
                    sum + ((w.current.visibility || 0) / 1000),
                0
            ) / allWeather.length;

        const hasFog =
            allWeather.some(
                w => [45, 48].includes(w.current.weather_code)
            );

        updateText(
            "overallRain",
            avgRain.toFixed(1) + " mm"
        );

        updateText(
            "overallFog",
            hasFog ? "Detected" : "Low"
        );

        updateText(
            "overallVisibility",
            avgVisibility.toFixed(1) + " km"
        );

        const overallRisk =
            (results[0].averageRisk + results[1].averageRisk) / 2;

        const traffic =
            overallRisk >= 60
            ? "Heavy"
            : overallRisk >= 30
            ? "Moderate"
            : "Low";

        updateText("traffic", traffic);

        const best =
            results[bestIndex];

        $("routeRecommendation")
            .innerHTML = `
                🟢 <b>Route ${bestIndex + 1} is recommended.</b>
                Smart Score:
                <b>${best.score.toFixed(1)}/100</b>.
                This balances weather safety
                and travel time.
            `;

        $("status").innerText =
            "✅ Routes calculated successfully.";

    } catch (error) {

        console.error(error);

        $("status").innerText =
            "❌ " + error.message;
    }
}

$("planRoute")
    .addEventListener(
        "click",
        planRoute
    );

/* =========================
   LOAD SAVED PROFILE
========================= */

(function loadSavedProfile() {

    try {

        const saved =
            localStorage.getItem(
                "mausamMindUser"
            );

        if (!saved) return;

        Object.assign(
            user,
            JSON.parse(saved)
        );

        selectedProfession =
            user.profession;

        document
            .querySelectorAll(
                ".profession-card"
            )
            .forEach((button) => {

                button.classList.toggle(
                    "selected",
                    button.dataset.profession
                    === user.profession
                );
            });

        $("nameInput").value =
            user.name;

        $("locationInput").value =
            user.location;

        updatePersonalization();

        $("onboarding")
            .classList.add("hidden");

        $("mainApp")
            .classList.remove("hidden");

        showPage("dashboard");

    } catch (error) {

        console.log(
            "No saved profile found."
        );
    }

})();