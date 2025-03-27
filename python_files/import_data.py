import sqlite3
import pandas as pd

conn = sqlite3.connect("medical.db")
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS medical_data (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT UNIQUE,
        answer TEXT,
        source TEXT,
        focus_area TEXT
    )
""")

df = pd.read_csv("medquad.csv")

for _, row in df.iterrows():
    cursor.execute("INSERT OR IGNORE INTO medical_data (question, answer, source, focus_area) VALUES (?, ?, ?, ?)", (row["question"], row["answer"], row["source"], row["focus_area"]))

conn.commit()
conn.close()

print("Dataset imported successfully!")
