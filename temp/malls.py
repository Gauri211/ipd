from distance_cal import distance_calculation
import pandas as pd

df_res = pd.read_csv('MallsDataset.csv')

def malls_calculation(location , distance, rating):
  sorted_nearest_locations = distance_calculation(location , distance)

  malls = pd.DataFrame()
  for i in range(0, df_res.shape[0]):
    if(df_res['Rating'][i] > rating and (df_res['Station'][i] in sorted_nearest_locations)):
      malls = pd.concat([malls, df_res.iloc[[i]]], axis=0)

  malls['Station'] = pd.Categorical(malls['Station'], categories=sorted_nearest_locations, ordered=True)
  # Sort the DataFrame based on the 'stations' column
  malls = malls.sort_values(by=['Station', 'Rating'], ascending=[True, False])
  malls.to_csv('malls_sorted.csv', index=False)
  return malls