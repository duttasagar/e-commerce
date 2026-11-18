from fastapi import FastAPI

app = FastAPI(
    title="Online Store API",
    description="Backend API for Online Store",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Online Store API is running!"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
