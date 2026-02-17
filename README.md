# Game Demo (Work in Progress)

This repository hosts the **compiled demo build** of my browser-based game project.  
The source code is private, but this demo is deployed via GitHub Pages to showcase current progress.

## Current Features
- **Player UI**: Basic interface with player health, gold, reputation, and day/night cycle clock.
- **Ingredient System**: Starting JSON dataset of various ingredients(currently mock data that will be moved to a proper database).
- **Crafting & Brewing**: Items can be crafted or brewed until all ingredients are spent.
- **Shop Tab**: Crafted/brewed items can be sold in the shopTab, selling updates player gold and reputation.
- **Day/Night Cycle**: Driven by a master clock that manages the internal game state without relying on async functions or timers.
- **Customer Simulation**: Probability distribution function for customer arrivals (currently in alert and confirm JS prompts).
- **Economy Feedback**: Selling items affects gold and reputation.

## Visual Approach
Instead of using 3D libraries or `<canvas>`, the game uses a **smart visual gimmick**:  
- The UI panel updates dynamically based on the player's current action and day/night cycle (currently, only day/night reflects this).  
- This conveys the *feel* of a game world without heavy graphics engines.  
- Focus remains on **system design and architecture**, not rendering.

## Technical Notes
- **State Management**: Currently handled in a single composable; migration to **Pinia** planned.
- **Testing**: Unit tests will be added with **Vitest** to validate core mechanics.
- **Architecture Goal**: Explore data flow, probability systems, and simulation logic in a web environment.

## Purpose
This project is a **fun technical challenge** designed to:
- Explore **software architecture and data flow** in a game-like system.
- Push the limits of **web development without a game engine**.
- Deepen knowledge of **Vue 3 and TypeScript** by breaking conventional frontend patterns.
- Focus on building a **system-oriented design** rather than just UI.

## Live Demo
👉 [Play the demo here](https://yourusername.github.io/game-demo)

## Notes
- This repo contains only the compiled `/dist` files.
