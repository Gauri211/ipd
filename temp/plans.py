import pandas as pd
import itertools
from distance_cal import haversine
import json

def plans():
    df_res = pd.read_csv('restaurants_sorted.csv')
    df_malls = pd.read_csv('malls_sorted.csv')
    df_clubs = pd.read_csv('clubs_sorted.csv')
    df_nature = pd.read_csv('nature_sorted.csv')
    df_adventure = pd.read_csv('adventure_sorted.csv')

    user_preference = {
        1: 'restaurant',
        2: 'malls',
        3: 'clubs',
        4: 'nature',
        5: 'adventure'
    }

    # Get the indices of the rows for the head of all datasets
    indices_df1 = list(range(len(df_res.head())))
    indices_df2 = list(range(len(df_malls.head())))
    indices_df3 = list(range(len(df_clubs.head())))
    indices_df4 = list(range(len(df_nature.head())))
    indices_df5 = list(range(len(df_adventure.head())))

    # Generate permutation combinations
    permutations = itertools.product(indices_df1, indices_df2, indices_df3, indices_df4, indices_df5)

    user_distance = 50

    # Store permutations and their distances in a list
    permutations_distances = []

    # Calculate distances and store valid permutations
    for perm in permutations:
        row_df1 = df_res.head().iloc[perm[0]]
        row_df2 = df_malls.head().iloc[perm[1]]
        row_df3 = df_clubs.head().iloc[perm[2]]
        row_df4 = df_nature.head().iloc[perm[3]]
        row_df5 = df_adventure.head().iloc[perm[4]]

        latitudes = []
        longitudes = []

        valid_perm = True
        for preference, row in zip(perm, [row_df1, row_df2, row_df3, row_df4, row_df5]):
            lat_lon_str = str(row['Latitude, Longitude'])
            # print("Latitude, Longitude string:", lat_lon_str)
            lat_lon_values = lat_lon_str.split(',')
            # print("Split result:", lat_lon_values)
            # if(lat_lon_values == ['nan']):
            #     print(preference)
                # print(row['Name'])
            if len(lat_lon_values) != 2:
                print("Error: Unexpected format for Latitude, Longitude")
                # Handle this case appropriately
                continue
            lat, lon = map(float, lat_lon_values)
            # lat, lon = map(float, str(row['Latitude, Longitude']).split(','))
            latitudes.append(lat)
            longitudes.append(lon)

            if preference == 0:
                if 'restaurant' not in user_preference.values():
                    valid_perm = False
                    break
            elif preference == 1:
                if 'malls' not in user_preference.values():
                    valid_perm = False
                    break
            elif preference == 2:
                if 'clubs' not in user_preference.values():
                    valid_perm = False
                    break
            elif preference == 3:
                if 'nature' not in user_preference.values():
                    valid_perm = False
                    break
            elif preference == 4:
                if 'adventure' not in user_preference.values():
                    valid_perm = False
                    break

        if valid_perm:
            distances = [haversine(latitudes[i], longitudes[i], latitudes[i + 1], longitudes[i + 1]) for i in
                        range(len(latitudes) - 1)]
            final_distance = sum(distances)

            if final_distance <= user_distance:
                permutations_distances.append((perm, final_distance))

    # Print the number of valid permutations found
    print(f"Number of valid permutations: {len(permutations_distances)}")

    # Sort permutations based on distances
    sorted_permutations = sorted(permutations_distances, key=lambda x: x[1])

    final_plans = []
    # plans = pd.DataFrame()
    # output_dict = {}
    # Print or do whatever you want with the sorted permutations

    output_data = []

    for i in range(min(6, len(sorted_permutations))):
        perm, distance = sorted_permutations[i]
        print(f"Distance: {distance}")
        
        # Accessing rows from dataframes
        row_df1 = df_res.head().iloc[perm[0]]
        row_df2 = df_malls.head().iloc[perm[1]]
        row_df3 = df_clubs.head().iloc[perm[2]]
        row_df4 = df_nature.head().iloc[perm[3]]
        row_df5 = df_adventure.head().iloc[perm[4]]

        # Creating a dictionary to store the rows
        output_dict = {
            "row_df1": row_df1.to_dict(),
            "row_df2": row_df2.to_dict(),
            "row_df3": row_df3.to_dict(),
            "row_df4": row_df4.to_dict(),
            "row_df5": row_df5.to_dict()
        }
        
        # Appending the dictionary to the output data list
        output_data.append(output_dict)

    # Convert the output data to JSON
    json_output = json.dumps(output_data)

    # Return or do something with the JSON output
    # print(json_output)
    json_data = json.loads(json_output)
    return json_data
