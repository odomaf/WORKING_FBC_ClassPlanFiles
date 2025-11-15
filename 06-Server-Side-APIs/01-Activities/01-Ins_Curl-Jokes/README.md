# 01-Ins_Curl_Jokes

## Goal

Show how to hit a public API from the terminal using `curl`.

## Steps

1. Open your terminal.
2. Run:
   curl https://api.chucknorris.io/jokes/random
3. Find the `"value"` property in the JSON — that’s the joke.

## Notes

- This proves the endpoint/URL works before we write any JavaScript.
- If you see a long line, pipe through `jq` (if installed):
  curl https://api.chucknorris.io/jokes/random | jq
