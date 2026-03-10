# Game Demo (Work in Progress)

This repository hosts the **compiled demo build** of my browser-based shop simulation game.  
The source code is private, but this demo is deployed via GitHub Pages to showcase current progress.

## Project Overview
A browser-based game prototyped with Vue & TS where players craft, brew, and sell items to customers.  
The focus is on **system design, data flow, and simulation logic** rather than graphics.

## Current Features
- **Player UI**: Displays reactive health, gold, reputation, clock, and customer arrival probability per tick.
- **Ingredients**: JSON dataset of ingredients (planned migration to DB).
- **Crafting & Brewing**: Items can be crafted or brewed until ingredients are 'out of stock'.
- **Shop Tab**: Crafted/brewed items appear here and can be sold to customers if set on the **Sale Counter** and requested.
- **Day/Night Cycle**: Driven by a master clock managing internal game state and changing visual state.
- **Customer Simulation**: Probability-based customer arrivals, item requests, and patience timers for each customer.
- **Economy Feedback**: Selling items affects gold and reputation.
- **Main Mechanic**: Player is affected by a 'magical curse' and will lose health periodically, and when performing taxing actions such as crafting/brewing/serving customer, (this will later be offset by drinking potions other than selling them)

## Visual Approach
Instead of 3D libraries or canvas, the game uses a **dynamic background system**:  
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
- Deepen full-stack knowledge through **system-oriented design**.

## Roadmap
- Pinia state management integration
- Database-backed ingredient storage
- Expanded customer AI and scheduling
- Unit and integration testing

## Live Demo
[Check the demo here](https://vuknt.github.io/shop-game-demo/)

## Notes
Current game clock is 'sped up x10' for easier testing
This repository hosts only the compiled `/dist` files.  
