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

# 2. Create the app object
app = FastAPI()

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

@app.post('/update_user_interests')
def update_user_interest_endpoint(new_user_interests: Dict[str, UserInterests]):
    user_interests_new = update_user_interests(user_interests, new_user_interests)
    
    update_user_average_values(user_interests_new)

    recommendations = get_recommendations(user_interests, df_res)

    return recommendations

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
#uvicorn main:app --reload