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
    condition: "Partly Cloudy",
    aqi: null,
    pm25: null,
    uv: null,
    sunrise: null,
    sunset: null,
    waveHeight: null,
    wavePeriod: null,
    swellHeight: null,
    tideHigh: null,
    tideLow: null,
    tideSource: null
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
    },

    "Outdoor Fitness Enthusiast": {
        theme: "outdoor-fitness",
        icon: "🏃",
        activity: "Outdoor Workout / Run",
        activityDescription: "Use weather, air quality and UV together to choose a safer training window.",
        alertTitle: "Train smarter with weather + air quality",
        alertMessage: "Mausam MIND combines heat, rain, UV and air quality before you head outdoors.",
        score: 72,
        conflict: "Rain, poor air quality, high UV or heat can reduce outdoor exercise comfort and safety.",
        recommendation: "Prefer cooler hours, check AQI before intense exercise, and reduce exposure when UV is high.",
        copilot: "For outdoor fitness, I check rain, heat, UV and AQI together and suggest a safer training window.",
        precautions: [
            ["🫁", "Check air quality", "Avoid intense outdoor sessions when AQI is unhealthy."],
            ["🧴", "Protect from UV", "Use sunscreen, hydration and shade during high-UV periods."],
            ["💧", "Hydrate smart", "Carry water and prefer cooler parts of the day." ]
        ]
    },

    Beachgoer: {
        theme: "beachgoer",
        icon: "🏖️",
        activity: "Beach Day & Coastal Time",
        activityDescription: "Mausam MIND checks rain, UV, AQI, wind and daylight before you head to the beach.",
        alertTitle: "Your beach window is weather-aware",
        alertMessage: "Choose the safer beach window using UV, air quality, rain and wind.",
        score: 78,
        conflict: "Rain, strong wind, high UV or poor air quality can reduce beach comfort and safety.",
        recommendation: "Prefer the morning or late-afternoon window when UV is lower, and recheck rain and wind before leaving.",
        copilot: "For a beach day, I combine rain, UV, AQI, wind and daylight to suggest a better window.",
        precautions: [
            ["☀️", "Watch UV", "Use shade, sunscreen and hydration when UV is high."],
            ["🫁", "Check AQI", "Avoid long outdoor exposure when air quality is poor."],
            ["🌊", "Check the sea", "Review wave and wind conditions before entering the water."]
        ]
    },

    Surfer: {
        theme: "surfer",
        icon: "🏄",
        activity: "Surf Session",
        activityDescription: "Live marine conditions help you judge whether the surf window is suitable.",
        alertTitle: "Surf smarter with marine intelligence",
        alertMessage: "Wave height, wave period, wind, rain and daylight are combined for your session.",
        score: 74,
        conflict: "Wave height and period, strong wind, storms or poor visibility can change surf conditions quickly.",
        recommendation: "Check wave height and period, avoid storm conditions, and use the daylight/tide window shown below.",
        copilot: "For surfing, I prioritize wave height, wave period, wind, storms, daylight and available tide information.",
        precautions: [
            ["🌊", "Read the waves", "Use wave height and period together instead of judging wave height alone."],
            ["💨", "Watch wind", "Strong or changing winds can make conditions less predictable."],
            ["🌅", "Use the daylight window", "Plan your session around sunrise, sunset and the available tide window."]
        ]
    },

    "Event Planner": {
        theme: "event-planner",
        icon: "🎪",
        activity: "Outdoor Event Planning",
        activityDescription: "Turn forecast conditions into a go/no-go decision, setup window and guest comfort plan.",
        alertTitle: "Build a weather-ready event plan",
        alertMessage: "Rain, heat, wind, UV and daylight can affect setup, guests and equipment.",
        score: 76,
        conflict: "Rain, strong wind, heat or poor air quality can disrupt an outdoor event and guest experience.",
        recommendation: "Use the setup window before rain risk, keep a backup indoor plan, and schedule outdoor activity around UV and sunset.",
        copilot: "For events, I convert weather into setup timing, guest comfort alerts and a backup-plan recommendation.",
        precautions: [
            ["⛺", "Protect the setup", "Secure tents, signage and electrical equipment before wind or rain increases."],
            ["👥", "Plan guest comfort", "Provide shade, hydration and an indoor fallback during heat or poor air quality."],
            ["🌇", "Use daylight smartly", "Align setup, photography and guest activities with sunrise/sunset conditions."]
        ]
    }
};

/* =========================
   BACKEND SAFETY API
========================= */

const API_BASE_URL =
    window.MAUSAM_API_URL ||
    ((window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
        ? "http://127.0.0.1:8000"
        : "");

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
    "Street Vendor": "shopkeeper",
    "Outdoor Fitness Enthusiast": null,
    "Beachgoer": null,
    "Surfer": null,
    "Event Planner": null
};

function getOutdoorFitnessSuitability() {
    let score = 100;
    score -= Math.min(28, Number(weather.rain || 0) * 0.28);
    if (weather.temperature > 34) score -= Math.min(18, (weather.temperature - 34) * 3);
    else if (weather.temperature > 30) score -= Math.min(8, (weather.temperature - 30) * 2);
    if (weather.wind > 30) score -= 10;
    else if (weather.wind > 22) score -= 5;
    if (weather.aqi != null) {
        if (weather.aqi > 200) score -= 28;
        else if (weather.aqi > 150) score -= 22;
        else if (weather.aqi > 100) score -= 14;
        else if (weather.aqi > 50) score -= 6;
    }
    if (weather.uv != null) {
        if (weather.uv >= 11) score -= 18;
        else if (weather.uv >= 8) score -= 12;
        else if (weather.uv >= 6) score -= 6;
    }
    return Math.max(0, Math.min(100, Math.round(score)));
}

function scoreBeachgoer() {
    let score = 100;
    score -= Math.min(30, Number(weather.rain || 0) * 0.30);
    if (weather.temperature > 36) score -= 18; else if (weather.temperature > 32) score -= 10;
    if (weather.wind > 35) score -= 14; else if (weather.wind > 25) score -= 7;
    if (weather.aqi != null && weather.aqi > 100) score -= Math.min(22, (weather.aqi - 100) * 0.22);
    if (weather.uv != null && weather.uv >= 11) score -= 18; else if (weather.uv >= 8) score -= 12; else if (weather.uv >= 6) score -= 6;
    return Math.max(0, Math.min(100, Math.round(score)));
}

function scoreSurfer() {
    let score = 78;
    const wave = Number(weather.waveHeight || 0);
    const period = Number(weather.wavePeriod || 0);
    if (wave < 0.3) score -= 18;
    else if (wave >= 0.6 && wave <= 2.5) score += 5;
    else if (wave > 3.5) score -= 20;
    if (period > 0 && period < 6) score -= 10;
    if (period >= 8 && period <= 16) score += 5;
    if (weather.wind > 35) score -= 18; else if (weather.wind > 25) score -= 9;
    if (weather.rain > 70) score -= 12;
    if ([95,96,99].includes(weather.weatherCode)) score -= 25;
    return Math.max(0, Math.min(100, Math.round(score)));
}

function scoreEventPlanner() {
    let score = 100;
    score -= Math.min(35, Number(weather.rain || 0) * 0.35);
    if (weather.wind > 35) score -= 18; else if (weather.wind > 25) score -= 9;
    if (weather.temperature > 36) score -= 15; else if (weather.temperature > 32) score -= 7;
    if (weather.aqi != null && weather.aqi > 150) score -= 18; else if (weather.aqi != null && weather.aqi > 100) score -= 8;
    return Math.max(0, Math.min(100, Math.round(score)));
}

function getPersonalizedScore() {
    if (user.profession === "Outdoor Fitness Enthusiast") return getOutdoorFitnessSuitability();
    if (user.profession === "Beachgoer") return scoreBeachgoer();
    if (user.profession === "Surfer") return scoreSurfer();
    if (user.profession === "Event Planner") return scoreEventPlanner();
    return (professionData[user.profession] || professionData.Student).score;
}

function formatTime(iso) {
    if (!iso) return "—";
    try {
        return new Date(iso).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    } catch (_) { return "—"; }
}

function seaConditionFromWave(height, period) {
    if (height == null) return "Unavailable";
    if (height < 0.5) return "Calm";
    if (height < 1.25) return "Gentle";
    if (height < 2.5) return period >= 8 ? "Good surf" : "Moderate";
    if (height < 4) return "Rough";
    return "Very rough";
}

function updateEnvironmentalUI() {
    updateText("sunriseTime", formatTime(weather.sunrise));
    updateText("sunsetTime", formatTime(weather.sunset));
    updateText("aqiValue", weather.aqi ?? "—");
    updateText("aqiLabelText", weather.aqi == null ? "AQI unavailable" : aqiLabel(weather.aqi));
    updateText("uvValue", weather.uv ?? "—");
    updateText("uvLabelText", weather.uv == null ? "UV unavailable" : uvLabel(weather.uv));
    updateText("waveHeight", weather.waveHeight == null ? "—" : `${Number(weather.waveHeight).toFixed(1)} m`);
    updateText("waveCondition", seaConditionFromWave(weather.waveHeight, weather.wavePeriod));
    updateText("tideHighValue", weather.tideHigh || "Not available");
    updateText("tideLowValue", weather.tideLow || "Not available");
    updateText("planSunrise", formatTime(weather.sunrise));
    updateText("planSunset", formatTime(weather.sunset));
    updateText("planAqi", weather.aqi ?? "—");
    updateText("planUv", weather.uv ?? "—");
    updateText("planWave", weather.waveHeight == null ? "—" : `${Number(weather.waveHeight).toFixed(1)} m`);
    updateText("planTideHigh", weather.tideHigh || "Not available");
    updateText("planTideLow", weather.tideLow || "Not available");
}

