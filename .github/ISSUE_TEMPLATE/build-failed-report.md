---
name: Build report
about: Our app does not build
title: Build failed {{ date | date('dddd, MMMM Do') }}
labels: bug
assignees:
  - cvitaa11
---

**Describe the problem**
Someone just caused a crash! Here's who did it: {{ payload.sender.login }}

**To Reproduce**
Steps to reproduce the behavior:

1.  `npm run build`

**Expected behavior**
Build should execute successfully.
