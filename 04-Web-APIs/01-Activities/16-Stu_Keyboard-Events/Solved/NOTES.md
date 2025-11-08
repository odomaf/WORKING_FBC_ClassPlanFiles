# 16_Stu-Keyboard-Events — Solved

## What this shows
- Reading `event.key` (the character or key label) and `event.code` (the physical key).
- Distinguishing `keydown` vs `keyup` with live status text.
- Optional visual feedback by changing the container’s background color.

## Tips for students
- Try special keys: Enter, Shift, Space, ArrowUp.
- Discuss why `event.key` for Space is `" "` (blank) and we display `"Space"` for clarity.
- Compare behavior if you switch listeners to `keyup` only.