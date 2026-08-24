import pandas as pd

df = pd.read_csv('C:/Users/myung/Documents/KANT-2026-TIL/04_machine-learning/dataset.csv')

#------------------------------------------------1
print("=" * 100)
print(df.info())
print("=" * 100)
print(df.isnull().sum()) #결측치 파악
print("=" * 100)

mode_artists = df['artists'].mode()[0]
print(mode_artists) # 아티스트 최빈값

df['artists'] = df['artists'].fillna(mode_artists)


mode_track_name = df.loc[:, 'track_name'].mode()[0] 
print(mode_track_name) # 노래제목 최빈값

df['track_name'] = df.loc[:,'track_name'].fillna(mode_track_name)

print("=" * 100)
print(df.describe())

print("=" * 100)
print(df['tempo'])
print("=" * 100)
print(df['popularity'])
print("=" * 100)
#-------------------------------------------------------2

print(df.duplicated().sum())