function updateDecisionEngine() {
    const data = professionData[user.profession] || professionData.Student;
    const score = getPersonalizedScore();
    updateText("decisionTitle", `${data.icon} ${data.activity} decision`);
    let detail = data.recommendation;
    if (user.profession === "Surfer") detail = `${detail} Current sea: ${seaConditionFromWave(weather.waveHeight, weather.wavePeriod)} · ${weather.waveHeight == null ? "wave height unavailable" : `${Number(weather.waveHeight).toFixed(1)} m waves`} · ${weather.wavePeriod == null ? "period unavailable" : `${Number(weather.wavePeriod).toFixed(1)} s period`} · next high tide ${weather.tideHigh || "live tide unavailable"}, next low tide ${weather.tideLow || "live tide unavailable"}.`;
    if (user.profession === "Beachgoer") detail = `${detail} UV ${weather.uv ?? "—"} (${uvLabel(weather.uv)}), AQI ${weather.aqi ?? "—"}.`;
    if (user.profession === "Event Planner") detail = `${detail} Best planning anchor: sunset ${formatTime(weather.sunset)}.`;
    updateText("decisionText", detail);
    updateText("decisionChip", `${score}/100 FIT`);
}

function aqiLabel(aqi) {
    if (aqi == null) return "Unavailable";
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for sensitive groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very unhealthy";
    return "Hazardous";
}

function uvLabel(uv) {
    if (uv == null) return "Unavailable";
    if (uv < 3) return "Low";
    if (uv < 6) return "Moderate";
    if (uv < 8) return "High";
    if (uv < 11) return "Very high";
    return "Extreme";
}

async function refreshSafetyAnalysis() {
    const backendProfile = BACKEND_PROFILE_MAP[user.profession];
    const baseline = professionData[user.profession] || professionData.Student;

    // Always show a usable baseline immediately.
    const baselineScore = user.profession === "Outdoor Fitness Enthusiast"
        ? getOutdoorFitnessSuitability()
        : baseline.score;
    updateText("score", baselineScore);
    const liveRecommendation = user.profession === "Outdoor Fitness Enthusiast"
        ? `Current outdoor fitness suitability is ${baselineScore}/100. AQI ${weather.aqi ?? "—"} (${aqiLabel(weather.aqi)}), UV ${weather.uv ?? "—"} (${uvLabel(weather.uv)}). Prefer a cooler, lower-exposure window when either index is high.`
        : baseline.recommendation;
    updateText("recommendation", liveRecommendation);

    if (!backendProfile || !API_BASE_URL || user.profession === "Outdoor Fitness Enthusiast") return;

    try {
        const params = new URLSearchParams({
            profile: backendProfile,
            rain: weather.rain,
            wind: weather.wind,
            temp: weather.temperature,
            humidity: weather.humidity
        });

        const response = await fetch(`${API_BASE_URL}/analyze?${params.toString()}`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) throw new Error(`Safety API returned ${response.status}`);

        const result = await response.json();

        // Backend returns a risk/safety score where a LOW value means LOW risk.
        // The product UI intentionally presents the opposite: WEATHER SUITABILITY,
        // where a HIGH value means the conditions are better for the selected profession.
        const riskScore = Math.max(0, Math.min(100, Number(result.safety_score ?? 0)));
        const suitability = Math.round(100 - riskScore);
        updateText("score", suitability);
        updateText("recommendation", result.recommendation);

        updateSuitabilityVisual(suitability);
    } catch (error) {
        console.warn("Safety API unavailable; using frontend baseline.", error);
        const badge = $("statusBadge");
        if (badge) {
            badge.textContent = "DEMO";
            badge.style.background = "#64748b";
            badge.style.color = "white";
        }
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
        document.body.dataset.profession = profession;
    } else {
        delete document.body.dataset.theme;
        delete document.body.dataset.profession;
    }

    // The photo, accent, glow and surface are declared in CSS so the theme changes instantly.
    // This class is useful for any future profession-specific components.
    document.body.classList.toggle("profession-selected", !!data);
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
    loadLiveWeather();

    $("onboarding").classList.add("hidden");
    $("mainApp").classList.remove("hidden");

    showPage("dashboard");
});

/* =========================
   UPDATE TEXT
========================= */

const translations = {
  en: {},
  hi: {}, hinglish: {}, bn: {}, te: {}, mr: {}, ta: {}, gu: {}, kn: {}, ml: {}, pa: {}, as: {}, or: {}, ur: {}, ne: {}, kok: {}, mai: {}
};

