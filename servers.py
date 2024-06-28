import subprocess

# Define the commands to start each server
commands = [
    r"cd C:\Users\Frans\OneDrive\Desktop\WFruits\backend && py app.py",
    r"cd C:\Users\Frans\OneDrive\Desktop\WFruits\backend && npm run dev",
    r"cd C:\Users\Frans\OneDrive\Desktop\WFruits\WFruits-React && npm run dev"
]

# Start each server in a separate subprocess
processes = [subprocess.Popen(command, shell=True) for command in commands]

print("All servers started.")
