# 1. Library imports
import uvicorn ##ASGI
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer
import pandas as pd
from recommend import update_user_interests, update_user_average_values, get_recommendations
from restaurants import restaurants_calculation
from inputs import inputs
from malls import malls_calculation
from clubs import clubs_calculation
from nature import nature_calculation
from adventure import adventure_calculation
from religious import religious_calculation
from theatre import theatre_calculation
from plans import plans
from recommend2 import recommend2
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from recommend2 import recommend_initial, recommend_further, update_profiles, initialize_profiles

app = FastAPI()

# Allow requests from your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

class UserInterests(BaseModel):
    Type: list[str]
    Budget: list[float]
    Rating: list[float]

df_res = pd.read_csv('restaurants_new.csv')

user_interests = {
    'user1': {'Type': ['Buffet', 'Chinese'], 'Budget': [900], 'Rating': [4.0]},
    'user2': {'Type': ['Indian', 'Punjabi'], 'Budget': [700], 'Rating': [4.5]},
    'user3': {'Type': ['Fast Food', 'Sandwich'], 'Budget': [850], 'Rating': [3.5]}
}

# Sample users and their initial interests
users = {
    'User1': ['Buffet', 'Chinese'],
    # 'User2': ['Indian', 'Punjabi'],
    # 'User3': ['Italian', 'Chinese'],
    # 'User4': ['Fast Food', 'Sandwich'],
    # 'User5': ['Restaurant', 'Organic'],
    # 'User6': ['Hamburger', 'Restaurant','Indian']
}

# Sample user feedback (liked restaurants)
user_likes = {
    'User1': [],
    # 'User2': ['Jumbo king'],
    # 'User3': [],
    # 'User4': [],
    # 'User5': [],
    # 'User6': []
}


@app.post('/update_user_interests')
def update_user_interest_endpoint(new_user_interests: Dict[str, UserInterests]):
    user_interests_new = update_user_interests(user_interests, new_user_interests)
    update_user_average_values(user_interests_new)
    recommendations = get_recommendations(user_interests, df_res)
    return recommendations

@app.get('/restaurants')
def get_restaurants():
    time, mode_of_transport, distance, location, rating, users_budget, cuisine_type = inputs()
    restaurants = restaurants_calculation(location , distance, rating, users_budget, cuisine_type)
    return restaurants.to_dict(orient='records') 

@app.get('/malls')
def get_malls():
    time, mode_of_transport, distance, location, rating, users_budget,cuisine_type  = inputs()
    malls = malls_calculation(location , distance, rating)
    return malls.to_dict(orient='records') 

@app.get('/clubs')
def get_clubs():
    time, mode_of_transport, distance, location, rating, users_budget, cuisine_type = inputs()
    clubs = clubs_calculation(location , distance, rating)
    return clubs.to_dict(orient='records') 

@app.get('/nature')
def get_nature():
    time, mode_of_transport, distance, location, rating, users_budget,cuisine_type = inputs()
    nature = nature_calculation(location , distance, rating)
    return nature.to_dict(orient='records') 

@app.get('/adventure')
def get_adventure():
    time, mode_of_transport, distance, location, rating, users_budget, cuisine_type = inputs()
    adventure = adventure_calculation(location , distance, rating)
    return adventure.to_dict(orient='records') 

@app.get('/religious')
def get_adventure():
    time, mode_of_transport, distance, location, rating, users_budget , cuisine_type = inputs()
    religious = religious_calculation(location , distance, rating)
    return religious.to_dict(orient='records') 

@app.get('/theatre')
def get_adventure():
    time, mode_of_transport, distance, location, rating, users_budget , cuisine_type = inputs()
    theatre = theatre_calculation(location , distance, rating)
    return theatre.to_dict(orient='records') 

@app.get('/plans')
def get_plans():
    final_plans = plans()
    return final_plans

@app.get('/recommend2')
def get_recommendations():
    # user_profiles = initialize_profiles(users, df_res)
    # initial_recommendations = recommend_initial(users, user_profiles, df_res)
    # user_profiles = update_profiles(user_likes, user_profiles, df_res)
    # further_recommendations = recommend_further(users, user_profiles, df_res)
    # return initial_recommendations, further_recommendations, user_profiles
    initial_recommend, further_recommend, user_profile = recommend2(users, user_likes, df_res)
    # print(initial_recommend, further_recommend, user_profile)
    return initial_recommend, further_recommend, user_profile

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
#uvicorn main:app --reload