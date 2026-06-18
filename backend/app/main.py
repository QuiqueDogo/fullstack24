from fastapi import FastAPI

from app.database.base import Base
from app.database.connection import engine

from app.models.user import User

from app.routes.users import router as users_router
from app.exceptions import generic_exception_handler
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Users API",
    description="PruebaFullstack Developer",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:8000",
        
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)

app.include_router(users_router)

app.add_exception_handler(
    Exception,
    generic_exception_handler
)


@app.get("/")
def root():
    return {
        "message": "API running"
    }