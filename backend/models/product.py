from decimal import Decimal
from models.base import Base
from sqlalchemy import Column, Integer, String, Numeric, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from models.transaction import Transaction
from models.bills import Bills


db = SQLAlchemy()

class Product(Base):
    __tablename__ = 'products'
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    seller_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    name = Column(String(100), nullable=False)
    price = Column(Numeric(10, 2), nullable=False)
    description = Column(String(255), nullable=False)
    stock = Column(Integer, nullable=False)
    product_category = Column(String(100), nullable=False)
    product_grade = Column(String(100), nullable=False)
    product_type = Column(String(100), nullable=False)