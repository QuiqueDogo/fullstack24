from fastapi import FastAPI

from app.database.base import Base
from app.database.connection import engine

from app.models.user import User

from app.routes.users import router as users_router
from app.exceptions import generic_exception_handler

app = FastAPI(
    title="Users API",
    description="PruebaFullstack Developer",
    version="1.0.0",
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