/* =========================
   INDIA-FIRST TRANSLATION ENGINE
   The old implementation translated only a small handful of exact nodes.
   This pack covers the dashboard/navigation/decision UI and translates direct
   text nodes without touching dynamic weather values or user names.
========================= */
const INDIA_UI = {
  hi:{
    "Weather that understands you.":"ऐसा मौसम जो आपको समझे।","LET'S GET STARTED":"शुरू करते हैं","Make weather":"मौसम को","personal.":"आपके लिए व्यक्तिगत बनाएं।","Tell us a little about yourself. We'll turn forecasts into decisions that matter to you.":"अपने बारे में थोड़ा बताएं। हम मौसम के पूर्वानुमान को आपके लिए उपयोगी फैसलों में बदलेंगे।","Your name":"आपका नाम","Your location":"आपका स्थान","Select your city":"अपना शहर चुनें","What do you do?":"आप क्या करते हैं?","Create My Weather Profile":"मेरा वेदर प्रोफाइल बनाएं","PERSONALIZED FOR YOU":"आपके लिए व्यक्तिगत","Home":"होम","My Plans":"मेरी योजनाएं","Impact Map":"इम्पैक्ट मैप","Smart Route":"स्मार्ट रूट","Copilot":"कोपायलट","Change language":"भाषा बदलें","Good morning,":"सुप्रभात,","Here's what today's weather means for you.":"आज का मौसम आपके लिए क्या मायने रखता है, यहां देखें।","Your personalized alert":"आपका व्यक्तिगत अलर्ट","Precautions for you":"आपके लिए सावधानियां","Weather-aware plan":"मौसम के अनुसार योजना","View plan →":"योजना देखें →","Need a weather decision?":"मौसम से जुड़ा फैसला लेना है?","Ask Mausam Copilot for personalized advice.":"व्यक्तिगत सलाह के लिए Mausam Copilot से पूछें।","Ask Copilot":"Copilot से पूछें","Weather Impact":"मौसम का प्रभाव","Here's how today's conditions affect you.":"आज की परिस्थितियां आपको कैसे प्रभावित करती हैं, यहां देखें।","What you should do":"आपको क्या करना चाहिए","OUR RECOMMENDATION":"हमारी सलाह","View Impact Map →":"इम्पैक्ट मैप देखें →","Impact Map":"इम्पैक्ट मैप","Inspect local conditions and see how they affect your workday.":"स्थानीय परिस्थितियां देखें और जानें कि वे आपके काम को कैसे प्रभावित करती हैं।","Check Weather":"मौसम देखें","Search a place":"स्थान खोजें","Compare Smart Routes →":"स्मार्ट रूट की तुलना करें →","Smart Route 🚗":"स्मार्ट रूट 🚗","Find Routes":"रूट खोजें","Check Weather Anywhere":"कहीं भी मौसम देखें","Map legend:":"मैप संकेत:","Better weather":"बेहतर मौसम","Moderate":"मध्यम","Poor weather":"खराब मौसम","Ready to plan.":"योजना बनाने के लिए तैयार।","Smart Recommendation":"स्मार्ट सलाह","Your best route will appear here.":"आपका सबसे अच्छा रूट यहां दिखाई देगा।","YOUR WEATHER ASSISTANT":"आपका मौसम सहायक","Ask about weather, plans, routes and activities.":"मौसम, योजनाओं, रूट और गतिविधियों के बारे में पूछें।","TODAY'S ADVICE":"आज की सलाह","Send":"भेजें","Higher = better suitability":"जितना ज्यादा स्कोर, उतनी बेहतर उपयुक्तता","WEATHER SUITABILITY":"मौसम की उपयुक्तता","PERSONALIZED WEATHER DECISION":"व्यक्तिगत मौसम निर्णय","LIVE":"लाइव","Sunrise":"सूर्योदय","Sunset":"सूर्यास्त","AQI":"वायु गुणवत्ता","UV Index":"UV इंडेक्स","Sea condition":"समुद्र की स्थिति","Wave height":"लहर की ऊंचाई","Next high tide · model":"अगली हाई टाइड · मॉडल","Next low tide · model":"अगली लो टाइड · मॉडल","Weather Alert":"मौसम अलर्ट","Your activity":"आपकी गतिविधि","My Plans":"मेरी योजनाएं","See how weather affects your day.":"देखें मौसम आपके दिन को कैसे प्रभावित करता है।"
  },
  bn:{"Weather that understands you.":"যে আবহাওয়া আপনাকে বোঝে।","LET'S GET STARTED":"শুরু করি","Your name":"আপনার নাম","Your location":"আপনার অবস্থান","Select your city":"শহর নির্বাচন করুন","What do you do?":"আপনি কী করেন?","Create My Weather Profile":"আমার আবহাওয়া প্রোফাইল তৈরি করুন","PERSONALIZED FOR YOU":"আপনার জন্য ব্যক্তিগত","Home":"হোম","My Plans":"আমার পরিকল্পনা","Impact Map":"প্রভাব মানচিত্র","Smart Route":"স্মার্ট রুট","Copilot":"কোপাইলট","Change language":"ভাষা পরিবর্তন","Good morning,":"সুপ্রভাত,","Your personalized alert":"আপনার ব্যক্তিগত সতর্কতা","Precautions for you":"আপনার জন্য সতর্কতা","Weather Impact":"আবহাওয়ার প্রভাব","What you should do":"আপনার কী করা উচিত","OUR RECOMMENDATION":"আমাদের পরামর্শ","Check Weather":"আবহাওয়া দেখুন","Find Routes":"রুট খুঁজুন","Better weather":"ভালো আবহাওয়া","Moderate":"মাঝারি","Poor weather":"খারাপ আবহাওয়া","Higher = better suitability":"বেশি স্কোর = বেশি উপযোগী","WEATHER SUITABILITY":"আবহাওয়ার উপযোগিতা","Sunrise":"সূর্যোদয়","Sunset":"সূর্যাস্ত","AQI":"বায়ুর মান","UV Index":"UV সূচক","Wave height":"ঢেউয়ের উচ্চতা","Sea condition":"সমুদ্রের অবস্থা","Send":"পাঠান"},
  te:{"Weather that understands you.":"మిమ్మల్ని అర్థం చేసుకునే వాతావరణం.","LET'S GET STARTED":"ప్రారంభిద్దాం","Your name":"మీ పేరు","Your location":"మీ స్థానం","Select your city":"మీ నగరాన్ని ఎంచుకోండి","What do you do?":"మీరు ఏమి చేస్తారు?","Create My Weather Profile":"నా వాతావరణ ప్రొఫైల్ సృష్టించండి","PERSONALIZED FOR YOU":"మీ కోసం వ్యక్తిగతీకరించబడింది","Home":"హోమ్","My Plans":"నా ప్రణాళికలు","Impact Map":"ప్రభావ మ్యాప్","Smart Route":"స్మార్ట్ రూట్","Copilot":"కోపైలట్","Change language":"భాష మార్చండి","Good morning,":"శుభోదయం,","Weather Impact":"వాతావరణ ప్రభావం","OUR RECOMMENDATION":"మా సూచన","What you should do":"మీరు ఏమి చేయాలి","Check Weather":"వాతావరణాన్ని చూడండి","Find Routes":"రూట్లు కనుగొనండి","Better weather":"మంచి వాతావరణం","Moderate":"మధ్యస్థం","Poor weather":"ప్రతికూల వాతావరణం","Higher = better suitability":"ఎక్కువ స్కోర్ = ఎక్కువ అనుకూలత","WEATHER SUITABILITY":"వాతావరణ అనుకూలత","Sunrise":"సూర్యోదయం","Sunset":"సూర్యాస్తమయం","AQI":"గాలి నాణ్యత","UV Index":"UV సూచిక","Wave height":"అలల ఎత్తు","Sea condition":"సముద్ర పరిస్థితి","Send":"పంపండి"},
  mr:{"Weather that understands you.":"तुम्हाला समजणारे हवामान.","LET'S GET STARTED":"सुरुवात करूया","Your name":"तुमचे नाव","Your location":"तुमचे स्थान","Select your city":"तुमचे शहर निवडा","What do you do?":"तुम्ही काय करता?","Create My Weather Profile":"माझे हवामान प्रोफाइल तयार करा","PERSONALIZED FOR YOU":"तुमच्यासाठी वैयक्तिक","Home":"मुख्यपृष्ठ","My Plans":"माझ्या योजना","Impact Map":"परिणाम नकाशा","Smart Route":"स्मार्ट मार्ग","Copilot":"कोपायलट","Change language":"भाषा बदला","Good morning,":"शुभ प्रभात,","Weather Impact":"हवामानाचा परिणाम","OUR RECOMMENDATION":"आमची शिफारस","What you should do":"तुम्ही काय करावे","Check Weather":"हवामान तपासा","Find Routes":"मार्ग शोधा","Better weather":"चांगले हवामान","Moderate":"मध्यम","Poor weather":"खराब हवामान","Higher = better suitability":"जास्त स्कोअर = जास्त अनुकूलता","WEATHER SUITABILITY":"हवामान अनुकूलता","Sunrise":"सूर्योदय","Sunset":"सूर्यास्त","AQI":"हवेची गुणवत्ता","UV Index":"UV निर्देशांक","Wave height":"लाटांची उंची","Sea condition":"समुद्राची स्थिती","Send":"पाठवा"},
  ta:{"Weather that understands you.":"உங்களைப் புரிந்துகொள்ளும் வானிலை.","LET'S GET STARTED":"தொடங்கலாம்","Your name":"உங்கள் பெயர்","Your location":"உங்கள் இருப்பிடம்","Select your city":"உங்கள் நகரத்தைத் தேர்ந்தெடுக்கவும்","What do you do?":"நீங்கள் என்ன செய்கிறீர்கள்?","Create My Weather Profile":"என் வானிலை சுயவிவரத்தை உருவாக்கு","PERSONALIZED FOR YOU":"உங்களுக்காக தனிப்பயனாக்கப்பட்டது","Home":"முகப்பு","My Plans":"என் திட்டங்கள்","Impact Map":"தாக்க வரைபடம்","Smart Route":"ஸ்மார்ட் பாதை","Copilot":"கோபைலட்","Change language":"மொழியை மாற்றவும்","Good morning,":"காலை வணக்கம்,","Weather Impact":"வானிலை தாக்கம்","OUR RECOMMENDATION":"எங்கள் பரிந்துரை","What you should do":"நீங்கள் செய்ய வேண்டியது","Check Weather":"வானிலையைப் பார்க்கவும்","Find Routes":"பாதைகளைக் கண்டறியவும்","Better weather":"சிறந்த வானிலை","Moderate":"மிதமான","Poor weather":"மோசமான வானிலை","Higher = better suitability":"அதிக மதிப்பெண் = அதிக பொருத்தம்","WEATHER SUITABILITY":"வானிலை பொருத்தம்","Sunrise":"சூரிய உதயம்","Sunset":"சூரிய அஸ்தமனம்","AQI":"காற்றுத் தரம்","UV Index":"UV குறியீடு","Wave height":"அலை உயரம்","Sea condition":"கடல் நிலை","Send":"அனுப்பு"},
  gu:{"Weather that understands you.":"તમને સમજનાર હવામાન.","LET'S GET STARTED":"ચાલો શરૂ કરીએ","Your name":"તમારું નામ","Your location":"તમારું સ્થાન","Select your city":"તમારું શહેર પસંદ કરો","What do you do?":"તમે શું કરો છો?","Create My Weather Profile":"મારું હવામાન પ્રોફાઇલ બનાવો","PERSONALIZED FOR YOU":"તમારા માટે વ્યક્તિગત","Home":"હોમ","My Plans":"મારી યોજનાઓ","Impact Map":"અસર નકશો","Smart Route":"સ્માર્ટ રૂટ","Copilot":"કોપાઇલટ","Change language":"ભાષા બદલો","Good morning,":"સુપ્રભાત,","Weather Impact":"હવામાનની અસર","OUR RECOMMENDATION":"અમારી ભલામણ","What you should do":"તમારે શું કરવું જોઈએ","Check Weather":"હવામાન તપાસો","Find Routes":"રૂટ શોધો","Better weather":"સારું હવામાન","Moderate":"મધ્યમ","Poor weather":"ખરાબ હવામાન","Higher = better suitability":"વધુ સ્કોર = વધુ યોગ્યતા","WEATHER SUITABILITY":"હવામાન યોગ્યતા","Sunrise":"સૂર્યોદય","Sunset":"સૂર્યાસ્ત","AQI":"હવાની ગુણવત્તા","UV Index":"UV સૂચકાંક","Wave height":"મોજાની ઊંચાઈ","Sea condition":"સમુદ્રની સ્થિતિ","Send":"મોકલો"},
  kn:{"Weather that understands you.":"ನಿಮ್ಮನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಹವಾಮಾನ.","LET'S GET STARTED":"ಪ್ರಾರಂಭಿಸೋಣ","Your name":"ನಿಮ್ಮ ಹೆಸರು","Your location":"ನಿಮ್ಮ ಸ್ಥಳ","Select your city":"ನಿಮ್ಮ ನಗರ ಆಯ್ಕೆಮಾಡಿ","What do you do?":"ನೀವು ಏನು ಮಾಡುತ್ತೀರಿ?","Create My Weather Profile":"ನನ್ನ ಹವಾಮಾನ ಪ್ರೊಫೈಲ್ ರಚಿಸಿ","PERSONALIZED FOR YOU":"ನಿಮಗಾಗಿ ವೈಯಕ್ತೀಕರಿಸಲಾಗಿದೆ","Home":"ಮುಖಪುಟ","My Plans":"ನನ್ನ ಯೋಜನೆಗಳು","Impact Map":"ಪರಿಣಾಮ ನಕ್ಷೆ","Smart Route":"ಸ್ಮಾರ್ಟ್ ಮಾರ್ಗ","Copilot":"ಕೋಪೈಲಟ್","Change language":"ಭಾಷೆ ಬದಲಿಸಿ","Good morning,":"ಶುಭೋದಯ,","Weather Impact":"ಹವಾಮಾನದ ಪರಿಣಾಮ","OUR RECOMMENDATION":"ನಮ್ಮ ಸಲಹೆ","What you should do":"ನೀವು ಏನು ಮಾಡಬೇಕು","Check Weather":"ಹವಾಮಾನ ಪರಿಶೀಲಿಸಿ","Find Routes":"ಮಾರ್ಗಗಳನ್ನು ಹುಡುಕಿ","Better weather":"ಉತ್ತಮ ಹವಾಮಾನ","Moderate":"ಮಧ್ಯಮ","Poor weather":"ಕೆಟ್ಟ ಹವಾಮಾನ","Higher = better suitability":"ಹೆಚ್ಚಿನ ಸ್ಕೋರ್ = ಹೆಚ್ಚಿನ ಹೊಂದಾಣಿಕೆ","WEATHER SUITABILITY":"ಹವಾಮಾನ ಹೊಂದಾಣಿಕೆ","Sunrise":"ಸೂರ್ಯೋದಯ","Sunset":"ಸೂರ್ಯಾಸ್ತ","AQI":"ಗಾಳಿಯ ಗುಣಮಟ್ಟ","UV Index":"UV ಸೂಚ್ಯಂಕ","Wave height":"ಅಲೆಯ ಎತ್ತರ","Sea condition":"ಸಮುದ್ರದ ಸ್ಥಿತಿ","Send":"ಕಳುಹಿಸಿ"},
  ml:{"Weather that understands you.":"നിങ്ങളെ മനസ്സിലാക്കുന്ന കാലാവസ്ഥ.","LET'S GET STARTED":"തുടങ്ങാം","Your name":"നിങ്ങളുടെ പേര്","Your location":"നിങ്ങളുടെ സ്ഥലം","Select your city":"നഗരം തിരഞ്ഞെടുക്കുക","What do you do?":"നിങ്ങൾ എന്ത് ചെയ്യുന്നു?","Create My Weather Profile":"എന്റെ കാലാവസ്ഥാ പ്രൊഫൈൽ സൃഷ്ടിക്കുക","PERSONALIZED FOR YOU":"നിങ്ങൾക്കായി വ്യക്തിഗതം","Home":"ഹോം","My Plans":"എന്റെ പദ്ധതികൾ","Impact Map":"സ്വാധീന മാപ്പ്","Smart Route":"സ്മാർട്ട് റൂട്ട്","Copilot":"കോ-പൈലറ്റ്","Change language":"ഭാഷ മാറ്റുക","Good morning,":"സുപ്രഭാതം,","Weather Impact":"കാലാവസ്ഥാ സ്വാധീനം","OUR RECOMMENDATION":"ഞങ്ങളുടെ നിർദ്ദേശം","What you should do":"നിങ്ങൾ ചെയ്യേണ്ടത്","Check Weather":"കാലാവസ്ഥ പരിശോധിക്കുക","Find Routes":"റൂട്ടുകൾ കണ്ടെത്തുക","Better weather":"നല്ല കാലാവസ്ഥ","Moderate":"മിതമായ","Poor weather":"മോശം കാലാവസ്ഥ","Higher = better suitability":"കൂടിയ സ്കോർ = കൂടുതൽ അനുയോജ്യത","WEATHER SUITABILITY":"കാലാവസ്ഥാ അനുയോജ്യത","Sunrise":"സൂര്യോദയം","Sunset":"സൂര്യാസ്തമയം","AQI":"വായു ഗുണനിലവാരം","UV Index":"UV സൂചിക","Wave height":"തിരമാലയുടെ ഉയരം","Sea condition":"കടൽ സ്ഥിതി","Send":"അയയ്ക്കുക"},
  pa:{"Weather that understands you.":"ਤੁਹਾਨੂੰ ਸਮਝਣ ਵਾਲਾ ਮੌਸਮ।","LET'S GET STARTED":"ਚਲੋ ਸ਼ੁਰੂ ਕਰੀਏ","Your name":"ਤੁਹਾਡਾ ਨਾਮ","Your location":"ਤੁਹਾਡੀ ਥਾਂ","Select your city":"ਆਪਣਾ ਸ਼ਹਿਰ ਚੁਣੋ","What do you do?":"ਤੁਸੀਂ ਕੀ ਕਰਦੇ ਹੋ?","Create My Weather Profile":"ਮੇਰਾ ਮੌਸਮ ਪ੍ਰੋਫਾਈਲ ਬਣਾਓ","PERSONALIZED FOR YOU":"ਤੁਹਾਡੇ ਲਈ ਨਿੱਜੀ","Home":"ਹੋਮ","My Plans":"ਮੇਰੀਆਂ ਯੋਜਨਾਵਾਂ","Impact Map":"ਪ੍ਰਭਾਵ ਨਕਸ਼ਾ","Smart Route":"ਸਮਾਰਟ ਰੂਟ","Copilot":"ਕੋਪਾਇਲਟ","Change language":"ਭਾਸ਼ਾ ਬਦਲੋ","Good morning,":"ਸਤ ਸ੍ਰੀ ਅਕਾਲ,","Weather Impact":"ਮੌਸਮ ਦਾ ਪ੍ਰਭਾਵ","OUR RECOMMENDATION":"ਸਾਡੀ ਸਿਫਾਰਸ਼","What you should do":"ਤੁਹਾਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ","Check Weather":"ਮੌਸਮ ਵੇਖੋ","Find Routes":"ਰੂਟ ਲੱਭੋ","Better weather":"ਵਧੀਆ ਮੌਸਮ","Moderate":"ਦਰਮਿਆਨਾ","Poor weather":"ਖਰਾਬ ਮੌਸਮ","Higher = better suitability":"ਵੱਧ ਸਕੋਰ = ਵੱਧ ਅਨੁਕੂਲਤਾ","WEATHER SUITABILITY":"ਮੌਸਮ ਅਨੁਕੂਲਤਾ","Sunrise":"ਸੂਰਜ ਚੜ੍ਹਨਾ","Sunset":"ਸੂਰਜ ਡੁੱਬਣਾ","AQI":"ਹਵਾ ਦੀ ਗੁਣਵੱਤਾ","UV Index":"UV ਸੂਚਕ","Wave height":"ਲਹਿਰ ਦੀ ਉਚਾਈ","Sea condition":"ਸਮੁੰਦਰ ਦੀ ਸਥਿਤੀ","Send":"ਭੇਜੋ"},
  as:{"Weather that understands you.":"আপোনাক বুজি পোৱা বতৰ।","LET'S GET STARTED":"আৰম্ভ কৰোঁ","Your name":"আপোনাৰ নাম","Your location":"আপোনাৰ স্থান","Select your city":"আপোনাৰ চহৰ বাছক","What do you do?":"আপুনি কি কৰে?","Create My Weather Profile":"মোৰ বতৰ প্ৰফাইল তৈয়াৰ কৰক","PERSONALIZED FOR YOU":"আপোনাৰ বাবে ব্যক্তিগত","Home":"হোম","My Plans":"মোৰ পৰিকল্পনা","Impact Map":"প্ৰভাৱ মানচিত্ৰ","Smart Route":"স্মাৰ্ট ৰুট","Copilot":"কোপাইলট","Change language":"ভাষা সলনি কৰক","Good morning,":"সুপ্ৰভাত,","Weather Impact":"বতৰৰ প্ৰভাৱ","OUR RECOMMENDATION":"আমাৰ পৰামৰ্শ","What you should do":"আপুনি কি কৰিব লাগে","Check Weather":"বতৰ চাওক","Find Routes":"ৰুট বিচাৰক","Better weather":"ভাল বতৰ","Moderate":"মধ্যম","Poor weather":"বেয়া বতৰ","Higher = better suitability":"বেছি স্ক’ৰ = বেছি উপযোগিতা","WEATHER SUITABILITY":"বতৰৰ উপযোগিতা","Sunrise":"সূৰ্যোদয়","Sunset":"সূৰ্যাস্ত","AQI":"বায়ুৰ মান","UV Index":"UV সূচক","Wave height":"ঢৌৰ উচ্চতা","Sea condition":"সাগৰৰ অৱস্থা","Send":"পঠিয়াওক"},
  or:{"Weather that understands you.":"ଆପଣଙ୍କୁ ବୁଝୁଥିବା ପାଣିପାଗ।","LET'S GET STARTED":"ଆରମ୍ଭ କରିବା","Your name":"ଆପଣଙ୍କ ନାମ","Your location":"ଆପଣଙ୍କ ସ୍ଥାନ","Select your city":"ଆପଣଙ୍କ ସହର ବାଛନ୍ତୁ","What do you do?":"ଆପଣ କଣ କରନ୍ତି?","Create My Weather Profile":"ମୋ ପାଣିପାଗ ପ୍ରୋଫାଇଲ୍ ତିଆରି କରନ୍ତୁ","PERSONALIZED FOR YOU":"ଆପଣଙ୍କ ପାଇଁ ବ୍ୟକ୍ତିଗତ","Home":"ହୋମ୍","My Plans":"ମୋ ଯୋଜନା","Impact Map":"ପ୍ରଭାବ ମାନଚିତ୍ର","Smart Route":"ସ୍ମାର୍ଟ ରୁଟ୍","Copilot":"କୋପାଇଲଟ୍","Change language":"ଭାଷା ବଦଳାନ୍ତୁ","Good morning,":"ଶୁଭ ସକାଳ,","Weather Impact":"ପାଣିପାଗ ପ୍ରଭାବ","OUR RECOMMENDATION":"ଆମ ସୁପାରିଶ","What you should do":"ଆପଣ କଣ କରିବେ","Check Weather":"ପାଣିପାଗ ଦେଖନ୍ତୁ","Find Routes":"ରୁଟ୍ ଖୋଜନ୍ତୁ","Better weather":"ଭଲ ପାଣିପାଗ","Moderate":"ମଧ୍ୟମ","Poor weather":"ଖରାପ ପାଣିପାଗ","Higher = better suitability":"ଅଧିକ ସ୍କୋର = ଅଧିକ ଉପଯୋଗୀ","WEATHER SUITABILITY":"ପାଣିପାଗ ଉପଯୋଗିତା","Sunrise":"ସୂର୍ଯ୍ୟୋଦୟ","Sunset":"ସୂର୍ଯ୍ୟାସ୍ତ","AQI":"ବାୟୁ ଗୁଣବତ୍ତା","UV Index":"UV ସୂଚକ","Wave height":"ତରଙ୍ଗ ଉଚ୍ଚତା","Sea condition":"ସମୁଦ୍ର ସ୍ଥିତି","Send":"ପଠାନ୍ତୁ"},
  ur:{"Weather that understands you.":"آپ کو سمجھنے والا موسم۔","LET'S GET STARTED":"شروع کریں","Your name":"آپ کا نام","Your location":"آپ کی جگہ","Select your city":"اپنا شہر منتخب کریں","What do you do?":"آپ کیا کرتے ہیں؟","Create My Weather Profile":"میرا موسمی پروفائل بنائیں","PERSONALIZED FOR YOU":"آپ کے لیے ذاتی نوعیت","Home":"ہوم","My Plans":"میرے منصوبے","Impact Map":"اثرات کا نقشہ","Smart Route":"اسمارٹ روٹ","Copilot":"کوپائلٹ","Change language":"زبان تبدیل کریں","Good morning,":"صبح بخیر،","Weather Impact":"موسم کا اثر","OUR RECOMMENDATION":"ہماری سفارش","What you should do":"آپ کو کیا کرنا چاہیے","Check Weather":"موسم چیک کریں","Find Routes":"روٹس تلاش کریں","Better weather":"بہتر موسم","Moderate":"درمیانہ","Poor weather":"خراب موسم","Higher = better suitability":"زیادہ اسکور = زیادہ موزونیت","WEATHER SUITABILITY":"موسمی موزونیت","Sunrise":"طلوع آفتاب","Sunset":"غروب آفتاب","AQI":"ہوا کا معیار","UV Index":"UV انڈیکس","Wave height":"لہر کی اونچائی","Sea condition":"سمندر کی حالت","Send":"بھیجیں"},
  ne:{"Weather that understands you.":"तपाईंलाई बुझ्ने मौसम।","LET'S GET STARTED":"सुरु गरौं","Your name":"तपाईंको नाम","Your location":"तपाईंको स्थान","Select your city":"आफ्नो शहर छान्नुहोस्","What do you do?":"तपाईं के गर्नुहुन्छ?","Create My Weather Profile":"मेरो मौसम प्रोफाइल बनाउनुहोस्","PERSONALIZED FOR YOU":"तपाईंका लागि व्यक्तिगत","Home":"गृहपृष्ठ","My Plans":"मेरा योजनाहरू","Impact Map":"प्रभाव नक्सा","Smart Route":"स्मार्ट रुट","Copilot":"कोपाइलट","Change language":"भाषा बदल्नुहोस्","Good morning,":"शुभ प्रभात,","Weather Impact":"मौसमको प्रभाव","OUR RECOMMENDATION":"हाम्रो सुझाव","What you should do":"तपाईंले के गर्नुपर्छ","Check Weather":"मौसम जाँच गर्नुहोस्","Find Routes":"रुट खोज्नुहोस्","Better weather":"राम्रो मौसम","Moderate":"मध्यम","Poor weather":"खराब मौसम","Higher = better suitability":"उच्च स्कोर = उच्च उपयुक्तता","WEATHER SUITABILITY":"मौसम उपयुक्तता","Sunrise":"सूर्योदय","Sunset":"सूर्यास्त","AQI":"हावाको गुणस्तर","UV Index":"UV सूचक","Wave height":"छालको उचाइ","Sea condition":"समुद्रको अवस्था","Send":"पठाउनुहोस्"},
  kok:{"Weather that understands you.":"तुमका समजपी हवामान.","LET'S GET STARTED":"चला सुरू करात","Your name":"तुमचें नांव","Your location":"तुमचें स्थान","Select your city":"आपलो शार निवडात","What do you do?":"तुमी कितें करतात?","Create My Weather Profile":"म्हाजें हवामान प्रोफाइल तयार करात","PERSONALIZED FOR YOU":"तुमका खातीर वैयक्तिक","Home":"मुखपान","My Plans":"म्हजे येवजणो","Impact Map":"परिणाम नकाशो","Smart Route":"स्मार्ट मार्ग","Copilot":"कोपायलट","Change language":"भाशा बदलात","Good morning,":"देव बरे करूं,","Weather Impact":"हवामानाचो परिणाम","OUR RECOMMENDATION":"आमची शिफारस","What you should do":"तुमी कितें करचें","Check Weather":"हवामान तपासात","Find Routes":"मार्ग सोदात","Better weather":"बरें हवामान","Moderate":"मध्यम","Poor weather":"वाईट हवामान","Higher = better suitability":"चड स्कोर = चड योग्यताय","WEATHER SUITABILITY":"हवामान योग्यताय","Sunrise":"सूर्योदय","Sunset":"सूर्यास्त","AQI":"हवेची गुणवत्ता","UV Index":"UV निर्देशांक","Wave height":"लाटांची उंची","Sea condition":"समुद्राची स्थिती","Send":"धाडात"},
  mai:{"Weather that understands you.":"अहाँके बुझय वाला मौसम।","LET'S GET STARTED":"शुरू करी","Your name":"अहाँक नाम","Your location":"अहाँक स्थान","Select your city":"अपन शहर चुनू","What do you do?":"अहाँ की करैत छी?","Create My Weather Profile":"हमर मौसम प्रोफाइल बनाउ","PERSONALIZED FOR YOU":"अहाँक लेल व्यक्तिगत","Home":"घर","My Plans":"हमर योजना","Impact Map":"प्रभाव नक्शा","Smart Route":"स्मार्ट रूट","Copilot":"कोपाइलट","Change language":"भाषा बदलू","Good morning,":"सुप्रभात,","Weather Impact":"मौसमक प्रभाव","OUR RECOMMENDATION":"हमर सुझाव","What you should do":"अहाँके की करबाक चाही","Check Weather":"मौसम देखू","Find Routes":"रूट खोजू","Better weather":"नीक मौसम","Moderate":"मध्यम","Poor weather":"खराब मौसम","Higher = better suitability":"बेसी स्कोर = बेसी उपयुक्तता","WEATHER SUITABILITY":"मौसम उपयुक्तता","Sunrise":"सूर्योदय","Sunset":"सूर्यास्त","AQI":"हावाक गुणवत्ता","UV Index":"UV सूचक","Wave height":"लहरक ऊंचाई","Sea condition":"समुद्रक स्थिति","Send":"पठाउ"},
  hinglish:{"Weather that understands you.":"Aisa weather jo aapko samjhe.","LET'S GET STARTED":"Chaliye shuru karte hain","Your name":"Aapka naam","Your location":"Aapki location","Select your city":"Apna city select karein","What do you do?":"Aap kya karte hain?","Create My Weather Profile":"Mera Weather Profile Banayein","PERSONALIZED FOR YOU":"AAPKE LIYE PERSONALIZED","Home":"Home","My Plans":"My Plans","Impact Map":"Impact Map","Smart Route":"Smart Route","Copilot":"Copilot","Change language":"Language badlein","Good morning,":"Good morning,","Weather Impact":"Weather Impact","OUR RECOMMENDATION":"Hamari recommendation","What you should do":"Aapko kya karna chahiye","Check Weather":"Weather check karein","Find Routes":"Routes find karein","Better weather":"Better weather","Moderate":"Moderate","Poor weather":"Poor weather","Higher = better suitability":"Jitna score high, utni better suitability","WEATHER SUITABILITY":"WEATHER SUITABILITY","Sunrise":"Sunrise","Sunset":"Sunset","AQI":"Air Quality","UV Index":"UV Index","Wave height":"Wave height","Sea condition":"Sea condition","Send":"Send"}
};
Object.entries(INDIA_UI).forEach(([lang, dict]) => Object.assign(translations[lang], dict));

