from datetime import datetime, timedelta
import os
from flask import Flask, Response, request, session
from dotenv import load_dotenv
from connectors.mysql_connectors import connection
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text,select
from controllers.users import user_routes
from flask_login import LoginManager, current_user
# from flask_jwt_extended import JWTManager
from models.users import Users
from flask import Flask, Response, redirect, url_for, request, session, abort, g
from flask_cors import CORS
from controllers.product_management import products_list
from controllers.transaction_detail_management import trans_detail_bp
load_dotenv()

app = Flask(__name__)
cors = CORS(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.register_blueprint(user_routes)
app.register_blueprint(products_list)
app.register_blueprint(trans_detail_bp)

# jwt=JWTManager(app) ##jason web token

##biar bisa login
# login_manager = LoginManager()
# login_manager.init_app(app)

# @login_manager.user_loader
# def load_user(user_id):
#     Session = sessionmaker(connection)
#     s = Session()
#     return s.query(Users).get(int(user_id))


if __name__ == '__main__':
    app.run(debug=True)

# @app.route("/")
# def hello_world():
        
#         return "Product inserted!"


# @app.before_request
# def before_request():
#     session.permanent = True
#     app.permanent_session_lifetime = timedelta(minutes=300)
#     session.modified = True
#     g.user = current_user

