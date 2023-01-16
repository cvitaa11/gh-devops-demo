---
name: Test report
about: Create a report to help us improve
title: Test failed {{ date | date('dddd, MMMM Do') }}
labels: bug
assignees:
  - cvitaa11
---

**Describe the bug**
Someone just pushed bad code, oh no! Here's who did it: {{ payload.sender.login }}.

**To Reproduce**
Steps to reproduce the behavior:

1.  `npm test -- --watchALL=false`

**Expected behavior**
Tests should pass.