// Profession names are important because they appear dynamically after onboarding.
const PROFESSION_TRANSLATIONS = {
  hi:{Student:"छात्र",Farmer:"किसान","Auto Driver":"ऑटो ड्राइवर","Bus Driver":"बस ड्राइवर","Delivery":"डिलीवरी","Outdoor Worker":"आउटडोर वर्कर",Teacher:"शिक्षक",Shopkeeper:"दुकानदार","Street Vendor":"स्ट्रीट वेंडर",Photographer:"फोटोग्राफर","Outdoor Fitness Enthusiast":"आउटडोर फिटनेस उत्साही",Beachgoer:"बीच जाने वाला",Surfer:"सर्फर","Event Planner":"इवेंट प्लानर"},
  bn:{Student:"ছাত্র",Farmer:"কৃষক","Auto Driver":"অটো চালক","Bus Driver":"বাস চালক","Delivery":"ডেলিভারি","Outdoor Worker":"আউটডোর কর্মী",Teacher:"শিক্ষক",Shopkeeper:"দোকানদার","Street Vendor":"ফেরিওয়ালা",Photographer:"ফটোগ্রাফার","Outdoor Fitness Enthusiast":"আউটডোর ফিটনেস উৎসাহী",Beachgoer:"সমুদ্রসৈকত ভ্রমণকারী",Surfer:"সার্ফার","Event Planner":"ইভেন্ট পরিকল্পনাকারী"},
  te:{Student:"విద్యార్థి",Farmer:"రైతు","Auto Driver":"ఆటో డ్రైవర్","Bus Driver":"బస్ డ్రైవర్",Delivery:"డెలివరీ", "Outdoor Worker":"బయటి పనివాడు",Teacher:"ఉపాధ్యాయుడు",Shopkeeper:"దుకాణదారు","Street Vendor":"వీధి వ్యాపారి",Photographer:"ఫోటోగ్రాఫర్","Outdoor Fitness Enthusiast":"అవుట్‌డోర్ ఫిట్నెస్ అభిమాని",Beachgoer:"బీచ్ సందర్శకుడు",Surfer:"సర్ఫర్","Event Planner":"ఈవెంట్ ప్లానర్"},
  mr:{Student:"विद्यार्थी",Farmer:"शेतकरी","Auto Driver":"ऑटो चालक","Bus Driver":"बस चालक",Delivery:"डिलिव्हरी", "Outdoor Worker":"मैदानी कामगार",Teacher:"शिक्षक",Shopkeeper:"दुकानदार","Street Vendor":"रस्त्यावरील विक्रेता",Photographer:"छायाचित्रकार","Outdoor Fitness Enthusiast":"आउटडोअर फिटनेस उत्साही",Beachgoer:"समुद्रकिनारा प्रवासी",Surfer:"सर्फर","Event Planner":"कार्यक्रम नियोजक"},
  ta:{Student:"மாணவர்",Farmer:"விவசாயி","Auto Driver":"ஆட்டோ ஓட்டுநர்","Bus Driver":"பேருந்து ஓட்டுநர்",Delivery:"டெலிவரி", "Outdoor Worker":"வெளிப்புற பணியாளர்",Teacher:"ஆசிரியர்",Shopkeeper:"கடைக்காரர்","Street Vendor":"தெரு விற்பனையாளர்",Photographer:"புகைப்படக் கலைஞர்","Outdoor Fitness Enthusiast":"வெளிப்புற உடற்பயிற்சி ஆர்வலர்",Beachgoer:"கடற்கரை பயணி",Surfer:"சர்ஃபர்","Event Planner":"நிகழ்ச்சி திட்டமிடுபவர்"}
};
Object.entries(PROFESSION_TRANSLATIONS).forEach(([lang,dict])=>Object.assign(translations[lang],dict));
const DYNAMIC_PHRASES = {
  hi:{"Partly Cloudy":"आंशिक बादल","Cloudy":"बादल","Clear":"साफ मौसम","Rain":"बारिश","Rain Showers":"बारिश की बौछारें","Drizzle":"बूंदाबांदी","Foggy":"कोहरा","Thunderstorm":"आंधी-तूफान","Your activity":"आपकी गतिविधि","Your Activity":"आपकी गतिविधि","Personalized activity information.":"आपके लिए व्यक्तिगत गतिविधि जानकारी।","Weather impact information.":"मौसम के प्रभाव की जानकारी।","Preparing your personalized weather insight...":"आपकी व्यक्तिगत मौसम जानकारी तैयार हो रही है...","Preparing your personalized analysis...":"आपका व्यक्तिगत विश्लेषण तैयार हो रहा है...","Preparing your recommendation...":"आपकी सलाह तैयार हो रही है...","Rain chance":"बारिश की संभावना","Wind":"हवा","Humidity":"नमी","Air Quality":"वायु गुणवत्ता","Personalized mode":"व्यक्तिगत मोड"},
  bn:{"Partly Cloudy":"আংশিক মেঘলা","Cloudy":"মেঘলা","Clear":"পরিষ্কার","Rain":"বৃষ্টি","Rain Showers":"বৃষ্টির ঝরনা","Drizzle":"গুঁড়ি গুঁড়ি বৃষ্টি","Foggy":"কুয়াশাচ্ছন্ন","Thunderstorm":"বজ্রঝড়","Rain chance":"বৃষ্টির সম্ভাবনা","Wind":"বাতাস","Humidity":"আর্দ্রতা","Air Quality":"বায়ুর মান","Personalized mode":"ব্যক্তিগত মোড"},
  te:{"Partly Cloudy":"పాక్షికంగా మేఘావృతం","Cloudy":"మేఘావృతం","Clear":"స్పష్టమైన వాతావరణం","Rain":"వర్షం","Rain Showers":"వర్షపు జల్లులు","Drizzle":"చినుకులు","Foggy":"మంచు","Thunderstorm":"ఉరుములతో కూడిన వర్షం","Rain chance":"వర్షం అవకాశం","Wind":"గాలి","Humidity":"తేమ","Air Quality":"గాలి నాణ్యత","Personalized mode":"వ్యక్తిగత మోడ్"},
  mr:{"Partly Cloudy":"अंशतः ढगाळ","Cloudy":"ढगाळ","Clear":"स्वच्छ हवामान","Rain":"पाऊस","Rain Showers":"पावसाच्या सरी","Drizzle":"रिमझिम","Foggy":"धुके","Thunderstorm":"वादळी पाऊस","Rain chance":"पावसाची शक्यता","Wind":"वारा","Humidity":"आर्द्रता","Air Quality":"हवेची गुणवत्ता","Personalized mode":"वैयक्तिक मोड"},
  ta:{"Partly Cloudy":"பகுதி மேகமூட்டம்","Cloudy":"மேகமூட்டம்","Clear":"தெளிவான வானிலை","Rain":"மழை","Rain Showers":"மழைத்தூறல்","Drizzle":"தூறல்","Foggy":"மூடுபனி","Thunderstorm":"இடியுடன் கூடிய மழை","Rain chance":"மழை வாய்ப்பு","Wind":"காற்று","Humidity":"ஈரப்பதம்","Air Quality":"காற்றுத் தரம்","Personalized mode":"தனிப்பயன் பயன்முறை"}
};
Object.entries(DYNAMIC_PHRASES).forEach(([lang,dict])=>Object.assign(translations[lang],dict));


