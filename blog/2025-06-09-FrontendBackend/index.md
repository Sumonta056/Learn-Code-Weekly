---
title: How to Run Frontend & Backend Together with One Command (No Docker Needed)
slug: frontend-backend-one-command
authors: [sumonta056]
tags: [frontend, backend, automation, vs-code, powershell]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: true
---

If you've ever worked on a full-stack project, you probably know the pain of running two separate servers, one for the **frontend** (like React or Vue) and one for the **backend** (Node.js, FastAPI, etc.).

<!-- truncate -->

Lately, I've been working on an internal project where both the frontend and backend are in the same folder. And honestly, opening two terminals every single day just to start both servers became super boring and repetitive. **Same project, same routine**: open terminal, run frontend, run backend. It started to feel like a chore. So I finally decided to look for a smoother way to handle this.

In this blog post, you'll learn how to automate running both frontend and backend servers with a single command, whether you're using PowerShell, CMD, or VS Code's internal terminal with a task runner

> Assuming you don't know about Docker

```bash
📁 Project Root
├── frontend     # React + Vite
├── backend      # Node.js + Express
└── README.md
```

---

## 🔧 Method 1: Using PowerShell or CMD Script

This method is ideal for Windows users. You can create a `.bat` script that opens two terminals and runs the frontend and backend simultaneously.

> Into the root directory, create a file `run-dev.bat` and copy-paste the following command

### ✅ Script: `run-dev.bat`

```
@echo off
echo Starting both frontend and backend development servers...
start cmd /k "cd frontend && npm run dev"
start cmd /k "cd backend && npm run start:dev"
```

> ⚠️ Replace your frontend & backend start command

### 📌 How it works:

- `@echo off` prevents command echoing.
- `start cmd /k` opens a new terminal and keeps it running (`/k`).
- Next, each command navigates to the respective folder and starts that particular dev server.

### 🟢 How to Use:

Double-click it, or run it from PowerShell: `.\run-dev.bat`

### ✅ Pros:

- No need to open terminals manually.
- Simple and native on Windows.

### ⚠️ Cons:

- Limited to Windows (won't work on macOS/Linux).
- Opens external terminal windows, which can clutter your workspace.

---

## 🧠 Method 2: Using VS Code's Built-in Task Runner

For a cross-platform and more elegant solution within VS Code, you can define **custom tasks** to run both servers in parallel inside **VS Code terminals**.

### ⚙️ Step 1: Add this to `.vscode/tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Frontend",
      "type": "shell",
      "command": "cd frontend; npm run dev",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Backend",
      "type": "shell",
      "command": "cd backend; npm run start:dev",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Start Development",
      "dependsOrder": "parallel",
      "dependsOn": ["Frontend", "Backend"],
      "problemMatcher": []
    }
  ]
}
```

### 🟢 How to Use:

1. Save the file in your project under `.vscode/tasks.json`.
2. Press `Ctrl+Shift+P` → type `Run Task` → choose `Start Development`.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ri9n1py8m32gnuhmyyfy.png)

### ✅ Pros:

- Works cross-platform (Windows, macOS, Linux).
- Keeps everything inside VS Code.
- Clean terminal management.

### ⚠️ Cons:

- Requires VS Code configuration.
- Might be unfamiliar to beginners.

---

## 🧑‍💻 Bonus: Use `npm-run-all` for Package Script Automation

If you want a platform-independent solution **using just `package.json`**, try [`npm-run-all`](https://www.npmjs.com/package/npm-run-all).

### 🔧 Install:

```bash
npm install npm-run-all --save-dev
```

### 🛠️ `package.json` Example:

```json
"scripts": {
  "frontend": "cd frontend && npm run dev",
  "backend": "cd backend && npm run start:dev",
  "start:dev": "run-p frontend backend"
}
```

### 🟢 How to Run:

```bash
npm run start:dev
```

> run-p stands for "run parallel".

### ✅ Pros:

- No VS Code or OS-specific configuration needed.
- Single command to run both.

---

## 🏁 Conclusion

No matter which method you prefer: batch script, VS Code tasks, or npm automation. You now have **multiple pro-level ways** to start both your frontend and backend with a single command.

Pick the one that fits your workflow and stop wasting time switching terminals!

---

## 💡 Which Should You Use?

| Method            | Best For              | OS      | UI                       |
| ----------------- | --------------------- | ------- | ------------------------ |
| PowerShell Script | Windows Users         | Windows | Opens external terminals |
| VS Code Tasks     | VS Code fans          | All     | Integrated terminal      |
| npm-run-all       | Platform independence | All     | CLI                      |

---

🧡 Thanks for Reading!

That’s all for this week! Thanks for reading — I hope something here sparked your curiosity or helped you see tech from a new angle. If you enjoyed this, feel free to share it or hit reply. I’d love to hear your thoughts. Until next time, keep learning and building!

— Sumonta Saha Mridul, **Associate Software Engineer I**, Cefalo Bangladesh Ltd.

Donate if you wish to support 💗: **[[Bkash - Rocket](https://forms.gle/osWQmMzD166o2LdS7)] [[Buy Me a Book](https://www.buymeacoffee.com/sumontasahi)]**

Subscribe Weekly Newsletter : **[Learn & Code Weekly](https://www.linkedin.com/newsletters/learn-code-weekly-7309186050084544512/)**
