import pandas as pd
import json

df_res = pd.read_csv('restaurants_new.csv')
initial_recommend = {}
further_recommend = {}
user_profile = {}

# Function to recommend restaurants based on user profile
def recommend_restaurants(user_profile, initial_type, df, mean_budget=None, mean_rating=None, user_type=None):
    if not user_profile:
        return "Please provide your initial interest in restaurant types."

    # Combine initial type and user profile
    if user_type is None:
        user_type = initial_type
    else:
        user_type = initial_type + ', ' + user_type

    # Split the combined user type string into a list of interests
    interests = [interest.strip() for interest in user_type.split(',')]

    # For initial recommendations, consider only the type
    if mean_budget is None or mean_rating is None or user_type is None:
        # Filter restaurants based on user profile
        recommended_restaurants = df[df['Type'].apply(lambda x: any(item.lower() in x.lower() for item in interests))]

    # For further recommendations, consider budget, rating, and type
    else:
        # Filter restaurants based on budget, rating, and type
        recommended_restaurants = df[(df['Budget'] <= mean_budget) &
                                     (df['Rating'] >= mean_rating) &
                                     (df['Type'].apply(lambda x: any(item.lower() in x.lower() for item in interests)))]

    # Return top 5 recommended restaurants
    return recommended_restaurants.head(5)

def recommend2(users, user_likes):
    # Initialize user profiles with initial interests
    user_profiles = {user: [] for user in users}

    # Update user profiles with initial interests, types, mean budget, and mean rating of liked restaurants
    for user, interests_list in users.items():
        all_interests = [interest.strip() for sublist in interests_list for interest in sublist.split(',')]
        user_profiles[user].extend(all_interests)
        liked_types = []
        liked_budgets = []
        liked_ratings = []
        for liked_restaurant in user_likes[user]:
            if len(df_res.loc[df_res['Name'] == liked_restaurant, 'Type'].values) > 0:
                liked_types.extend(df_res.loc[df_res['Name'] == liked_restaurant, 'Type'].values[0].split(','))
            if len(df_res.loc[df_res['Name'] == liked_restaurant, 'Budget'].values) > 0:
                liked_budgets.append(df_res.loc[df_res['Name'] == liked_restaurant, 'Budget'].values[0])
            if len(df_res.loc[df_res['Name'] == liked_restaurant, 'Rating'].values) > 0:
                liked_ratings.append(df_res.loc[df_res['Name'] == liked_restaurant, 'Rating'].values[0])

        mean_budget = sum(liked_budgets) / len(liked_budgets) if liked_budgets else df_res['Budget'].mean()
        mean_rating = sum(liked_ratings) / len(liked_ratings) if liked_ratings else df_res['Rating'].mean()
        user_profiles[user].extend(liked_types)
        user_profiles[user].append(f"Mean Budget: {mean_budget}")
        user_profiles[user].append(f"Mean Rating: {mean_rating}")

        # Get initial recommendations for each user
        user_type = ', '.join(user_profiles[user])
        print(users[user][0])
        print("helo:", user_type)
        initial_recommendations = recommend_restaurants(users[user][0], user_type, df_res)
    
        # Print initial recommendations
        # print(f"\nInitial Recommendations for {user}:")
        initial_recommend[user] = initial_recommendations.to_json(orient="records")
        # print(initial_recommendations)

    # Get further recommendations for each user
    further_recommendations = {}
    for user, profile in user_profiles.items():
        user_type = ', '.join(profile)
        further_recommendations[user] = recommend_restaurants(users[user][0], user_type, df_res, mean_budget, mean_rating, user_type)

    # Print further recommendations
    # print("\nFurther Recommendations:")
    for user, recommendations in further_recommendations.items():
        # print(f"{user}:")
        # print(recommendations)
        # print(type(recommendations))
        further_recommend[user] =  recommendations.to_json(orient="records")

    # # Print final user profiles
    # print("\nFinal User Profiles:")
    for user, profile in user_profiles.items():
        # print(f"{user}:")
        # print(profile)
        user_profile[user] =  json.dumps(profile)
        
    # print(type(initial_recommendations))
    
    # print(initial_recommend)
    # print(further_recommend)
    # print(user_profile)

    return initial_recommend, further_recommend, user_profile