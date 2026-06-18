from pydantic import BaseModel
from pydantic import EmailStr
from pydantic import Field


class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)

    email: EmailStr

    age: int = Field(..., ge=1)

    country: str


class UserResponse(BaseModel):
    id: int

    name: str

    email: str

    age: int

    country: str

    class Config:
        from_attributes = True