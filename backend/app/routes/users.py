from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.models.user import User
from app.schemas.user import UserCreate
from app.schemas.user import UserResponse

from app.database.dependencies import get_db

from fastapi import Query
from sqlalchemy import or_

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post(
    "/",
    response_model=UserResponse,
    status_code=201
)
def create_user(
    payload: UserCreate,
    db: Session = Depends(get_db)
):
    existing_user = (
        db.query(User)
        .filter(User.email == payload.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    user = User(
        name=payload.name,
        email=payload.email,
        age=payload.age,
        country=payload.country
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


@router.get("/")
def get_users(
    page: int = 1,
    limit: int = 10,
    search: str | None = None,
    country: str | None = None,
    db: Session = Depends(get_db)
):
    query = db.query(User)

    if search:
        query = query.filter(
            or_(
                User.name.ilike(f"%{search}%"),
                User.email.ilike(f"%{search}%")
            )
        )

    if country:
        query = query.filter(
            User.country.ilike(country)
        )

    total = query.count()

    users = (
        query
        .offset((page - 1) * limit)
        .limit(limit)
        .all()
    )

    return {
        "data": users,
        "page": page,
        "limit": limit,
        "total": total
    }