const indiaLanguageNames = {en:"English",hi:"हिन्दी",bn:"বাংলা",te:"తెలుగు",mr:"मराठी",ta:"தமிழ்",gu:"ગુજરાતી",kn:"ಕನ್ನಡ",ml:"മലയാളം",pa:"ਪੰਜਾਬੀ",as:"অসমীয়া",or:"ଓଡ଼ିଆ",ur:"اردو",ne:"नेपाली",kok:"कोंकणी",mai:"मैथिली",hinglish:"Hinglish"};

let currentLanguage = localStorage.getItem("mausamLanguage") || "en";
function t(value) { return (translations[currentLanguage] && translations[currentLanguage][value]) || value; }

function translateStaticUI() {
  // Translate explicit data-i18n nodes.
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });

  // Translate direct text nodes only. This fixes headings/buttons containing dynamic children.
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const parent = node.parentElement;
    if (!parent || ["SCRIPT","STYLE","OPTION"].includes(parent.tagName) || parent.closest("script,style") || parent.hasAttribute("data-i18n")) return;
    const raw = node.nodeValue;
    const key = raw.trim();
    if (!key) return;
    if (!node.__mausamOriginal) node.__mausamOriginal = key;
    const original = node.__mausamOriginal;
    const translated = t(original);
    if (translated !== original) node.nodeValue = raw.replace(original, translated);
    else if (currentLanguage === "en") node.nodeValue = raw.replace(original, original);
  });

  const nameInput = $("nameInput");
  if (nameInput) nameInput.placeholder = currentLanguage === "hi" ? "जैसे राहुल शर्मा" : currentLanguage === "hinglish" ? "jaise Rahul Sharma" : "e.g. Rahul Sharma";
  document.documentElement.lang = currentLanguage === "hi" ? "hi" : currentLanguage;
  document.querySelectorAll("#languageSelect, #languageSelectOnboarding").forEach(el => el.value = currentLanguage);
}

