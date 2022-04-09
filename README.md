# Create Daily plan Issue Action

automatic create daily plan issue for nick19910321/study-every-day

## Inputs

## `token`

**Required** github token.

## Example usage

uses: nick19910321/create-daily-plan-issue-action@main

with:
token: 'github token'

```js
jobs:
  create_daily_plan_issue:
    runs-on: ubuntu-latest
    name: create daily plan issue
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: create daily plan issue action step
        uses: nick19910321/create-daily-plan-issue-action@main
        env:
          TOKEN: ${{ secrets.TOKEN }}
        with:
          token: ${{env.TOKEN}}
```
