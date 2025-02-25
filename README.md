**Beautiful** and **accessible** drag and drop for lists with [`Vue`](https://vuejs.org/)

[![CircleCI branch](https://img.shields.io/circleci/project/github/atlassian/vue-beautiful-dnd/master.svg)](https://circleci.com/gh/atlassian/vue-beautiful-dnd/tree/master)
[![npm](https://img.shields.io/npm/v/vue-beautiful-dnd.svg)](https://www.npmjs.com/package/vue-beautiful-dnd)

![quote application example](https://user-images.githubusercontent.com/2182637/53614150-efbed780-3c2c-11e9-9204-a5d2e746faca.gif)

[Play with this example if you want!](https://vue-beautiful-dnd.netlify.com/iframe.html?selectedKind=board&selectedStory=simple)

</div>

## Core characteristics

- Beautiful and [natural movement](/docs/about/animations.md) of items 💐
- [Accessible](/docs/about/accessibility.md): powerful keyboard and screen reader support ♿️
- [Extremely performant](/docs/support/media.md) 🚀
- Clean and powerful api which is simple to get started with
- Plays extremely well with standard browser interactions
- [Unopinionated styling](/docs/guides/preset-styles.md)
- No creation of additional wrapper dom nodes - flexbox and focus management friendly!

## Get started 👩‍🏫

We have created [a free course on `egghead.io` 🥚](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-vue-beautiful-dnd) to help you get started with `vue-beautiful-dnd` as quickly as possible.

[![course-logo](https://user-images.githubusercontent.com/2182637/43372837-8c72d3f8-93e8-11e8-9d92-a82adde7718f.png)](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-vue-beautiful-dnd)

## Currently supported feature set ✅

- Vertical lists ↕
- Horizontal lists ↔
- Movement between lists (▤ ↔ ▤)
- [Virtual list support 👾](/docs/patterns/virtual-lists.md) - unlocking 10,000 items @ 60fps
- [Combining items](/docs/guides/combining.md)
- Mouse 🐭, keyboard 🎹♿️ and touch 👉📱 (mobile, tablet and so on) support
- [Multi drag support](/docs/patterns/multi-drag.md)
- Incredible screen reader support ♿️ - we provide an amazing experience for english screen readers out of the box 📦. We also provide complete customisation control and internationalisation support for those who need it 💖
- [Conditional dragging](/docs/api/draggable.md#optional-props) and [conditional dropping](/docs/api/droppable.md#conditionally-dropping)
- Multiple independent lists on the one page
- Flexible item sizes - the draggable items can have different heights (vertical lists) or widths (horizontal lists)
- [Add and remove items during a drag](/docs/guides/changes-while-dragging.md)
- Compatible with semantic `<table>` reordering - [table pattern](/docs/patterns/tables.md)
- [Auto scrolling](/docs/guides/auto-scrolling.md) - automatically scroll containers and the window as required during a drag (even with keyboard 🔥)
- Custom drag handles - you can drag a whole item by just a part of it
- Able to move the dragging item to another element while dragging (clone, portal) - [Reparenting your `<Draggable />`](/docs/guides/reparenting.md)
- [Create scripted drag and drop experiences 🎮](/docs/sensors/sensor-api.md)
- Allows extensions to support for [any input type you like 🕹](/docs/sensors/sensor-api.md)
- 🌲 Tree support through the [`@atlaskit/tree`](https://atlaskit.atlassian.com/packages/confluence/tree) package
- A `<Droppable />` list can be a scroll container (without a scrollable parent) or be the child of a scroll container (that also does not have a scrollable parent)
- Independent nested lists - a list can be a child of another list, but you cannot drag items from the parent list into a child list
- Server side rendering (SSR) compatible - see [resetServerContext()](/docs/api/reset-server-context.md)
- Plays well with [nested interactive elements](/docs/api/draggable.md#interactive-child-elements-within-a-draggable-) by default

## Motivation 🤔

`vue-beautiful-dnd` exists to create beautiful drag and drop for lists that anyone can use - even people who cannot see. For a good overview of the history and motivations of the project you can take a look at these external resources:

## Documentation 📖

### About 👋

- [Installation](/docs/about/installation.md)
- [Examples and samples](/docs/about/examples.md)
- [Get started](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-vue-beautiful-dnd)
- [Design principles](/docs/about/design-principles.md)
- [Animations](/docs/about/animations.md)
- [Accessibility](/docs/about/accessibility.md)
- [Browser support](/docs/about/browser-support.md)

### Sensors 🔉

> The ways in which somebody can start and control a drag

- [Mouse dragging 🐭](/docs/sensors/mouse.md)
- [Touch dragging 👉📱](/docs/sensors/touch.md)
- [Keyboard dragging 🎹♿️](/docs/sensors/keyboard.md)
- [Create your own sensor](/docs/sensors/sensor-api.md) (allows for any input type as well as scripted experiences)

### API 🏋️‍

![diagram](https://user-images.githubusercontent.com/2182637/53607406-c8f3a780-3c12-11e9-979c-7f3b5bd1bfbd.gif)

- [`<DragDropContext />`](/docs/api/drag-drop-context.md) - _Wraps the part of your application you want to have drag and drop enabled for_
- [`<Droppable />`](/docs/api/droppable.md) - _An area that can be dropped into. Contains `<Draggable />`s_
- [`<Draggable />`](/docs/api/draggable.md) - _What can be dragged around_
- [`resetServerContext()`](/docs/api/reset-server-context.md) - _Utility for server side rendering (SSR)_

### Guides 🗺

- [`<DragDropContext />` responders](/docs/guides/responders.md) - _`onDragStart`, `onDragUpdate`, `onDragEnd` and `onBeforeDragStart`_
- [Combining `<Draggable />`s](/docs/guides/combining.md)
- [Common setup issues](/docs/guides/common-setup-issues.md)
- [Using `innerRef`](/docs/guides/using-inner-ref.md)
- [Setup problem detection and error recovery](/docs/guides/setup-problem-detection-and-error-recovery.md)
- [Rules for `draggableId` and `droppableId`s](/docs/guides/identifiers.md)
- [Browser focus retention](/docs/guides/browser-focus.md)
- [Customising or skipping the drop animation](/docs/guides/drop-animation.md)
- [Auto scrolling](/docs/guides/auto-scrolling.md)
- [Controlling the screen reader](/docs/guides/screen-reader.md)
- [Use the html5 `doctype`](/docs/guides/doctype.md)
- [`TypeScript` and `flow`: type information](/docs/guides/types.md)
- [Dragging `<svg>`s](/docs/guides/dragging-svgs.md)
- [Avoiding image flickering](/docs/guides/avoiding-image-flickering.md)
- [Non-visible preset styles](/docs/guides/preset-styles.md)
- [How we detect scroll containers](/docs/guides/how-we-detect-scroll-containers.md)
- [How we use dom events](/docs/guides/how-we-use-dom-events.md) - _Useful if you need to build on top of `vue-beautiful-dnd`_
- [Adding `<Draggable />`s during a drag (11.x behaviour)](/docs/guides/changes-while-dragging.md) - _⚠️ Advanced_
- [Setting up Content Security Policy](/docs/guides/content-security-policy.md)

### Patterns 👷‍

- [Virtual lists 👾](/docs/patterns/virtual-lists.md)
- [Multi drag](/docs/patterns/multi-drag.md)
- [Tables](/docs/patterns/tables.md)
- [Reparenting a `<Draggable />`](/docs/guides/reparenting.md) - _Using our cloning API or your own portal_

## Creator ✍️

Chad McCaulley
