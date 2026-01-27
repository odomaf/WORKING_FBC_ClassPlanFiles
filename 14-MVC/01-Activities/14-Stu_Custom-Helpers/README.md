# 🐛 Exhibition End Date Is Not Formatted Correctly

Work with a group to identify and fix the issue described below.

## 🎯 Problem Overview

Museum visitors should be able to clearly see **when an exhibition will end** for each painting shown on the painting detail page.

## ✅ Expected Behavior

- When a visitor views a painting’s page, the exhibition **end date** is displayed clearly.
- The end date is calculated by adding **five years** to the painting’s `exhibition_date`.
- The end date is formatted in the following style:

  `M/D/YYYY`

## ❌ Actual Behavior

- When a visitor views the painting page, the exhibition date appears in its original long timestamp format.
- The calculated end date is either missing or not formatted correctly.

## 🖼️ Assets

The following image demonstrates the correct formatting for a painting’s exhibition end date:

![A museum webpage showing a painting card with an image, title, artist name, and a formatted exhibition end date.](./Images/01-painting-end-date.jpg)

---

## 💡 Hints

As you work through this issue, think about the following:

- Which JavaScript `Date` methods can be used to retrieve the month, day, and year from a date?
- How should the month value be handled, given that JavaScript returns months as zero-based?

## 🏆 Bonus

If you complete the main task early, discuss or research the following:

- What other types of data might benefit from being formatted using custom helpers?
- Why might formatting data in the view layer be preferable to formatting it directly in the database?

Use [Google](https://www.google.com) or another search engine to research these questions.
