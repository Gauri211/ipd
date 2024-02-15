from distance_cal import distance_calculation
import pandas as pd

df_res = pd.read_csv('AdventureDataset.csv')

def adventure_calculation(location , distance, rating):
  sorted_nearest_locations = distance_calculation(location , distance)

  adventure = pd.DataFrame()
  for i in range(0, df_res.shape[0]):
    if(df_res['Rating'][i] > rating and (df_res['Station'][i] in sorted_nearest_locations)):
      adventure = pd.concat([adventure, df_res.iloc[[i]]], axis=0)

  adventure['Station'] = pd.Categorical(adventure['Station'], categories=sorted_nearest_locations, ordered=True)
  # Sort the DataFrame based on the 'stations' column
  adventure = adventure.sort_values(by=['Station', 'Rating'], ascending=[True, False])

  return adventure