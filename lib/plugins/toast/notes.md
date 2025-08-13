# Toast Plugin

## Todo

- Need an action toast (like with a button)

## Ideas

- Should the plugin work like a class/factory
  - Allow for creating more than one
    - Could use for different types of notifications, etc
  - Probably do this after project

## Things to Setup

- Should be on screen default 6 seconds
- Should enter fast and exit slow
- Should not include icons but can use color for status/type
- Can include an action
- Should allow closing

## How should interaction work for showing the notifications after they've been hidden

- I think this should be on the user side instead of handling that logic in this plugin
  - User can create a list of toast notifications
  - Show them to the user
    - If the user dismisses one it is removed from the list
    - If they fade away without dismiss the user will add them to some app level notification cache
    - They will update their notification bell/button to indicate un-dismissed toasts
    - Clicking on the bell/button will add the cached toasts back to the toast plugin for display
- If we build the interaction above in this plugin
  - Can it be broken up into optional behaviors/components?
    - This isn't a terrible idea, can be unused if not flexible enough to meet ui needs
    - Helps to not have to setup everything from scratch if it fits that pattern

## Future Use Cases

- Should we use classes for data types for plugins like this
  - Could also use typescript in the future
  - Could also create classes (ie. toast)
    - Allows instances instanceOf
    - Would allow for prototype methods
  - I think we should keep this all simple for now and think more about the pros/cons of setting it up like that
- May want to have to outputs in display?
  - Toasts
  - Persistent Notification 
    - Doesn't disappear, user must take action
      - Could use modals for this seems more appropriate