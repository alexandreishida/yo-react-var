# yo-react-var
A reactive variable. Based on Meteor reactivity implementation - https://github.com/meteor/meteor/wiki/Tracker-Manual

```
var number = new YoReactVar(1);

YoTracker.autorun(function() {
  console.log('the current number is ' + number.get());
});
// the current name is 1

number.set(2);
// the current name is 2
```