function setLanguage(language) {
  if (!translations[language]) language = "en";
  currentLanguage = language;
  localStorage.setItem("mausamLanguage", language);
  translateStaticUI();
  if (typeof updatePersonalization === "function") updatePersonalization();
  // Re-render dynamic decision text when language changes.
  if (typeof renderDashboard === "function") renderDashboard();
  if (typeof updateConflict === "function") updateConflict();
}

function updateText(id, value) { const element = $(id); if (element) element.textContent = t(String(value)); }

document.querySelectorAll("#languageSelect, #languageSelectOnboarding").forEach(el => el.addEventListener("change", e => setLanguage(e.target.value)));
translateStaticUI();

function t(value) {
    return (translations[currentLanguage] && translations[currentLanguage][value]) || value;
}

function translateStaticUI() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });

    // Translate simple static leaf text without changing dynamic user/weather values.
    document.querySelectorAll("body *:not(script):not(style):not(input):not(textarea)").forEach((el) => {
        if (el.children.length !== 0 || el.hasAttribute("data-i18n")) return;
        if (!el.dataset.originalText) el.dataset.originalText = el.textContent.trim();
        const original = el.dataset.originalText;
        if (original && translations[currentLanguage] && translations[currentLanguage][original]) {
            el.textContent = t(original);
        } else if (currentLanguage === "en" && original) {
            el.textContent = original;
        }
    });

    const nameInput = $("nameInput");
    if (nameInput) nameInput.placeholder = currentLanguage === "hi" ? "जैसे राहुल शर्मा" : currentLanguage === "hinglish" ? "jaise Rahul Sharma" : "e.g. Rahul Sharma";
    document.querySelectorAll("#languageSelect, #languageSelectOnboarding").forEach(el => el.value = currentLanguage);
}

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem("mausamLanguage", language);
    translateStaticUI();
    if (typeof updatePersonalization === "function") updatePersonalization();
}

