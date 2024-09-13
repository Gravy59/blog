---
name: Scout Sheet Generator
description: Programmatically generate scout sheets for hockey teams
publishDate: 2024-09-05
---

This ongoing project began as an extracurricular activity in service of my mother, who needed a faster way to generate scout/line sheets for each team in the hockey club she works at. I used React+Vite (with [Jotai](https://jotai.org/) for state management) to create a website that allows coaches to input player stats as a CSV and generate scout sheets. This was the first time I had used a state-management library, and I quickly learned that I enjoyed using it.

## Features

- Import player stats from a CSV
- Input team lead information
- Include a QR code link to the team's Elite Prospects page
- Export the scout sheets as a PDF
- Coverage of edge cases like unfilled player positions
- Support for different themes

## Planned features

- Rearranging player positions using @hello-pangea/dnd
- Adjusting player stats and writing to the CSV file
- Support for different hockey organizations & B2B
