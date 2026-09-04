from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mausam Mind API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

PROFILES = {
    "student_commute": {"temp": 0.3, "rain": 0.3, "visibility": 0.3, "aqi": 0.1, "wind": 0.0, "humidity": 0.0, "uv": 0.0},
    "teacher_commute": {"rain": 0.4, "visibility": 0.3, "temp": 0.2, "aqi": 0.1, "wind": 0.0, "humidity": 0.0, "uv": 0.0},
    "two_wheeler": {"rain": 0.4, "visibility": 0.4, "wind": 0.2, "temp": 0.0, "humidity": 0.0, "uv": 0.0, "aqi": 0.0},
    "farmer": {"rain": 0.45, "wind": 0.45, "uv": 0.1, "temp": 0.0, "visibility": 0.0, "humidity": 0.0, "aqi": 0.0},
    "outdoor_worker": {"temp": 0.4, "uv": 0.3, "rain": 0.15, "aqi": 0.15, "wind": 0.0, "visibility": 0.0, "humidity": 0.0},
    "shopkeeper": {"rain": 0.6, "temp": 0.4, "wind": 0.0, "uv": 0.0, "aqi": 0.0, "visibility": 0.0, "humidity": 0.0},
    "furniture_workshop": {"humidity": 0.6, "temp": 0.3, "rain": 0.1, "wind": 0.0, "visibility": 0.0, "uv": 0.0, "aqi": 0.0}
}

def calculate_danger(val, metric):
    if metric == "rain": return val
    if metric == "wind": return min(100, val * 2.5)
    if metric == "aqi": return min(100, val * 0.5)
    if metric == "visibility": return 100 if val <= 1.5 else 0
    if metric == "temp": return min(100, abs(val - 24) * 5)
    if metric == "humidity": return val
    if metric == "uv": return min(100, val * 10)
    return 0

@app.get("/health")
def health_check():
    return {"status": "API is running successfully."}

@app.get("/analyze")
def analyze_weather(
    profile: str = "student_commute",
    rain: float = 0,
    wind: float = 0,
    aqi: float = 50,
    visibility: float = 10,
    temp: float = 25,
    humidity: float = 50,
    uv: float = 5
):
    if profile not in PROFILES:
        return {"error": f"Profile '{profile}' not found. Available profiles: {list(PROFILES.keys())}"}

    weights = PROFILES[profile]
    
    total_score = 0
    for metric in weights:
        total_score += calculate_danger(locals()[metric], metric) * weights[metric]

    score = round(total_score, 1)
    if score < 30:
        status, color, rec = "SAFE", "#00FF00", "Optimal conditions. Go ahead."
    elif score < 60:
        status, color, rec = "CAUTION", "#FFFF00", "Conditions are shifting. Proceed with backup plans."
    else:
        status, color, rec = "DANGER", "#FF0000", "High risk detected. Postpone activity."

    return {
        "profile_analyzed": profile,
        "safety_score": score,
        "status": status,
        "ui_color": color,
        "recommendation": rec
    }