function updateText(id, value) {
    const element = $(id);
    if (element) element.textContent = t(String(value));
}

document.querySelectorAll("#languageSelect, #languageSelectOnboarding").forEach((el) => {
    el.addEventListener("change", (e) => setLanguage(e.target.value));
});

translateStaticUI();

/* =========================
   LIVE WEATHER
========================= */

const CITY_COORDS = {
    Delhi: [28.6139, 77.2090],
    Noida: [28.5355, 77.3910],
    Ghaziabad: [28.6692, 77.4538],
    Mumbai: [19.0760, 72.8777],
    Bengaluru: [12.9716, 77.5946],
    Lucknow: [26.8467, 80.9462],
    Hyderabad: [17.3850, 78.4867],
    Pune: [18.5204, 73.8567],
    Goa: [15.4909, 73.8278],
    Chennai: [13.0827, 80.2707],
    Kochi: [9.9312, 76.2673],
    Visakhapatnam: [17.6868, 83.2185],
    Puri: [19.8135, 85.8312]
};

function weatherCodeToText(code) {
    if ([95, 96, 99].includes(code)) return "Thunderstorm";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rain";
    if ([80, 81, 82].includes(code)) return "Rain Showers";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([45, 48].includes(code)) return "Foggy";
    if ([1, 2, 3].includes(code)) return "Cloudy";
    if (code === 0) return "Clear";
    return "Partly Cloudy";
}

async function loadTideData(lat, lon) {
    // Keyless tide intelligence: derive the next high/low tide from
    // Open-Meteo Marine's modeled sea-level series. This keeps the SIH demo
    // functional without exposing a paid API key in the browser.
    try {
        const url =
            `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}` +
            `&hourly=sea_level_height_msl&forecast_days=3&timezone=auto`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Marine tide model unavailable");

        const data = await response.json();
        const times = data.hourly?.time || [];
        const levels = data.hourly?.sea_level_height_msl || [];
        if (times.length < 3 || levels.length !== times.length) throw new Error("No sea-level data");

        const now = Date.now();
        const points = times.map((time, i) => ({
            time,
            ts: Date.parse(time),
            level: Number(levels[i])
        })).filter(p => Number.isFinite(p.ts) && Number.isFinite(p.level) && p.ts >= now - 60 * 60 * 1000);

        const extrema = [];
        for (let i = 1; i < points.length - 1; i++) {
            const prev = points[i - 1].level;
            const cur = points[i].level;
            const next = points[i + 1].level;
            if (cur >= prev && cur > next) extrema.push({...points[i], type: "high"});
            if (cur <= prev && cur < next) extrema.push({...points[i], type: "low"});
        }

        const nextHigh = extrema.find(x => x.type === "high" && x.ts > now);
        const nextLow = extrema.find(x => x.type === "low" && x.ts > now);

        weather.tideHigh = nextHigh
            ? `${formatTime(new Date(nextHigh.ts).toISOString())} · ${nextHigh.level.toFixed(2)} m`
            : null;
        weather.tideLow = nextLow
            ? `${formatTime(new Date(nextLow.ts).toISOString())} · ${nextLow.level.toFixed(2)} m`
            : null;
        weather.tideSource = "Open-Meteo Marine model";
    } catch (error) {
        console.warn("Tide model unavailable.", error);
        weather.tideHigh = null;
        weather.tideLow = null;
        weather.tideSource = "error";
    }
}

