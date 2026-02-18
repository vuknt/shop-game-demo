# Game Demo (Work in Progress)

This repository hosts the **compiled demo build** of my browser-based shop simulation game.  
The source code is private, but this demo is deployed via GitHub Pages to showcase current progress.

## Project Overview
A browser-based game prototyped with Vue & TS where players craft, brew, and sell items to customers.  
The focus is on **system design, data flow, and simulation logic** rather than graphics.

## Current Features
- **Player UI**: Displays health, gold, reputation, and clock.
- **Ingredients**: JSON dataset of ingredients (planned migration to DB).
- **Crafting & Brewing**: Items can be crafted or brewed until ingredients are consumed.
- **Shop Tab**: Crafted/brewed items appear here and can be sold.
- **Day/Night Cycle**: Driven by a master clock managing internal game state.
- **Customer Simulation**: Probability-based customer arrivals.
- **Economy Feedback**: Selling items affects gold and reputation.

## Visual Approach
Instead of 3D libraries or `<canvas>`, the game uses a **dynamic background system**:  
- UI background updates based on player state and day/night cycle.  
- Conveys the *feel* of a game world without heavy graphics engines.  
- Keeps focus on **system-oriented design**.

## Technical Notes
- **State Management**: Currently a group of composables; migration to **Pinia** planned.
- **Testing**: Unit tests with **Vitest** will validate core mechanics.
- **Architecture Goal**: Explore data flow, probability systems, and simulation logic.

## Purpose
This project is a **technical sandbox** designed to:
- Explore **software architecture and data flow** in a game-like system.
- Push the limits of **web development without a game engine**.
- Deepen fullstack knowledge through **system-oriented design**.

## Roadmap
- Pinia state management integration
- Database-backed ingredient storage
- Expanded customer AI and scheduling
- Unit and integration testing

## Live Demo
[Check the demo here](https://vuknt.github.io/shop-game-demo/)

## Notes
This repository hosts only the compiled `/dist` files.  