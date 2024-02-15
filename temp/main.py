import pandas as pd
import uvicorn ##ASGI
from fastapi import FastAPI

app = FastAPI()

def create_dataframe():
    data = {'Name': ['Alice', 'Bob', 'Charlie'],
            'Age': [25, 30, 35]}
    df = pd.DataFrame(data)
    return df

@app.get('/restaurants')
def get_restaurants():
    df = create_dataframe()
    return df

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)