async function loadLiveWeather() {
    const coords = CITY_COORDS[user.location];
    if (!coords) return;

    try {
        const [lat, lon] = coords;
        const weatherUrl =
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
            `&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,wind_speed_10m,weather_code,uv_index` +
            `&daily=sunrise,sunset&timezone=auto` +
            `&hourly=precipitation_probability`;
        const airUrl =
            `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}` +
            `&current=us_aqi,pm2_5,pm10`;
        const marineUrl =
            `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}` +
            `&current=wave_height,wave_period,swell_wave_height,swell_wave_period&timezone=auto`;

        const [response, airResponse, marineResponse] = await Promise.all([fetch(weatherUrl), fetch(airUrl), fetch(marineUrl)]);
        if (!response.ok) throw new Error("Weather service unavailable");

        const data = await response.json();
        const airData = airResponse.ok ? await airResponse.json() : {};
        const marineData = marineResponse.ok ? await marineResponse.json() : {};
        const current = data.current || {};
        const airCurrent = airData.current || {};
        const marineCurrent = marineData.current || {};
        const probs = data.hourly?.precipitation_probability || [];
        const nowProbability = probs.length ? Math.max(...probs.slice(0, 3)) : 0;

        weather.temperature = Number(current.temperature_2m ?? weather.temperature);
        weather.humidity = Number(current.relative_humidity_2m ?? weather.humidity);
        weather.rain = Number(nowProbability ?? 0);
        weather.wind = Number(current.wind_speed_10m ?? weather.wind);
        weather.condition = weatherCodeToText(current.weather_code);
        weather.uv = Number(current.uv_index ?? 0);
        weather.weatherCode = Number(current.weather_code ?? 0);
        weather.aqi = airCurrent.us_aqi != null ? Number(airCurrent.us_aqi) : null;
        weather.pm25 = airCurrent.pm2_5 != null ? Number(airCurrent.pm2_5) : null;
        weather.sunrise = data.daily?.sunrise?.[0] || null;
        weather.sunset = data.daily?.sunset?.[0] || null;
        weather.waveHeight = marineCurrent.wave_height != null ? Number(marineCurrent.wave_height) : null;
        weather.wavePeriod = marineCurrent.wave_period != null ? Number(marineCurrent.wave_period) : null;
        weather.swellHeight = marineCurrent.swell_wave_height != null ? Number(marineCurrent.swell_wave_height) : null;
        await loadTideData(lat, lon);

        const temp = document.querySelector(".temp");
        if (temp) temp.textContent = `${Math.round(weather.temperature)}°`;

        const hero = document.querySelector(".weather-main p");
        if (hero) hero.textContent = weather.condition;

        const stats = document.querySelector(".weather-stats");
        if (stats) {
            stats.innerHTML = `
                <div><b>🌧️ ${Math.round(weather.rain)}%</b><small>Rain chance</small></div>
                <div><b>💨 ${Math.round(weather.wind)} km/h</b><small>Wind</small></div>
                <div><b>💧 ${Math.round(weather.humidity)}%</b><small>Humidity</small></div>
                <div><b>🫁 ${weather.aqi ?? "—"}</b><small>US AQI</small></div>
                <div><b>☀️ ${weather.uv ?? "—"}</b><small>UV Index</small></div>
            `;
        }

        updateText("heroAqi", `🫁 ${weather.aqi ?? "—"}`);
        updateText("heroUv", `☀️ ${weather.uv ?? "—"}`);
        updateEnvironmentalUI();
        updateDecisionEngine();

        const dataForProfession = professionData[user.profession];
        if (dataForProfession) {
            const airSummary = weather.aqi != null ? ` AQI ${weather.aqi} (${aqiLabel(weather.aqi)}).` : "";
            const uvSummary = weather.uv != null ? ` UV ${weather.uv} (${uvLabel(weather.uv)}).` : "";
            updateText("alertMessage",
                `${Math.round(weather.rain)}% rain probability in ${user.location}.${airSummary}${uvSummary} ${dataForProfession.activityDescription}`);
            updateText("copilotAdvice",
                `${dataForProfession.copilot} Current condition: ${weather.condition}, ${Math.round(weather.rain)}% rain chance, AQI ${weather.aqi ?? "—"}, UV ${weather.uv ?? "—"}.`);
        }

        await refreshSafetyAnalysis();
    } catch (error) {
        console.warn("Live weather unavailable; keeping fallback values.", error);
        await refreshSafetyAnalysis();
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
    updateText("planIcon", data.icon);
    updateText("planLargeIcon", data.icon);

    updateText(
        "professionBadge",
        `${data.icon} ${t(user.profession)}`
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
        getPersonalizedScore()
    );

    updateSuitabilityVisual(getPersonalizedScore());

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
        `I've personalized today's weather advice for you as a ${t(user.profession)}.`
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
                            ${t(item[1])}
                        </h3>

                        <p>
                            ${t(item[2])}
                        </p>

                    </div>
                `;

            })
            .join("");

    const insight = document.getElementById("personalInsight");
    if (insight) {
        const marineNote = ["Beachgoer", "Surfer"].includes(user.profession) ? " + marine conditions" : "";
        insight.innerHTML = `<b>${data.icon} ${t(user.profession)} mode</b><span>Weather + AQI + UV + daylight${marineNote} are being converted into a personalized decision.</span>`;
    }

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
            "https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=in&q="
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

        const impactIcon = L.divIcon({
            className: "impact-map-marker-wrap",
            html: '<span class="impact-map-marker" aria-label="Selected location"></span>',
            iconSize: [22, 22],
            iconAnchor: [11, 11],
            popupAnchor: [0, -12]
        });

        // Remove the previous search marker so the map stays clean.
        if (window.mausamImpactMarker) {
            impactMap.removeLayer(window.mausamImpactMarker);
        }
        window.mausamImpactMarker = L.marker([place.lat, place.lon], { icon: impactIcon })
            .addTo(impactMap)
            .bindPopup(place.name)
            .openPopup();

        const response =
            await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&current=temperature_2m,rain,weather_code,visibility,uv_index`
            );

        const data =
            await response.json();

        const current =
            data.current;

        $("mapWeatherStatus")
            .innerText =
            `🌡️ ${current.temperature_2m}°C  |  🌧️ Rain ${current.rain || 0} mm  |  Visibility ${((current.visibility || 0) / 1000).toFixed(1)} km  |  ☀️ UV ${current.uv_index ?? "—"}`;

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

function updateSuitabilityVisual(score) {
    const suitability = Math.max(0, Math.min(100, Math.round(Number(score) || 0)));
    const color = suitability >= 75 ? "#16a34a" : suitability >= 50 ? "#f59e0b" : "#dc2626";
    const statusKey = suitability >= 75 ? "EXCELLENT" : suitability >= 50 ? "GOOD" : suitability >= 30 ? "CAUTION" : "HIGH RISK";
    const status = {
      en:{EXCELLENT:"EXCELLENT",GOOD:"GOOD",CAUTION:"CAUTION","HIGH RISK":"HIGH RISK"},
      hi:{EXCELLENT:"बहुत अच्छा",GOOD:"अच्छा",CAUTION:"सावधानी","HIGH RISK":"उच्च जोखिम"},
      hinglish:{EXCELLENT:"BAHUT BADHIYA",GOOD:"GOOD",CAUTION:"CAUTION","HIGH RISK":"HIGH RISK"}
    };
    const badge = $("statusBadge");
    if (badge) { badge.textContent = (status[currentLanguage] || status.en)[statusKey] || statusKey; badge.style.background = color; badge.style.color = "white"; }
    const circle = $("scoreCircle");
    if (circle) { circle.style.borderColor = color; circle.style.setProperty("--score-progress", `${suitability * 3.6}deg`); circle.style.setProperty("--score-color", color); }
    const helper = $("scoreHelper");
    if (helper) helper.textContent = t("Higher = better suitability");
    const alertIcon = $("alertIcon");
    if (alertIcon) alertIcon.textContent = suitability >= 75 ? "✅" : suitability >= 50 ? "⚠️" : "🚨";
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
        if (!routeMap) initRouteMap();

        $("status").innerText = "⏳ Finding routes and checking weather...";

        const fromText = $("from").value.trim();
        const toText = $("to").value.trim();

        if (!fromText || !toText) throw new Error("Enter both start and destination.");

        const start = await geocode(fromText);
        const destination = await geocode(toText);
        clearRouteMap();
        $("cardB").style.display = "";

        const response = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${start.lon},${start.lat};${destination.lon},${destination.lat}` +
            `?alternatives=true&overview=full&geometries=geojson`
        );

        if (!response.ok) throw new Error("Routing service unavailable.");

        const data = await response.json();
        if (data.code !== "Ok" || !data.routes?.length) throw new Error("No route found.");

        const routes = data.routes.slice(0, 2);
        const results = [];

        for (const route of routes) {
            const points = sampleRoute(
                route.geometry.coordinates.map(point => ({
                    lat: point[1],
                    lon: point[0]
                }))
            );

            const weatherResults = await Promise.all(
                points.map(async point => {
                    try {
                        const weatherResponse = await fetch(
                            `https://api.open-meteo.com/v1/forecast?latitude=${point.lat}&longitude=${point.lon}` +
                            `&current=rain,showers,visibility,weather_code`
                        );
                        if (!weatherResponse.ok) throw new Error("weather checkpoint failed");
                        const weatherData = await weatherResponse.json();
                        return { point, current: weatherData.current || {} };
                    } catch {
                        return {
                            point,
                            current: { rain: 0, showers: 0, visibility: 10000, weather_code: 0 }
                        };
                    }
                })
            );

            const averageRisk =
                weatherResults.reduce((sum, item) => sum + getRisk(item.current), 0) /
                Math.max(1, weatherResults.length);

            results.push({ route, weatherResults, averageRisk, score: 0 });
        }

        const maxTime = Math.max(...results.map(item => item.route.duration), 1);

        results.forEach(item => {
            const timeScore = 100 * (1 - item.route.duration / maxTime);
            item.score = 0.7 * (100 - item.averageRisk) + 0.3 * timeScore;
        });

        let bestIndex = 0;
        results.forEach((item, index) => {
            if (item.score > results[bestIndex].score) bestIndex = index;
        });

        markers.push(
            L.marker([start.lat, start.lon]).addTo(routeMap).bindPopup("Start"),
            L.marker([destination.lat, destination.lon]).addTo(routeMap).bindPopup("Destination")
        );

        // Hide unused second card when OSRM returns only one alternative.
        $("cardB").style.display = results.length > 1 ? "" : "none";

        results.forEach((item, index) => {
            const coordinates = item.route.geometry.coordinates.map(point => [point[1], point[0]]);
            const letter = index === 0 ? "A" : "B";

            routeLayers.push(
                L.polyline(coordinates, {
                    weight: index === bestIndex ? 7 : 5,
                    opacity: 0.8
                }).addTo(routeMap)
            );

            item.weatherResults.forEach(point => {
                const risk = getRisk(point.current);
                const color = riskColor(risk);

                weatherLayers.push(
                    L.circle([point.point.lat, point.point.lon], {
                        radius: 900,
                        color,
                        fillColor: color,
                        fillOpacity: 0.13,
                        weight: 2
                    }).addTo(routeMap).bindPopup(
                        `<b>Weather checkpoint</b><br>${getCondition(point.current)}<br>Risk: ${risk.toFixed(0)}%`
                    )
                );
            });

            updateText("title" + letter, (index === bestIndex ? "⭐ " : "") + `Route ${index + 1}`);
            updateText("distance" + letter, km(item.route.distance));
            updateText("time" + letter, mins(item.route.duration));
            updateText("risk" + letter, item.averageRisk.toFixed(0) + "%");
            updateText("safety" + letter, (100 - item.averageRisk).toFixed(0) + "%");

            const conditions = [...new Set(
                item.weatherResults.map(w => getCondition(w.current))
            )];
            updateText("condition" + letter, conditions.join(", "));
            updateText("score" + letter, item.score.toFixed(1));
            $("card" + letter).classList.toggle("best", index === bestIndex);
        });

        if (results.length === 1) {
            // Populate a useful comparison placeholder instead of leaving "—".
            updateText("titleB", "Alternative unavailable");
            updateText("conditionB", "OSRM returned one driving route for this trip.");
            updateText("scoreB", "—");
            updateText("distanceB", "—");
            updateText("timeB", "—");
            updateText("riskB", "—");
            updateText("safetyB", "—");
        }

        routeMap.fitBounds(
            L.latLngBounds([[start.lat, start.lon], [destination.lat, destination.lon]]),
            { padding: [30, 30] }
        );

        const allWeather = results.flatMap(item => item.weatherResults);
        const avgRain = allWeather.reduce((sum, w) => sum + (w.current.rain || 0), 0) /
            Math.max(1, allWeather.length);
        const avgVisibility = allWeather.reduce(
            (sum, w) => sum + ((w.current.visibility || 10000) / 1000), 0
        ) / Math.max(1, allWeather.length);
        const hasFog = allWeather.some(w => [45, 48].includes(w.current.weather_code));

        updateText("overallRain", avgRain.toFixed(1) + " mm");
        updateText("overallFog", hasFog ? "Detected" : "Low");
        updateText("overallVisibility", avgVisibility.toFixed(1) + " km");

        const overallRisk = results.reduce((sum, item) => sum + item.averageRisk, 0) / results.length;
        updateText("traffic", overallRisk >= 60 ? "Heavy" : overallRisk >= 30 ? "Moderate" : "Low");

        const best = results[bestIndex];
        $("routeRecommendation").innerHTML = `
            🟢 <b>Route ${bestIndex + 1} is recommended.</b>
            Smart Score: <b>${best.score.toFixed(1)}/100</b>.
            This balances 70% weather safety and 30% travel time.
        `;

        $("status").innerText = "✅ Routes calculated successfully.";
    } catch (error) {
        console.error(error);
        $("status").innerText = "❌ " + error.message;
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
        loadLiveWeather();

        $("onboarding")
            .classList.add("hidden");

        $("mainApp")
            .classList.remove("hidden");

        showPage("dashboard");
        translateStaticUI();

    } catch (error) {

        console.log(
            "No saved profile found."
        );
    }

})();
const logoutButton =
    document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener("click", () => {

        localStorage.removeItem("mausamMindUser");

        document.body.removeAttribute("data-theme");

        const background =
            document.getElementById("professionBackground");

        if (background) {
            background.innerHTML = "";
        }

        document
            .getElementById("mainApp")
            .classList.add("hidden");

        document
            .getElementById("onboarding")
            .classList.remove("hidden");

        document.getElementById("nameInput").value = "";
        document.getElementById("locationInput").value = "";

        document
            .querySelectorAll(".profession-card")
            .forEach(card => {
                card.classList.remove("selected");
            });

        window.scrollTo(0, 0);
    });
}